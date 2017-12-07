var express = require('express');
var router = express.Router();
var controller = require('../controllers/photos')
const multer = require('multer')
const upload = multer({dest: public/images})


/* GET users listing. */
router.get('/signin', controller.list)
router.post('/upload', upload.single('avatar'), controller.post)
// router.put('/edit', controller.poupdatest)
router.delete('/destroy', controller.destroy)

module.exports = router
