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

    let [products, count] = await Promise.all([
      Product.findAll({
        where: filter,
        limit: parseInt(size),
        offset: parseInt(offset),
        order: [["createdAt", "DESC"]],
      }),
      Product.count({ where: filter }),
    ]);
    return { products, count };
  } catch (e) {
    throw e;
  }
};
