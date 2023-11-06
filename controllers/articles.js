const ArticleItem = require("../models/article");
const { BadRequestError } = require("../errors/BadRequestError");

const getArticles = (req, res, next) => {
  ArticleItem.find({})
    .then((articles) => res.send(articles))
    .catch((err) => next(err));
};

const createArticle = (req, res, next) => {
  const { keyword, title, text, date, source, link, image } = req.body;
  console.log(req.body);
  console.log(req.user);
  ArticleItem.create({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    owner: req.user,
  })
    .then((article) => res.send(article))
    .catch((err) => {
      if (err.name === "ValidationError") {
        next(new BadRequestError("invalid data sent to server"));
      } else {
        next(err);
      }
    });
};

const deleteArticle = () => {};

module.exports = { getArticles, createArticle, deleteArticle };
