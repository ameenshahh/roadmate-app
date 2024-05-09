const Product = require("../../models").Product;
const { Op } = require("sequelize");

module.exports = async ({ product, size, offset }) => {
  const searchTerms = product.split(" ");
  
  try {
    let filter = {
      product_name: {
        [Op.and]: searchTerms.map((term) => ({
          [Op.like]: `%${term}%`,
        })),
      },
    };
    const response = await Product.findAll({
      where: filter,
      //   limit: parseInt(size),
      //   offset: parseInt(offset),
      order: [["createdAt", "DESC"]],
    });
    return response;
  } catch (e) {
    throw e;
  }
};
