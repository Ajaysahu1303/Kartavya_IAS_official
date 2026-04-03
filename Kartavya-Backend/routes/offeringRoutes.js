import express from 'express';
import Offering from '../models/Offering.js';

const router = express.Router();

const adminAuth = (req, res, next) => {
  const token = req.headers['x-admin-token'];
  if (!token || token !== process.env.ADMIN_SECRET_TOKEN) {
    return res.status(401).json({ success: false, message: 'Unauthorized: Invalid admin token' });
  }
  next();
};

// GET all offerings
router.get('/', async (req, res) => {
  try {
    const offerings = await Offering.find().sort({ createdAt: -1 });
    res.json(offerings);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST a new offering
router.post('/', adminAuth, async (req, res) => {
  try {
    const { title, link } = req.body;
    if (!title || !link) {
      return res.status(400).json({ success: false, message: 'Please provide both title and link' });
    }
    const newOffering = new Offering({ title, link });
    await newOffering.save();
    res.status(201).json({ success: true, offering: newOffering });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUT update an offering
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const { title, link } = req.body;
    const offering = await Offering.findByIdAndUpdate(
      req.params.id,
      { title, link },
      { new: true, runValidators: true }
    );
    if (!offering) {
      return res.status(404).json({ success: false, message: 'Offering not found' });
    }
    res.json({ success: true, offering });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE an offering
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const offering = await Offering.findByIdAndDelete(req.params.id);
    if (!offering) {
      return res.status(404).json({ success: false, message: 'Offering not found' });
    }
    res.json({ success: true, message: 'Offering deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
