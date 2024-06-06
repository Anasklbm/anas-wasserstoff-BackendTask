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

// Define a route to display an image from an external URL
app.get('/', (req, res) => {
    const imageUrl = 'https://images.ctfassets.net/aq13lwl6616q/2w6RsKsVuc0IwHImyqx1TZ/030dff02ec89e35c72cfff4f66f0065e/Become_a_Backend_Developer.jpg';
    res.send(`<img src="${imageUrl}" alt="Image" style="max-width: 100%; height: auto;">`);
});


const PORT = 80; // Set the port number for the server

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
