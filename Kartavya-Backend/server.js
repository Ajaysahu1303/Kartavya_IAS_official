import 'dotenv/config'; // Load env vars immediately
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import enrollRoutes from './routes/enrollRoutes.js';
import currentAffairsRoutes from './routes/currentAffairsRoutes.js';

// Connect to database
// You can uncomment this once your MongoDB is ready
// connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Mount routers
app.use('/api/enroll', enrollRoutes);
app.use('/api/current-affairs', currentAffairsRoutes);

// Base route
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
