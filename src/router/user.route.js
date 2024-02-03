const router = require('express').Router();
const userController = require('../controller/user.controller');

router.post('/create', userController.create);

module.exports = router;