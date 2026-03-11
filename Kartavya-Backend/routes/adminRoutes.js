import express from 'express';

const router = express.Router();

// @desc    Admin Login
// @route   POST /api/admin/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Please provide email and password' });
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (email === adminEmail && password === adminPassword) {
    // Return the secret token for subsequent API calls
    return res.json({
      success: true,
      message: 'Login successful',
      token: process.env.ADMIN_SECRET_TOKEN,
    });
  }

  return res.status(401).json({ success: false, message: 'Invalid email or password' });
});

export default router;
