const router = require("express").Router();

// validators
const signupValidator = require("./validators/signupValidator");
const loginValidator = require("./validators/loginValidator");

// Users
router.post("/signup", signupValidator, require("./signup"));
router.post("/login", loginValidator, require("./login"));

//  Router Export
module.exports = router;
