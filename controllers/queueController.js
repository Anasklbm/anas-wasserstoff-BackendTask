const { fifoQueue, priorityQueue, roundRobinQueue } = require('../queues/queue');

/**
 * Middleware function to enqueue requests based on queue type.
 * Logs request headers and body, enqueues the request, and sends a response.
 */
exports.enqueueRequest = (req, res) => {
    console.log('Received headers:', req.headers); // Log headers to check content-type
    console.log('Received body:', req.body); // Log the request body

    const { queueType, request, priority } = req.body;

    if (!queueType || !request) {
        return res.status(400).json({ error: 'Queue type and request are required' });
    }

    try {
        switch (queueType) {
            case 'FIFO':
                fifoQueue.enqueue(request);
                break;
            case 'Priority':
                if (priority === undefined) {
                    return res.status(400).json({ error: 'Priority is required for Priority queue' });
                }
                priorityQueue.enqueue(request, priority);
                break;
            case 'RoundRobin':
                roundRobinQueue.enqueue(request);
                break;
            default:
                return res.status(400).json({ error: 'Invalid queue type' });
        }
        res.status(200).json({ message: 'Request enqueued' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Middleware function to dequeue requests based on queue type.
 * Logs request headers and body, dequeues the request, and sends a response.
 */
exports.dequeueRequest = (req, res) => {
    console.log('Received headers:', req.headers); // Log headers to check content-type
    console.log('Received body:', req.body); // Log the request body

    const { queueType } = req.body;

    if (!queueType) {
        return res.status(400).json({ error: 'Queue type is required' });
    }

    try {
        let request;
        const startTime = Date.now();
        
        switch (queueType) {
            case 'FIFO':
                request = fifoQueue.dequeue();
                break;
            case 'Priority':
                request = priorityQueue.dequeue();
                break;
            case 'RoundRobin':
                request = roundRobinQueue.dequeue();
                break;
            default:
                return res.status(400).json({ error: 'Invalid queue type' });
        }

        const endTime = Date.now();
        console.log(`Request dequeued from ${queueType} queue in ${endTime - startTime}ms`);

        if (request) {
            res.status(200).json({ message: 'Request dequeued', request });
        } else {
            res.status(200).json({ message: 'Queue is empty' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
