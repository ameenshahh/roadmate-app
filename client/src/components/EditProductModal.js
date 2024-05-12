import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axiosInstance from "../axios";

const EditProductModal = (props) => {
  const {
    toggleEditProductModal,
    setToggleEditProductModal,
    selectedProduct,
    setSelectedProduct,
    params,
    setProducts,
    setProductsCount,
  } = props;

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    product_name: "",
    no_of_stocks: "",
    category: "",
  });

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      product_name: selectedProduct.product_name,
      no_of_stocks: selectedProduct.no_of_stocks,
      category: selectedProduct.category,
    }));
  }, [selectedProduct]);


  const [formErrors, setFormErrors] = useState({
    product_name: "",
    no_of_stocks: "",
    category: "",
  });

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
  const handleChange = (e) => {
    const { name, value } = e.target;
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const { product_name, no_of_stocks, category } = formData;
    const errors = {};


    if (Object.keys(errors).length === 0) {
      try {
        const response = await axiosInstance.patch(
          `/product/edit/${selectedProduct.id}`,
          formData
        );

        if (response.status == 200) {
          setSuccess("Product edited successfully");
          setFormData({
            product_name: "",
            no_of_stocks: "",
            category: "",
          });
          setToggleEditProductModal(false);
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
  return (
    <div className="model_box">
      <Modal
        show={props.toggleEditProductModal}
        onHide={props.setToggleEditProductModal}
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
          <Button variant="secondary" onClick={props.setToggleEditProductModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditProductModal;
