const Responder = require("../shared/responder");
const searchProduct = require("./lib/searchProduct");

module.exports = async (req, res) => {
  const responder = new Responder(res);

  let { product, page, size } = req.query;

  product = product || "";
  page = page || 1;
  size = size || 10;

  const offset = (page - 1) * size;

  try {
    // Checking for existing user
    const searchedProduct = await searchProduct({
      product,
      size,
      offset
    });

    if (searchedProduct) {
      responder.success({
        message: "Product fetched successfully",
        payload: searchedProduct,
      });
    }
  } catch (error) {
    responder.error({
      message: error.message,
    });
  }
};
