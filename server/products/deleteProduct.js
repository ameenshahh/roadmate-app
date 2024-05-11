const Responder = require("../shared/responder");
const deleteProduct = require("./lib/deleteProduct");

module.exports = async (req, res) => {
  const responder = new Responder(res);

  let { id } = req.params;

  try {
    let deletedProduct = await deleteProduct(id);

    if (deletedProduct) {
      responder.success({
        message: "Product deleted successfully",
        payload: deletedProduct,
      });
    }
  } catch (error) {
    responder.error({ message: error.message, data: error });
  }
};
