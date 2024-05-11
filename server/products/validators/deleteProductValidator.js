const { body, param, validationResult } = require("express-validator");

const validator = [
  param("id")
    .notEmpty()
    .withMessage("Id not found")
    .isUUID()
    .withMessage("Id must be a UUID"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validator;
