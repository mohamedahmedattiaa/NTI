const express = require('express');
// const express_valdator = require('express-validator');
const {createArticle,getAllArticles,updateArticle,deleteArticle} = require('../controllers/article.controller');
const { default: mongoose } = require('mongoose');
const router = express.Router();

router.get("/",createArticle);
router.post("/",getAllArticles);
router.patch("/:id", updateArticle);
router.delete("/:id", deleteArticle);


module.exports = router;

