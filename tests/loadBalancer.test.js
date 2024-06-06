const axios = require('axios');
const { FIFOQueue, PriorityQueue, RoundRobinQueue } = require('../queues/queue');

describe('Load Balancer Tests', () => {
    // Add tests for load balancer routing and queue management
    test('FIFO Queue works correctly', () => {
        const queue = new FIFOQueue();
        queue.enqueue('task1');
        queue.enqueue('task2');
        expect(queue.dequeue()).toBe('task1');
        expect(queue.dequeue()).toBe('task2');
    });

    test('Priority Queue works correctly', () => {
        const queue = new PriorityQueue();
        queue.enqueue('task1', 2);
        queue.enqueue('task2', 1);
        expect(queue.dequeue()).toBe('task2');
        expect(queue.dequeue()).toBe('task1');
    });

    test('Round Robin Queue works correctly', () => {
        const queue = new RoundRobinQueue();
        queue.enqueue('task1');
        queue.enqueue('task2');
        expect(queue.dequeue()).toBe('task1');
        expect(queue.dequeue()).toBe('task2');
    });

    test('Mock API endpoints respond correctly', async () => {
        const fastResponse = await axios.get('http://localhost:3000/fast');
        const slowResponse = await axios.get('http://localhost:3000/slow');
        expect(fastResponse.data.message).toBe('Fast response');
        expect(slowResponse.data.message).toBe('Slow response');
    });
});
