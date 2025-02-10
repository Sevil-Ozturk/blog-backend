const express = require("express")
const postsController = require ('../controllers/postsController');

const router = express.Router();

router.route('/').get(postsController.getPosts);//postların tamamını göster

router.route('/').post(postsController.createPost); // post oluşturma
router.route('/:id').get(postsController.getSinglePost); // post detay
router.route('/:id').put(postsController.updatePost); // post güncelleme
router.route('/:id').delete(postsController.deletePost); // post silme

module.exports = router;