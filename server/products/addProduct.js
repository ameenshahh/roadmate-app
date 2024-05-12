const Responder = require("../shared/responder");
const addProduct = require("./lib/addProduct");

module.exports = async (req, res) => {
  const responder = new Responder(res);

  let { product_name, no_of_stocks, category } = req.body;

  try {
    // Checking for existing user
    const addedProduct = await addProduct({ product_name, no_of_stocks, category });

    if (addedProduct) {
      responder.success({
        message: "Product added successfully",
        payload: addedProduct,
      });
    }
  } catch (error) {
    responder.error({
      message: error.message,
    });
  }
};
