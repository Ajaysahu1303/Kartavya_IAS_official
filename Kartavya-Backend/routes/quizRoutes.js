import express from 'express';
import Quiz from '../models/Quiz.js';
const router = express.Router();

// @desc    Get all quizzes for a subject
// @route   GET /api/quizzes/subject/:subjectId
router.get('/subject/:subjectId', async (req, res) => {
  try {
    const quizzes = await Quiz.find({ subject: req.params.subjectId }).sort('order');
    res.json({ success: true, data: quizzes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @desc    Create a quiz
// @route   POST /api/quizzes
router.post('/', async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.status(201).json({ success: true, data: quiz });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// @desc    Update a quiz
// @route   PUT /api/quizzes/:id
router.put('/:id', async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: quiz });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// @desc    Delete a quiz
// @route   DELETE /api/quizzes/:id
router.delete('/:id', async (req, res) => {
  try {
    await Quiz.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Quiz removed' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
