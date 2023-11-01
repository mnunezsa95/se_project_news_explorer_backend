const router = require("express").Router(); // import and create the router
const {
  getArticles,
  createArticle,
  deleteArticle,
} = require("../controllers/articles");

router.get("/", getArticles);
router.post("/", createArticle);
router.delete("/:articleId", deleteArticle);

module.exports = router;
