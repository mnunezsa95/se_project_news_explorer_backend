const router = require("express").Router(); // import and create the router
const { getCurrentUser } = require("../controllers/users");
const { auth } = require("../middlewares/auth");

router.get("/me", auth, getCurrentUser);

module.exports = router;
