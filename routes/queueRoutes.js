const express = require('express');
const router = express.Router();
const queueController = require('../controllers/queueController');


// Handle enqueue request
router.post('/enqueue', queueController.enqueueRequest);

// Handle dequeue request
router.post('/dequeue', queueController.dequeueRequest);

module.exports = router;
