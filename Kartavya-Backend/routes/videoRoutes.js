import express from 'express';
import { getVideos, getCategories, addVideo, deleteVideo, updateVideo } from '../controllers/videoController.js';

const router = express.Router();

//Admin auth middleware — checks for secret token in header 
const adminAuth = (req, res, next) => {
  const token = req.headers['x-admin-token'];
  if (!token || token !== process.env.ADMIN_SECRET_TOKEN) {
    return res.status(401).json({ success: false, message: 'Unauthorized: Invalid admin token' });
  }
  next();
};

//Public routes
router.get('/', getVideos);
router.get('/categories', getCategories);

//Admin-only routes 
router.post('/', adminAuth, addVideo);
router.put('/:id', adminAuth, updateVideo);
router.delete('/:id', adminAuth, deleteVideo);

export default router;
