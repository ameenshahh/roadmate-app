const { body, validationResult } = require("express-validator");

const validator = [
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isString()
    .withMessage("name must be a string"),

    body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isString()
    .withMessage("Email must be a string")
    .isEmail()
    .withMessage("Invalid email format"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isString()
    .withMessage("Password must be a string")
    .isLength({ max: 15 })
    .withMessage("Password cannot be longer than 15 characters")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/) 
    .withMessage('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validator;