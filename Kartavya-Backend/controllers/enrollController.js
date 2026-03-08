import Enrollment from '../models/Enrollment.js';
import nodemailer from 'nodemailer';

// @desc    Create a new enrollment inquiry and send Email
// @route   POST /api/enroll
// @access  Public
export const createEnrollment = async (req, res) => {
    try {
        const { name, phone, course, message } = req.body;

        if (!name || !phone || !course) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields (name, phone, course).' });
        }

        // Configure Nodemailer transporter dynamically so env vars are definitely loaded
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or use host/port for other providers
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 1. (Optional) Save to Database - Commented out to prioritize Nodemailer for Portfolio
        /*
        const newEnrollment = await Enrollment.create({
            name,
            phone,
            course,
            message,
        });
        */

        // 2. Send Email notifying the Admin/Owner directly
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
            subject: `New Lead: ${name} wants to join ${course}`,
            html: `
                <h2>New Enrollment Enquiry Received!</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Course Interested:</strong> ${course}</p>
                <p><strong>Message:</strong> ${message || 'No additional message.'}</p>
                <br />
                <p><em>This email was automatically generated from your Portfolio Lead System.</em></p>
            `,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({
            success: true,
            // data: newEnrollment,
            message: 'Enrollment inquiry received and email sent successfully!',
        });
    } catch (error) {
        console.error('Error creating enrollment:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error: Unable to process your request at this time.',
        });
    }
};

// @desc    Get all enrollment inquiries
// @route   GET /api/enroll
// @access  Private/Admin (Currently public for dev)
export const getEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: enrollments.length,
            data: enrollments,
        });
    } catch (error) {
        console.error('Error fetching enrollments:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error: Unable to fetch enrollments.',
        });
    }
};
