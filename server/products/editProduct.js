const Responder = require("../shared/responder");
const editProduct = require("./lib/editProduct");

module.exports = async (req, res) => {
  const responder = new Responder(res);

  let params = {
    id: req.params.id,
    updateData: {
      product_name: req.body.product_name,
      no_of_stocks: req.body.no_of_stocks,
      category: req.body.category,
    },
  };

  try {
    const editedProduct = await editProduct(params);

    if (editedProduct) {
      responder.success({
        message: "Product edited successfully",
        payload: editedProduct,
      });
    }
  } catch (error) {
    responder.error({
      message: error.message,
    });
  }
};
