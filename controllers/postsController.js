// exports.getIndexPage = (req,res) => {
//     res.status(200).json({message:'welcome to blog page'})
// };
// exports.createBlog = async(req,res) => {
//     const blog  = await blog.create(req.body);
//     try{
//       res.status(201).json({status:'welcome to blog page',data: blog,})
//     }catch{
//         res.status(400).json({
//             status:'fail',
//             error,
//     })
//     }
//     };
exports.getPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(201).json({ status: 'success', data: posts });
  } catch (error) {
    res.status(400).json({ status: 'fail', error });
  }
 
};
exports.createPost = async (req, res) => {
  try {
    const newPost = await Posts.create(req.body);
    res.status(201).json({ status: 'success', data: newPost });
  } catch (error) {
    res.status(400).json({ status: 'fail', error });
  }
  res.json({
    author:"coding",
    message:"hello",
  });
};

exports.getPost = async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id).populate('author');
    res.status(200).json({ status: 'success', data: post });
  } catch (error) {
    res.status(404).json({ status: 'fail', error: 'Post not found' });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: 'success', data: post });
  } catch (error) {
    res.status(400).json({ status: 'fail', error });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: 'success', data: null });
  } catch (error) {
    res.status(400).json({ status: 'fail', error });
  }
};