const router = require('express').Router();
const textLocal = require('../controller/textLocal.controller');

router.post('/text', textLocal.SMS);
router.get('/data', textLocal.orderData);
router.post('/order', textLocal.createOrderManagement);
router.get('/list', textLocal.getOrderManagement);

module.exports = router;