const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

// Define CRUD routes

// POST: Create a new student
router.post('/', studentController.createStudent);

// GET: Retrieve all students
router.get('/', studentController.getAllStudents);

// PUT: Update a student by ID
router.put('/:id', studentController.updateStudent);

// DELETE: Delete a student by ID
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
