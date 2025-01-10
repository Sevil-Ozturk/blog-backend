// const express = require("express")
const express = require('express');
const userController = require('../controllers/userController');
// const userController = require ('../controllers/userController');
// const User = require('../models/User');

const router = express.Router();

// router.route('/').get(userController.getIndexPage);
router.route('/register').post(userController.registerUser); // Kullanıcı kaydolma
router.route('/login').post(userController.loginUser); // Kullanıcı giriş yapma
router.route('/authors').get(userController.getAllUsers); // Yazarları listeleme

module.exports = router;