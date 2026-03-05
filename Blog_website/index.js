const express = require("express");
const app = express();

// Load config from env
require("dotenv").config();

// Set the port
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request body
app.use(express.json());

// Import routes for Post API
const blogRoutes = require("./routes/blog_website");

// Mount the blog website API routes
app.use("/api/v1", blogRoutes);

// Import and connect to the database
const dbConnect = require("./config/database");
dbConnect();

// Default route
app.get("/", (req, res) => {
  res.send(`<h1>This Is HomePage Baby</h1>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server Started Successfully at ${PORT}`);
});
