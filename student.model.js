const mongoose = require('mongoose');

// Define the schema for the Student collection
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Student name is required.'],
        trim: true
    },
    age: {
        type: Number,
        required: [true, 'Student age is required.'],
        min: [5, 'Age must be at least 5.']
    },
    course: {
        type: String,
        required: [true, 'Course is required.'],
        trim: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

// Create and export the Student model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
