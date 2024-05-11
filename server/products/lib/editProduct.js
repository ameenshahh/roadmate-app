const Product = require("../../models").Product;

module.exports = async (params) => {
  try {
    const product = await Product.findByPk(params.id);

    if (!product) {
      throw new Error("This product doesn't exist");
    }

    Object.keys(params.updateData).forEach((key) => {
      if (params.updateData[key] !== undefined) {
        product[key] = params.updateData[key];
      }
    });

    return await product.save();
  } catch (e) {
    console.log(e);
    throw e;
  }
};
