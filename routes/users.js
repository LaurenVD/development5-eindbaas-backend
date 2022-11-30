var express = require('express');
var router = express.Router();
// Require auth controller
const authController = require('./.././controllers/api/v1/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', authController.signup);

module.exports = router;
