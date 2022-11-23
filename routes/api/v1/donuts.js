//donut route

const express = require('express');
const router = express.Router();
const donutController = require('../../../controllers/api/v1/donuts');

router.get('/', donutController.getAll)

router.post('/', donutController.create)

module.exports = router;