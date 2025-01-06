const express = require("express")

const userController = require ('../controllers/userController');
const User = require('../models/User');

const router = express.Router();

router.route('/').get(userController.getIndexPage);

module.exports = router;