// FIFO Queue Implementation
class FIFOQueue {
    constructor() {
        this.queue = []; // Initialize an empty array for the queue
    }

    // Add an item to the end of the queue
    enqueue(item) {
        this.queue.push(item);
    }

    // Remove and return the item at the front of the queue
    dequeue() {
        return this.queue.shift();
    }

    // Check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }
}

// Priority Queue Implementation
class PriorityQueue {
    constructor() {
        this.queue = []; // Initialize an empty array for the queue
    }

    // Add an item to the queue with a priority
    enqueue(item, priority) {
        this.queue.push({ item, priority }); // Add the item with its priority
        this.queue.sort((a, b) => a.priority - b.priority); // Sort the queue based on priority
    }

    // Remove and return the item with the highest priority (lowest priority number)
    dequeue() {
        return this.queue.shift()?.item;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }
}

// Round-Robin Queue Implementation
class RoundRobinQueue {
    constructor() {
        this.queue = []; // Initialize an empty array for the queue
        this.currentIndex = 0; // Initialize the current index to 0
    }

    // Add an item to the end of the queue
    enqueue(item) {
        this.queue.push(item);
    }

    // Remove and return the item at the current index, then move to the next index
    dequeue() {
        if (this.isEmpty()) return null; // Return null if the queue is empty

        const item = this.queue[this.currentIndex]; // Get the item at the current index
        this.queue.splice(this.currentIndex, 1); // Remove the item from the queue

        // Reset currentIndex if it exceeds queue length
        if (this.currentIndex >= this.queue.length) {
            this.currentIndex = 0;
        }

        return item;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }
}

// Instantiate the different queue types
const fifoQueue = new FIFOQueue();
const priorityQueue = new PriorityQueue();
const roundRobinQueue = new RoundRobinQueue();

// Export the queue instances
module.exports = { fifoQueue, priorityQueue, roundRobinQueue };
