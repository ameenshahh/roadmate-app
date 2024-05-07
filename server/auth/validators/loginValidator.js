const { body, param, validationResult } = require("express-validator");

const validator = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isString()
    .withMessage("Country must be a string")
    .isEmail()
    .withMessage("Invalid email format"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isString()
    .withMessage("State must be a string"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validator;
