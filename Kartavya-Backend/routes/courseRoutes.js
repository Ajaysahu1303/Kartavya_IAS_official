import express from 'express';
import { getCourses, addCourse, deleteCourse, updateCourse } from '../controllers/courseController.js';

const router = express.Router();

const adminAuth = (req, res, next) => {
  const token = req.headers['x-admin-token'];
  if (!token || token !== process.env.ADMIN_SECRET_TOKEN) {
    return res.status(401).json({ success: false, message: 'Unauthorized: Invalid admin token' });
  }
  next();
};

// Public routes
router.get('/', getCourses);

// Admin-only routes
router.post('/', adminAuth, addCourse);
router.put('/:id', adminAuth, updateCourse);
router.delete('/:id', adminAuth, deleteCourse);

export default router;
