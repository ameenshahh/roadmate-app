const Product = require("../../models").Product;

module.exports = async (id) => {
  try {
    const product = await Product.findByPk(id);

    if (!product) {
      throw new Error("This product doesn't exist");
    }

    return await product.destroy();
  } catch (e) {
    throw e;
  }
};
