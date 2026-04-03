import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true,
    },
    title: {
        type: String,
        required: [true, 'Please add a quiz title'],
        trim: true,
    },
    questions: [{
        questionText: {
            type: String,
            required: true,
        },
        options: [String],
        correctAnswer: String,
        explanation: String,
    }],
    order: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('Quiz', quizSchema);
