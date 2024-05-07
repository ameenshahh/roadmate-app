const router = require("express").Router();

// Users
router.post("/signup", require("./signup"));
router.post("/login", require("./login"));



//  Router Export
module.exports = router;
