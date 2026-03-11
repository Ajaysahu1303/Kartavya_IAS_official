import 'dotenv/config'; // Load env vars immediately
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import enrollRoutes from './routes/enrollRoutes.js';
import videoRoutes from './routes/videoRoutes.js';
import adminRoutes from './routes/adminRoutes.js';


// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Mount routers
app.use('/api/enroll', enrollRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/admin', adminRoutes);


// Base route
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
