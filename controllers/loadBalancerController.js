const axios = require('axios');
const { apiEndpoints } = require('../config/config');

/**
 * Middleware function to route requests based on payload size.
 * Logs payload size and selected route, then routes the request to the appropriate endpoint.
 */
exports.routeRequest = async (req, res) => {
    const { type, payload } = req.body;

    let selectedRoute;
    let payloadSize = 0;

    if (payload) {
        payloadSize = Buffer.byteLength(JSON.stringify(payload));
    }

    console.log('Payload size:', payloadSize); // Log payload size for debugging

    // Custom criteria: routing based on payload size
    if (payloadSize > 1000) {
        // Route to specific endpoint for large payloads
        selectedRoute = apiEndpoints.find(endpoint => endpoint.includes('large-payload'));
        console.log('Selected route for large payload:', selectedRoute); // Log selected route for large payloads
        try {
            const response = await axios.post(selectedRoute, payload);
            return res.status(response.status).json(response.data);
        } catch (error) {
            console.error('Error in large-payload request:', error.message); // Log error for large-payload request
            return res.status(500).json({ error: 'Error fetching from API' });
        }
    } else {
        // Route to random endpoint for regular requests
        const regularEndpoints = apiEndpoints.filter(endpoint => !endpoint.includes('large-payload'));
        selectedRoute = regularEndpoints[Math.floor(Math.random() * regularEndpoints.length)];
        console.log('Selected route for regular request:', selectedRoute); // Log selected route for regular requests
        try {
            const response = await axios.get(selectedRoute);
            return res.status(response.status).json(response.data);
        } catch (error) {
            console.error('Error in regular request:', error.message); // Log error for regular request
            return res.status(500).json({ error: 'Error fetching from API' });
        }
    }
};
