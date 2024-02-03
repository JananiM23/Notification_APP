const router = require('express').Router();
const textLocal = require('../controller/textLocal.controller');

router.post('/text', textLocal.SMS);

module.exports = router;