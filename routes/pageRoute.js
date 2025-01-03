const express = require("express")
const pageController = require ('../controllers/pageController');
const Blog = require('../models/Blog');

const router = express.Router();

router.route('/').get(pageController.getIndexPage);

module.exports = router;