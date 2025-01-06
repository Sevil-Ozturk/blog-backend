const express = require("express")
const blogController = require ('../controllers/blogController');
const Blog = require('../models/Blog');

const router = express.Router();

router.route('/').get(blogController.getIndexPage);

module.exports = router;