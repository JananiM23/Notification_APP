const router = require('express').Router();
const orderController = require('../controller/order.controller');

router.post('/createOrder', orderController.createOrder);

module.exports = router;