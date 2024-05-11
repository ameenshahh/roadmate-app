import React from "react";

const EditProductModal = () => {
  return (
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
    </div>
  );
};

export default EditProductModal;
