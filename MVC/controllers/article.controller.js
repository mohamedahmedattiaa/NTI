const Article = require("../models/article-model");

exports.createArticle = async (req, res, next) => {
  try {
    const { title, content, author, category, tags, published } = req.body;
    const userid = req.user?.id || req.body.userid;

    const newArticle = await Article.create({
      title,
      content,
      author,
      category,
      tags,
      published,
      userid,
    });

    res.status(201).json({
      status: "success",
      data: newArticle,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllArticles = async (req, res, next) => {
  try {
    const getAllArticles = await Article.find({ isDeleted: false });

    res.status(200).json({
      status: "success",
      results: getAllArticles.length,
      data: getAllArticles,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateArticle = async (req, res, next) => {
  try {
    const updatedArticle = await Article.findOneAndUpdate(
      { _id: req.params.id, isDeleted: false },
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!updatedArticle) {
      return res.status(404).json({
        status: "failed",
        message: "Article not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: updatedArticle,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteArticle = async (req, res, next) => {
  try {
    const deletedArticle = await Article.findOneAndUpdate(
      { _id: req.params.id },
      { isDeleted: true, updatedAt: Date.now() },
      { new: true }
    );

    if (!deletedArticle) {
      return res.status(404).json({
        status: "failed",
        message: "Article not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Article was deleted",
    });
  } catch (err) {
    next(err);
  }
};
