//donut route

const express = require('express');
const router = express.Router();
const passport = require('passport');
const donutController = require('../../../controllers/api/v1/donuts');

router.get('/',passport.authenticate('jwt', { session: false }) , donutController.getAll)

router.post('/', donutController.create)

router.get('/:id',passport.authenticate('jwt', { session: false }) , donutController.getId)

router.delete('/:id',passport.authenticate('jwt', { session: false }) , donutController.deleteId)

router.put('/:id',passport.authenticate('jwt', { session: false }) , donutController.updateId)

module.exports = router;