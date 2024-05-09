const Product = require("../../models").Product;

module.exports = async () => {
  try {
    const response = await Product.findAll();
    return response;
  } catch (e) {
    throw e;
  }
};
