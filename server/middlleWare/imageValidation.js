const multer=  require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + name)
    }
  })

  let imgRegex =/^image\/png$|^image\/jpeg?g$/;
  const maxSize = 5*1024*1024;

  const upload = multer({
    storage: storage,
    fileFilter :(req,file,cb)=>{
        if(imgRegex.test(file.mimetype)){
            cb(null,true);
        }
        else{
            cb(null,false);
            cb(new Error("Fichier non valide "));
        }
    },
    limits:{fileSize:maxSize}
  }).single("image")

  module.exports= upload