const router = require('express').Router();
const textLocal = require('../controller/textLocal.controller');

router.post('/text', textLocal.SMS);
router.get('/data', textLocal.orderData);

module.exports = router;