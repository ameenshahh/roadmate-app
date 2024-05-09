const router = require("express").Router();

const authenticate = require("../middleware/authenticate");

// validators
const addProductValidator = require("./validators/addProductValidator");

// Users
router.get("/all", authenticate, require("./getAllProducts"));
router.post("/add", authenticate, addProductValidator, require("./addProduct"));
router.get("/search", authenticate, require("./searchProduct"));

//  Router Export
module.exports = router;
