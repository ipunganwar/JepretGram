var express = require('express');
var router = express.Router();
var controller = require('../controllers/photos')
const multer = require('multer')
const load = multer({dest: 'public/images'})


/* GET users listing. */
router.get('/list', controller.list)
router.post('/upload',load.single('avatar'), controller.posting)
// router.put('/edit', controller.poupdatest)
// router.delete('/destroy', controllerPhotos.destroy)

module.exports = router
