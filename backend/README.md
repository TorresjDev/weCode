# Backend Service for weCode 🚀

Welcome to the weCode application's backend service repository! Here, we harness the power of Node.js and Express to build our service, ensuring reliable data management through MongoDB. To enhance interoperability, we've integrated CORS (Cross-Origin Resource Sharing), facilitating smooth interactions across various domains.

## Technical Environment 🌐

- **Programming Language:** JavaScript (Node.js) 🟨
- **Web Framework:** Express.js 🖥️
- **Database Solution:** MongoDB with Mongoose ODM 🗄️
- **Additional Libraries:** CORS, dotenv 📚

## Setup and Installation Guidelines 🛠️

Ensure Node.js is installed on your device. If not, download it from the [Node.js official website](https://nodejs.org/).

1. **Clone the Repository:**
2. ```bash
   git clone [repository-url]
   cd [repository-name]
   ```

3. **Dependency Installation:**
4. Follow these steps within the backend directory to install all dependencies:
   `bash
      npm install
      `
5. **Configuring Environment Variables:**
6. Create a `.env` file at the backend directory's root. It should include:
   `md
      PORT: The backend server's port.
      MONGO_URI: Your MongoDB connection URI.
      REACT_ORIGIN_REQUEST: The CORS origin URL for the frontend application.
      `
   Example of `.env` file:
   `bash
      PORT=5000
      MONGO_URI=mongodb://localhost:27017/weCodeDB
      REACT_ORIGIN_REQUEST=http://localhost:3000
      `
   **Dependency Installation:**

To initiate the application in development mode:

```bash
npm run dev
```

This uses nodemon for automatic server restarts upon code updates.

# API Endpoints Overview 🌐

Our service provides these RESTful API endpoints:

- `/api/quotes`: Handles quote management.
- `/api/user`: Manages user-related operations.

# Application Logging 📝

For efficient troubleshooting, the application logs the path, HTTP method, and response for each request.

# Database Connectivity 🗄️

Connectivity to MongoDB is established via Mongoose. Ensure MongoDB is running and accessible via the `MONGO_URI` in your `.env` file.
