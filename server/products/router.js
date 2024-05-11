const router = require("express").Router();

const authenticate = require("../middleware/authenticate");

// validators
const addProductValidator = require("./validators/addProductValidator");
const editProductValidator = require("./validators/editProductValidator");
const deleteProductValidator = require("./validators/deleteProductValidator");

// Users
router.get("/all", authenticate, require("./getAllProducts"));
router.post("/add", authenticate, addProductValidator, require("./addProduct"));
router.get("/search", authenticate, require("./searchProduct"));

router.patch(
  "/edit/:id",
  authenticate,
  editProductValidator,
  require("./editProduct")
);

router.delete(
  "/delete/:id",
  authenticate,
  deleteProductValidator,
  require("./deleteProduct")
);

//  Router Export
module.exports = router;
