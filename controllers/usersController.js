const Users = require('../models/User');
const Posts = require('../models/Post');


// tüm postları getirir
exports.getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json( users);
  } catch (error) {
    res.status(404).json({ status: 'fail', message: error.message });
  }
 
};

exports.getUserPosts= async (req,res) =>{
  try{
    const {id:userId}=req.params;
    const posts = await Posts.find({user:userId}).populate('user','name email');

    res.status(200).json({posts , total:posts.length})

    if(!posts.length)
     return res.status(404).json({ status: 'fail', message:"Bu Kullanıcıya Ait Blog Yazısı Bulunmamaktadır" });



  } catch(error) {
    res.status(404).json({ status: 'fail', message: error.message }); 
  }
};
