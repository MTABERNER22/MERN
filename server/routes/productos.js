var express = require('express');
var router = express.Router();
const productosControllers = require("../controllers/productosController");
const fileUpload = require('express-fileupload')
/*const multer = require('multer');
const storageStrategy = multer.memoryStorage()
const upload = multer({ storage: storageStrategy })*/

/* GET users listing. */
router.get('/', productosControllers.getAll);

router.get('/:id', productosControllers.getById);

router.get('/:id/categoria/:categoriaId', productosControllers.getCategoryById);

router.post('/', fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
  }),( req, res, next )=>{ 
    req.app.verifyToken(req, res, next) 
} ,productosControllers.create);

/*router.post('/imagen',  upload.single('imagen'), function(req, res){
      const imagen = req.file
      console.log(imagen)})*/

router.put('/:id', ( req, res, next )=>{ req.app.verifyToken(req, res, next) } , productosControllers.update);

router.delete('/:id', ( req, res, next )=>{ req.app.verifyToken(req, res, next) } , productosControllers.delete);



module.exports = router;
