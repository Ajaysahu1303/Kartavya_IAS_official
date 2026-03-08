import CurrentAffairs from '../models/CurrentAffairs.js';
import mongoose from 'mongoose';

// @desc    Get all current affairs
// @route   GET /api/current-affairs
// @access  Public
export const getCurrentAffairs = async (req, res) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            return res.status(200).json({
                success: true,
                count: 0,
                data: [],
            });
        }

        const currentAffairs = await CurrentAffairs.find().sort({ date: -1 });
        res.status(200).json({
            success: true,
            count: currentAffairs.length,
            data: currentAffairs,
        });
    } catch (error) {
        console.error('Error fetching current affairs:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error: Unable to fetch current affairs.',
        });
    }
};

// @desc    Create a new current affair post
// @route   POST /api/current-affairs
// @access  Protected via Secret Token (No Login Required)
export const createCurrentAffair = async (req, res) => {
    try {
        // Simple protection using a secret header token instead of full login
        const adminToken = req.headers['x-admin-token'];
        if (adminToken !== process.env.ADMIN_SECRET_TOKEN) {
            return res.status(401).json({ success: false, message: 'Unauthorized access.' });
        }

        const { title, content, category, source, author } = req.body;

        if (!title || !content || !category) {
            return res.status(400).json({ success: false, message: 'Please provide title, content and category.' });
        }

        const newCurrentAffair = await CurrentAffairs.create({
            title,
            content,
            category,
            source,
            author
        });

        res.status(201).json({
            success: true,
            data: newCurrentAffair,
            message: 'Current Affair post created successfully!',
        });
    } catch (error) {
        console.error('Error creating current affair:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error: Unable to create current affair.',
        });
    }
};
