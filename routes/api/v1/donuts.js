var express = require('express');
var router = express.Router();

/* GET routes for Donuts. */
router.get('/', (req, res, next) => {
  res.send('get the donuts ready');
});

module.exports = router;