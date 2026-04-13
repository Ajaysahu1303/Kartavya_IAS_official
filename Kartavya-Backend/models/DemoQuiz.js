import mongoose from 'mongoose';

const demoQuizSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Please add a question'],
        trim: true,
    },
    options: [{
        type: String,
        required: true,
    }],
    correctOption: {
        type: Number, // Index in the options array (0, 1, 2, 3)
        required: [true, 'Please specify the correct option index'],
    },
    explanation: {
        type: String,
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
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('DemoQuiz', demoQuizSchema);
