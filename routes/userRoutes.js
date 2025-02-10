const express = require("express");
const usersController = require('../controllers/usersController');

const router = express.Router();

router.route('/users').get(usersController.getUsers);
// router.route('/register').post(userController.registerUser); // Kullanıcı kaydolma
// router.route('/login').post(userController.loginUser); // Kullanıcı giriş yapma
// router.route('/authors').get(userController.getAllUsers); // Yazarları listeleme

module.exports = router;