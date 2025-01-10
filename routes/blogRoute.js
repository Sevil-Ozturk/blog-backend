const express = require("express")
const blogController = require ('../controllers/blogController');
const Blog = require('../models/Blog');

const router = express.Router();

//router.route('/').get(blogController.getIndexPage);
// router.route('/').get(blogController.createBlog);


router.route('/').post(blogController.createBlog); // Blog oluşturma
router.route('/:id').get(blogController.getBlog); // Blog detay
router.route('/:id').put(blogController.updateBlog); // Blog güncelleme
router.route('/:id').delete(blogController.deleteBlog); // Blog silme

module.exports = router;