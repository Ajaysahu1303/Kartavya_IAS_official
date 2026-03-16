import express from 'express';
import { getSetting, updateSetting, getAllSettings } from '../controllers/settingController.js';

const router = express.Router();

const adminAuth = (req, res, next) => {
  const token = req.headers['x-admin-token'];
  if (!token || token !== process.env.ADMIN_SECRET_TOKEN) {
    return res.status(401).json({ success: false, message: 'Unauthorized: Invalid admin token' });
  }
  next();
};

// Public routes
router.get('/', getAllSettings);
router.get('/:key', getSetting);

// Protected routes
router.post('/', adminAuth, updateSetting);

export default router;
