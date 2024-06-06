const express = require('express');
const router = express.Router();

// Route for handling fast responses
router.get('/fast', (req, res) => {
    res.status(200).json({ message: 'Fast response' });
});

// Route for handling slow responses
router.get('/slow', (req, res) => {
    setTimeout(() => {
        res.status(200).json({ message: 'Slow response' });
    }, 3000); // 3 seconds delay
});

// Route for handling requests with large payloads
router.post('/large-payload', (req, res) => {
    setTimeout(() => {
        res.status(200).json({ message: 'Handled large payload'});
    }, 5000); // 5 seconds delay
});

module.exports = router;
