import 'dotenv/config'; // Load env vars immediately
import express from 'express';
import cors from 'cors';
import path from 'path';
import connectDB from './config/db.js';
import enrollRoutes from './routes/enrollRoutes.js';
import videoRoutes from './routes/videoRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import settingRoutes from './routes/settingRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import demoMaterialRoutes from './routes/demoMaterialRoutes.js';
import demoQuizRoutes from './routes/demoQuizRoutes.js';
import subjectRoutes from './routes/subjectRoutes.js';
import materialRoutes from './routes/materialRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import offeringRoutes from './routes/offeringRoutes.js';

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
app.use('/api/settings', settingRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/demo-materials', demoMaterialRoutes);
app.use('/api/demo-quizzes', demoQuizRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/materials', materialRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/offerings', offeringRoutes);

// Static folders
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Base route
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
