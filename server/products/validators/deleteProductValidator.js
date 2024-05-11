const { body, param, validationResult } = require("express-validator");

const validator = [
  body("product_name")
    .notEmpty()
    .withMessage("Product name is required")
    .isString()
    .withMessage("Product name be a string"),

  body("no_of_stocks")
    .notEmpty()
    .withMessage("Number of stocks is required")
    .isInt()
    .withMessage("Stocks must be an integer"),

  body("category")
    .notEmpty()
    .withMessage("Category is required")
    .isString()
    .withMessage("Category be a string"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validator;
