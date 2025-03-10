const mongoose = require('mongoose');

const Posts = require('../models/Post');
// tüm postları getirir
exports.getPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json( {posts,total: posts.length });
  } catch (error) {
    res.status(404).json({ status: 'fail', message: error.message });
  }
 
};
//post un detayına gitmeyi sağlar
exports.getSinglePost = async (req, res) => {
  try {
    const {id : _id} = req.params;
    const post = await Posts.findById(_id);
    res.status(200).json( post );
  } catch (error) {
    res.status(404).json({ status: 'fail', message: error.message });
  }
 
};

// yeni bir post oluşturur
exports.createPost = async (req, res) => {
  try {
    const newPostData=req.body;

    if(req.file){
      newPostData.image = `/uploads/${req.file.filename}`;
    }
    const newPost = await Posts.create(newPostData);
    res.status(201).json( newPost );
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message });
  }
};

// Postu günceller
exports.updatePost = async (req, res) => {
  const { id: _id } = req.params;

  // ObjectId kontrolü
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ status: 'fail', message: 'Geçersiz ID formatı' });
  }

  try {

    const updatedData = req.body;
    if (req.file) {
      updatedData.image = `/uploads/${req.file.filename}`;
    }

    const updatedPost = await Posts.findByIdAndUpdate(_id, updatedData, {
      new: true, 
      runValidators: true,
    });

    if (!updatedPost) {
      return res.status(404).json({ status: 'fail', message: 'Post not found' });
    }

    res.status(200).json({ status: 'success', data: updatedPost });
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message });
  }
};

// Postu siler
exports.deletePost = async (req, res) => {
  const { id: _id } = req.params;

  //ObjectId kontrolü
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ status: 'fail', message: 'Geçersiz ID formatı' });
  }

  try {
    const deletedPost = await Posts.findByIdAndDelete(_id);

    if (!deletedPost) {
      return res.status(404).json({ status: 'fail', message: 'Post Bulunamadı' });
    }

    res.status(200).json({ status: 'success', data: deletedPost });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: error.message });
  }
};
