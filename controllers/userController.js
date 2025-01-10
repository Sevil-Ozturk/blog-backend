const User = require('../models/User');

// exports.getIndexPage = (req,res) => {
//     res.status(200).json({message:'welcome to users page'})
// };

// Tüm kullanıcıları listeleyen fonksiyon
// exports.getAllUsers = async (req, res) => {
//     try {
//       const users = await User.find({}, 'username'); // Sadece `username` alanını getiriyoruz
//       res.status(200).json({
//         status: 'success',
//         data: users,
//       });
//     } catch (error) {
//       res.status(400).json({
//         status: 'fail',
//         error,
//       });
//     }
//   };


// Kullanıcı kaydı
exports.registerUser = async (req, res) => {
    try {
      const { username, password } = req.body;
      const newUser = await User.create({ username, password });
      res.status(201).json({ status: 'success', data: newUser });
    } catch (error) {
      res.status(400).json({ status: 'fail', error });
    }
  };
  
  // Kullanıcı girişi
  exports.loginUser = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username, password });
      if (!user) {
        return res.status(401).json({ status: 'fail', message: 'Hatalı kullanıcı adı veya şifre' });
      }
      res.status(200).json({ status: 'success', data: user });
    } catch (error) {
      res.status(400).json({ status: 'fail', error });
    }
  };
  
  // Tüm kullanıcıları listeleme
  exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find({}, 'username');
      res.status(200).json({ status: 'success', data: users });
    } catch (error) {
      res.status(400).json({ status: 'fail', error });
    }
  };