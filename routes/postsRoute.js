const express = require("express")
const postsController = require ('../controllers/postsController');

const router = express.Router();

router.route('/').get(postsController.getPosts);

router.route('/').post(postsController.createPost); // Blog oluşturma
// router.route('/:id').get(postsController.getPost); // Blog detay
router.route('/:id').put(postsController.updatePost); // Blog güncelleme
router.route('/:id').delete(postsController.deletePost); // Blog silme

module.exports = router;