const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require('dotenv');
const connectDB = require("./db");

// Initialize Express app
const app = express();

// Set up CORS middleware
app.use(cors());

// Set up logging middleware
app.use(morgan('dev'));

// Set up JSON parsing middleware
app.use(express.json());

// Load environment variables
dotenv.config();

// Load routes
const userRoutes = require('./models/routes/userRoutes');
const blogRoutes = require('./models/routes/blogRoutes');

// Connect to MongoDB
connectDB();

// Define routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

// Define port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
