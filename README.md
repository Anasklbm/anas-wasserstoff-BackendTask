# Wasserstoff Backend Task

## Overview
Welcome to the Wasserstoff Backend Task repository! This project aims to develop an intelligent load balancer for multi-API management, enhancing scalability and performance in handling incoming requests. The system dynamically routes requests to different API endpoints based on various criteria, ensuring efficient resource utilization and optimized response times. Additionally, this project serves as a demonstration of implementing advanced queuing strategies and performance analysis in backend systems.

## Features 🚀
- **Dynamic Routing:** Routes incoming requests based on API type, payload size, and custom criteria, optimizing resource allocation. 🛤️
- **Function Simulation:** Mock API endpoints simulate various response behaviors, enabling thorough testing of the load balancer. 🎭
- **Logging and Metrics:** Captures and logs metrics such as request times, endpoint selection, and response times, facilitating performance analysis. 📊
- **Queue Management:** Implements different types of queues (FIFO, priority-based, round-robin) for request distribution, enhancing scalability and reliability. 🔄
- **Performance Analysis:** Provides detailed logs and metrics for each queuing strategy, enabling fine-tuning and optimization. 📈

## Setup Instructions 🛠️
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.
4. Access endpoints using Postman or any HTTP client.

## API Endpoints 📡
- **Mock API Endpoints:**
  - `/fast`: Simulates a fast API endpoint.
  - `/slow`: Simulates a slow API endpoint.
  - `/large-payload`: Simulates an endpoint for handling large payloads.
- **Load Balancer Endpoints:** `/load-balancer/route`
- **Queue Management Endpoints:**
  - `/queue/enqueue`
  - `/queue/dequeue`

## Demo APIs 🛠️
- **Fast Endpoint:** [https://anas-wasserstoff-backendtask.onrender.com/fast](https://anas-wasserstoff-backendtask.onrender.com/fast)
- **Slow Endpoint:** [https://anas-wasserstoff-backendtask.onrender.com/slow](https://anas-wasserstoff-backendtask.onrender.com/slow)

## Deployment 🌐
This Server is deployed on [Render](https://anas-wasserstoff-backendtask.onrender.com).

## Postman Collection 📋
Access the Postman collection [here](POSTMAN_COLLECTION_LINK).

## GitHub Repository 💻
View the GitHub repository [here](GITHUB_REPO_LINK).

## Documentation 📄
For detailed documentation, refer to the [documentation](DOCUMENTATION_LINK).

## Technologies Used 🛠️
- **Express.js:** Used for building the backend server, providing a robust and flexible framework for web applications. 🌐
- **Axios:** Utilized for making HTTP requests to mock API endpoints, enabling seamless communication between components. 📡
- **Jest:** Employed for testing the load balancer functionality, ensuring reliability and correctness of the system. 🧪
- **Morgan:** Integrated for logging HTTP requests and responses, facilitating debugging and performance monitoring. 📝
- **Multer:** Used for handling multipart/form-data, enabling efficient processing of file uploads. 📁

