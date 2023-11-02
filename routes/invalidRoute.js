const router = require("express").Router();
const { NotFoundError } = require("../errors/NotFoundError");

router.use(() => {
  throw new NotFoundError("There is no such router. Try a valid URI.");
});

module.exports = router;
