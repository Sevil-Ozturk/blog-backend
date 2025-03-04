const multer = require('multer');
const path =require ('path')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname));
    }

})

const fileFilter = (req,file,cb)=>{
const allowedTypes=[ 'image/jpeg','image/png','image/gif','image/webp'];
if(allowedTypes.includes(file.mimetype)){
cb(null,true);
}else{
cb(new Error('Yükleyeceğiniz dosya türü desteklenmemektedir.'),false);

}}

const upload = multer({
    storage,
    fileFilter,
    limits: {
    fileSize: 50 * 1024 * 1024,
  },
})

module.exports=upload;