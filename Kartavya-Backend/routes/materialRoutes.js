import express from 'express';
import Material from '../models/Material.js';
const router = express.Router();

// @desc    Get all materials for a subject
// @route   GET /api/materials/subject/:subjectId
router.get('/subject/:subjectId', async (req, res) => {
    try {
        const materials = await Material.find({ subject: req.params.subjectId }).sort('order');
        res.json({ success: true, data: materials });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// @desc    Create a material
// @route   POST /api/materials
router.post('/', async (req, res) => {
    try {
        const material = await Material.create(req.body);
        res.status(201).json({ success: true, data: material });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

// @desc    Update a material
// @route   PUT /api/materials/:id
router.put('/:id', async (req, res) => {
    try {
        const material = await Material.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ success: true, data: material });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

// @desc    Delete a material
// @route   DELETE /api/materials/:id
router.delete('/:id', async (req, res) => {
    try {
        await Material.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Material removed' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;
