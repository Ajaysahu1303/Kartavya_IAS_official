import express from 'express';
import DemoQuiz from '../models/DemoQuiz.js';

const router = express.Router();

// Admin auth middleware — checks for secret token in header
const adminAuth = (req, res, next) => {
    const token = req.headers['x-admin-token'];
    if (!token || token !== process.env.ADMIN_SECRET_TOKEN) {
        return res.status(401).json({ success: false, message: 'Unauthorized: Invalid admin token' });
    }
    next();
};

// @desc    Get all demo quizzes (filtered by category)
// @route   GET /api/demo-quizzes
router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
        const filter = category ? { category } : {};
        const quizzes = await DemoQuiz.find(filter).sort('-createdAt');
        res.json({ success: true, data: quizzes });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// @desc    Add a demo quiz
// @route   POST /api/demo-quizzes
router.post('/', adminAuth, async (req, res) => {
    try {
        const quiz = await DemoQuiz.create(req.body);
        res.status(201).json({ success: true, data: quiz });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

// @desc    Update a demo quiz
// @route   PUT /api/demo-quizzes/:id
router.put('/:id', adminAuth, async (req, res) => {
    try {
        const quiz = await DemoQuiz.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!quiz) {
            return res.status(404).json({ success: false, message: 'Quiz not found' });
        }
        res.json({ success: true, data: quiz });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

// @desc    Delete a demo quiz
// @route   DELETE /api/demo-quizzes/:id
router.delete('/:id', adminAuth, async (req, res) => {
    try {
        const quiz = await DemoQuiz.findById(req.params.id);
        if (!quiz) {
            return res.status(404).json({ success: false, message: 'Quiz not found' });
        }
        await quiz.deleteOne();
        res.json({ success: true, message: 'Quiz removed' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;
