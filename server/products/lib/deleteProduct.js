const Product = require("../../models").Product;

module.exports = async (product) => {
  try {
    const response = await Product.create(product);
    return response;
  } catch (e) {
    throw e;
  }
};
