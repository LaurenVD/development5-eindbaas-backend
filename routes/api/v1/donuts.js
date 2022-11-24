//donut route

const express = require('express');
const router = express.Router();
const donutController = require('../../../controllers/api/v1/donuts');

router.get('/', donutController.getAll)

router.post('/', donutController.create)

router.get('/:id', donutController.getId)

router.delete('/:id', donutController.deleteId)

module.exports = router;