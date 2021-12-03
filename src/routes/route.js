const express = require('express');

const router = express.Router();

const scheduleController = require('../controllers/scheduleController')

router.post('/test', scheduleController.scheduledJob);

module.exports = router;