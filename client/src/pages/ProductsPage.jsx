import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Input } from "react-bootstrap";

const ProductsPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div class="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="row ">
          <div class="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search products"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div
            class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Products</b>
            </h2>
          </div>
          <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Add New Product
            </Button>
          </div>
        </div>
        <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
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
                <tr>
                  <td>1</td>
                  <td>Rual Octo</td>
                  <td>Deban Steet</td>
                  <td>USA</td>
                  <td>
                    <a
                      href="#"
                      class="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i class="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                      <i class="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      class="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i class="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Demark</td>
                  <td>City Road.13</td>
                  <td>UAE</td>
                  <td>
                    <a
                      href="#"
                      class="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i class="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                      <i class="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      class="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i class="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>Richa Deba</td>
                  <td>Ocol Str. 57</td>
                  <td>Germany</td>
                  <td>
                    <a
                      href="#"
                      class="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i class="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                      <i class="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      class="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i class="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>James Cott</td>
                  <td>Berut Road</td>
                  <td>France</td>
                  <td>
                    <a
                      href="#"
                      class="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i class="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                      <i class="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      class="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i class="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>Dheraj</td>
                  <td>Bulf Str. 57</td>
                  <td>India</td>
                  <td>
                    <a
                      href="#"
                      class="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i class="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                      <i class="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      class="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i class="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>6</td>
                  <td>Maria James</td>
                  <td>Obere Str. 57</td>
                  <td>Japan</td>
                  <td>
                    <a
                      href="#"
                      class="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i class="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                      <i class="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      class="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i class="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <!--- Model Box ---> */}
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
              <form>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Country"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter City"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Country"
                  />
                </div>

                <button type="submit" class="btn btn-success mt-4">
                  Add Record
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
