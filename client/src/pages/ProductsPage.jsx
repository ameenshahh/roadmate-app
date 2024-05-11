import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Input, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";

const ProductsPage = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [productsCount, setProductsCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [params, setParams] = useState({ product: "", page: 1, size: 10 });

  const [formData, setFormData] = useState({
    product_name: "",
    no_of_stocks: "",
    category: "",
  });

  const [formErrors, setFormErrors] = useState({
    product_name: "",
    no_of_stocks: "",
    category: "",
  });

  let totalPages = Math.ceil(productsCount / params.size);

  const isLoggedIn = () => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  };

  const getAllProducts = async () => {
    try {
      const response = await axiosInstance.get(
        `/product/search?product=${params.product}&page=${params.page}&size=${params.size}`
      );
      setProducts(response.data.data.products);
      setProductsCount(response.data.data.count);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else if (error.request) {
        setError("No response received from the server");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  useEffect(() => {
    isLoggedIn();
    getAllProducts();
  }, []);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getAllProducts();
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const { product_name, no_of_stocks, category } = formData;
    const errors = {};

    if (!product_name.trim()) {
      errors.product_name = "Product name is required";
    }

    if (!no_of_stocks.trim()) {
      errors.no_of_stocks = "No of stocks is required";
    }

    if (!category.trim()) {
      errors.category = "Category is required";
    }

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axiosInstance.post("/product/add", formData);
        if (response.status == 200) {
          setSuccess("Product added successfully");
          setFormData({
            product_name: "",
            no_of_stocks: "",
            category: "",
          });
          setShow(false);
          getAllProducts();
        }
      } catch (error) {
        if (error.response) {
          setError(error.response.data.message);
        } else if (error.request) {
          setError("No response received from the server");
        } else {
          setError("An unexpected error occurred");
        }
      }
    } else {
      setFormErrors(errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear form errors for the field being changed
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleSearchProduct = async (e) => {
    const { name, value } = e.target;
    setParams((prevParams) => ({
      ...prevParams,
      product: value,
      page: 1,
    }));
  };

  const paginationBtnHandler = (e) => {
    let buttonValue = e.target.value;
    setParams((prevParams) => ({
      ...prevParams,
      page: buttonValue,
    }));
  };

  const handlePrevPaginationBtn = () => {
    if (params.page > 1) {
      setParams((prevParams) => ({
        ...prevParams,
        page: parseInt(prevParams.page) - 1,
      }));
    }
  };

  const handleNextPaginationBtn = () => {
    if (params.page < totalPages) {
      setParams((prevParams) => ({
        ...prevParams,
        page: parseInt(prevParams.page) + 1,
      }));
    }
  };

  return (
    <div className="container">
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show mt-2"
          role="alert"
        >
          <span>{error}</span>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      {success && (
        <div
          className="alert alert-success alert-dismissible fade show mt-2"
          role="alert"
        >
          <strong>Product added successfully</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">
          <div className="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <input
                className="form-control mr-sm-2"
                type="search"
                name="search"
                placeholder="Search products"
                aria-label="Search"
                onChange={handleSearchProduct}
                value={params.product}
              />
            </div>
          </div>
          <div
            className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Products</b>
            </h2>
          </div>
          <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Add New Product
            </Button>
          </div>
        </div>
        {productsCount > 0 ? (
          <div className="row">
            <div className="table-responsive ">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product name </th>
                    <th>Stocks</th>
                    <th>Category </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{(params.page - 1) * params.size + index + 1}</td>
                        <td>{item.product_name}</td>
                        <td>{item.no_of_stocks}</td>
                        <td>{item.category}</td>

                        <td>
                          <a
                            className="edit"
                            title="Edit"
                            data-toggle="tooltip"
                            onClick={() => handleEdit(item)}
                          >
                            <i className="material-icons">&#xE254;</i>
                          </a>
                          <a
                            className="delete"
                            title="Delete"
                            data-toggle="tooltip"
                            style={{ color: "red" }}
                          >
                            <i className="material-icons">&#xE872;</i>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* Pagination */}

              <nav>
                <ul className="pagination">
                  <li className="page-item">
                    <button
                      className="page-link"
                      aria-label="Previous"
                      onClick={handlePrevPaginationBtn}
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  {productsCount &&
                    Array.from({ length: totalPages }, (_, index) => (
                      <li
                        className={`page-item ${
                          params.page == index + 1 ? "active" : ""
                        }`}
                        key={index}
                      >
                        <button
                          className="page-link"
                          value={index + 1}
                          onClick={paginationBtnHandler}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}

                  <li className="page-item">
                    <button
                      className="page-link"
                      aria-label="Next"
                      onClick={handleNextPaginationBtn}
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        ) : (
          <h5 class="text-center">No result found</h5>
        )}

        {/* <!--- Add productModal Box ---> */}
        <div className="model_box">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {error && (
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  <span>{error}</span>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    name="product_name"
                    placeholder="Enter product name"
                    value={formData.product_name}
                    onChange={handleChange}
                  />
                  {formErrors.product_name && (
                    <p className="text-danger">{formErrors.product_name}</p>
                  )}
                </div>

                <div className="form-group mt-3">
                  <input
                    type="number"
                    className="form-control"
                    id="stocks"
                    name="no_of_stocks"
                    placeholder="Enter no of stocks"
                    value={formData.no_of_stocks}
                    onChange={handleChange}
                  />
                  {formErrors.no_of_stocks && (
                    <p className="text-danger">{formErrors.no_of_stocks}</p>
                  )}
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    name="category"
                    placeholder="Enter category"
                    value={formData.category}
                    onChange={handleChange}
                  />
                  {formErrors.category && (
                    <p className="text-danger">{formErrors.category}</p>
                  )}
                </div>

                <button type="submit" className="btn btn-success mt-4">
                  Save
                </button>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Model Box  */}
        </div>

       
      </div>
    </div>
  );
};

export default ProductsPage;
