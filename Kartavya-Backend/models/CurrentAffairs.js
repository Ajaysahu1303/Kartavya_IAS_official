import mongoose from 'mongoose';

const currentAffairsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
    },
    content: {
        type: String,
        required: [true, 'Please add content'],
    },
    category: {
        type: String,
        required: [true, 'Please select a category'],
        enum: [
            'General Studies 1',
            'General Studies 2',
            'General Studies 3',
            'General Studies 4',
            'Prelims Specific',
            'Editorial Analysis'
        ],
    },
    source: {
        type: String,
        default: 'The Hindu',
    },
    date: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: String,
        default: 'Kartavya Editorial Team',
    },
}, { timestamps: true });

export default mongoose.model('CurrentAffairs', currentAffairsSchema);
