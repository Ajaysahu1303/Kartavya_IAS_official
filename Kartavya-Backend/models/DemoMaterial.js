import mongoose from 'mongoose';

const demoMaterialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
    },
    category: {
        type: String,
        required: [true, 'Please specify a category'],
        enum: [
            'History',
            'Geography',
            'Polity',
            'economics',
            'Science & Tech',
            'Environment',
            'Current Affairs',
            'Ethics',
            'Essay',
            'CSAT'
        ],
    },
    fileUrl: {
        type: String,
        required: [true, 'Please add a file URL'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('DemoMaterial', demoMaterialSchema);
