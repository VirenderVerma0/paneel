// const express = require('express');
// require('dotenv').config();
// const { connectDB } = require('./config/db');
// const userRoutes = require('./routes/authRoutes');

// const app = express();
// app.use(express.json());

// // Connect to MongoDB
// connectDB();

// // Test route
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// // User Routes
// app.use('/users', userRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use(cors({
  origin: "*",
  // credentials: true,
}));

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
