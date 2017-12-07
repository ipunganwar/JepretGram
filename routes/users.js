var express = require('express');
var router = express.Router();
var controller = require('../controllers/users')

/* GET users listing. */
router.get('/', controller.signin)
router.post('/signup', controller.signup)

module.exports = router;
