import express from 'express';
import DemoMaterial from '../models/DemoMaterial.js';

const router = express.Router();

const adminAuth = (req, res, next) => {
    const token = req.headers['x-admin-token'];
    if (!token || token !== process.env.ADMIN_SECRET_TOKEN) {
        return res.status(401).json({ success: false, message: 'Unauthorized: Invalid admin token' });
    }
    next();
};

// @desc    Get all demo materials (filtered by category)
// @route   GET /api/demo-materials
router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
        const filter = category ? { category } : {};
        const materials = await DemoMaterial.find(filter).sort('-createdAt');
        res.json({ success: true, data: materials });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// @desc    Add a demo material
// @route   POST /api/demo-materials
router.post('/', adminAuth, async (req, res) => {
    try {
        const material = await DemoMaterial.create(req.body);
        res.status(201).json({ success: true, data: material });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

// @desc    Update a demo material
// @route   PUT /api/demo-materials/:id
router.put('/:id', adminAuth, async (req, res) => {
    try {
        const material = await DemoMaterial.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!material) {
            return res.status(404).json({ success: false, message: 'Material not found' });
        }
        res.json({ success: true, data: material });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

// @desc    Delete a demo material
// @route   DELETE /api/demo-materials/:id
router.delete('/:id', adminAuth, async (req, res) => {
    try {
        const material = await DemoMaterial.findById(req.params.id);
        if (!material) {
            return res.status(404).json({ success: false, message: 'Material not found' });
        }
        await material.deleteOne();
        res.json({ success: true, message: 'Material removed' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;
