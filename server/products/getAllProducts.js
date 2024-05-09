const Responder = require("../shared/responder");
const getAllProducts = require("./lib/getAllProducts");

module.exports = async (req, res) => {
  const responder = new Responder(res);

  try {
    // Checking for existing user
    const products = await getAllProducts();

    if (products) {
      responder.success({
        message: "Products fetched successfully",
        payload: products,
      });
    }
  } catch (error) {
    responder.error({
      message: error.message,
    });
  }
};
