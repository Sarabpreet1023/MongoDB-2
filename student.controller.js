const Student = require('../models/student.model');

// CREATE a new student
exports.createStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);
        res.status(201).json({
            message: 'Student created successfully!',
            data: newStudent
        });
    } catch (error) {
        res.status(400).json({ message: 'Error creating student', error: error.message });
    }
};

// READ all students
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find({});
        res.status(200).json({
            message: 'Students retrieved successfully!',
            count: students.length,
            data: students
        });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving students', error: error.message });
    }
};

// UPDATE a student by ID
exports.updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        
        if (!updatedStudent) {
            return res.status(404).json({ message: `Student with ID ${id} not found.` });
        }

        res.status(200).json({
            message: 'Student updated successfully!',
            data: updatedStudent
        });
    } catch (error) {
        res.status(400).json({ message: 'Error updating student', error: error.message });
    }
};

// DELETE a student by ID
exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await Student.findByIdAndDelete(id);

        if (!deletedStudent) {
            return res.status(404).json({ message: `Student with ID ${id} not found.` });
        }

        res.status(200).json({ message: 'Student deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student', error: error.message });
    }
};
