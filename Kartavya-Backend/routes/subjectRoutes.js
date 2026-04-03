import express from 'express';
import Subject from '../models/Subject.js';
const router = express.Router();

// @desc    Get all subjects for a course
// @route   GET /api/subjects/course/:courseId
router.get('/course/:courseId', async (req, res) => {
  try {
    const subjects = await Subject.find({ course: req.params.courseId }).sort('order');
    res.json({ success: true, data: subjects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @desc    Get single subject
// @route   GET /api/subjects/:id
router.get('/:id', async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    res.json({ success: true, data: subject });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @desc    Create a subject
// @route   POST /api/subjects
router.post('/', async (req, res) => {
  try {
    const subject = await Subject.create(req.body);
    res.status(201).json({ success: true, data: subject });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// @desc    Update a subject
// @route   PUT /api/subjects/:id
router.put('/:id', async (req, res) => {
  try {
    const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: subject });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// @desc    Delete a subject
// @route   DELETE /api/subjects/:id
router.delete('/:id', async (req, res) => {
  try {
    await Subject.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Subject removed' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
