const router = require("express").Router();

// Users
router.post("/login", require("./login"));



//  Router Export
module.exports = router;
