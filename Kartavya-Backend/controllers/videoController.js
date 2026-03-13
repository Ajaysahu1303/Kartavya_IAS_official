import Video from '../models/Video.js';
import connectDB from '../config/db.js';

// @desc    Get all videos (optionally filter by category)
// @route   GET /api/videos?category=History
export const getVideos = async (req, res) => {
  try {
    await connectDB();
    const filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }
    const videos = await Video.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: videos.length, data: videos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all unique categories that have at least one video
// @route   GET /api/videos/categories
export const getCategories = async (req, res) => {
  try {
    await connectDB();
    const categories = await Video.distinct('category');
    res.json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Add a new video (Admin only)
// @route   POST /api/videos
export const addVideo = async (req, res) => {
  try {
    await connectDB();
    const { title, youtubeVideoId, category, description } = req.body;
    const video = await Video.create({ title, youtubeVideoId, category, description });
    res.status(201).json({ success: true, data: video });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete a video (Admin only)
// @route   DELETE /api/videos/:id
export const deleteVideo = async (req, res) => {
  try {
    await connectDB();
    const video = await Video.findByIdAndDelete(req.params.id);
    if (!video) {
      return res.status(404).json({ success: false, message: 'Video not found' });
    }
    res.json({ success: true, message: 'Video deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update a video (Admin only)
// @route   PUT /api/videos/:id
export const updateVideo = async (req, res) => {
  try {
    await connectDB();
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!video) {
      return res.status(404).json({ success: false, message: 'Video not found' });
    }
    res.json({ success: true, data: video });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
