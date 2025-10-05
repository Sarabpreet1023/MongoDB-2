require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/student.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ Successfully connected to MongoDB!');
        // Start the server only after successful DB connection
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('❌ Database connection failed!', err);
        process.exit(1); // Exit the process with an error code
    });

// Use the student routes with a base path
app.use('/api/students', studentRoutes);
