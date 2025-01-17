const express = require('express')
const router = express.Router();
const authController = require('../controller/authController')

router.post('/multiStepForm', authController.multiStepForm);

module.exports = router;