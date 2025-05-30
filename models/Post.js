const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true},
  // subtitle: String, 
  content: { type: String, required: true },
  tags: [String] ,
  image: { type: String ,default:''} ,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model('Post', postSchema);