// exports.getIndexPage = (req,res) => {
//     res.status(200).json({message:'welcome to blog page'})
// };
const Blog = require('../models/Blog');
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

exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json({ status: 'success', data: blog });
  } catch (error) {
    res.status(400).json({ status: 'fail', error });
  }
};

exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author');
    res.status(200).json({ status: 'success', data: blog });
  } catch (error) {
    res.status(404).json({ status: 'fail', error: 'Blog not found' });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: 'success', data: blog });
  } catch (error) {
    res.status(400).json({ status: 'fail', error });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: 'success', data: null });
  } catch (error) {
    res.status(400).json({ status: 'fail', error });
  }
};