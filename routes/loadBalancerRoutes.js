const express = require('express'); // Import the Express library
const router = express.Router(); // Create a new router object
const loadBalancerController = require('../controllers/loadBalancerController'); // Import the load balancer controller

// Define the route for routing requests via the load balancer
router.post('/route', loadBalancerController.routeRequest);

module.exports = router; // Export the router object
