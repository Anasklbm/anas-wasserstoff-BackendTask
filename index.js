const express = require('express'); // Import the Express library
const morgan = require('morgan'); // Import the Morgan library for logging HTTP requests
const loadBalancerRoutes = require('./routes/loadBalancerRoutes'); // Import the load balancer routes
const queueRoutes = require('./routes/queueRoutes'); // Import the queue routes
const mockApis = require('./mockApis/mockApis'); // Import the mock APIs

const app = express(); // Initialize the Express application

app.use(morgan('dev')); // Use Morgan middleware for logging HTTP requests in development mode
app.use(express.json()); // Use middleware to parse JSON bodies of incoming requests

// Define routes for load balancer
app.use('/load-balancer', loadBalancerRoutes);

// Define routes for queue management 
app.use('/queue', queueRoutes);

// Define routes for mock APIs
app.use('/', mockApis);

const PORT = 3000; // Set the port number for the server

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
