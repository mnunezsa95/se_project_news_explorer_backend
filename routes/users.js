const router = require("express").Router(); // import and create the router
const { getCurrentUser } = require("../controllers/users");

router.get("/me", getCurrentUser);

module.exports = router;
