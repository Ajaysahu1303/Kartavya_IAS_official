import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    course: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        trim: true,
    },
}, { timestamps: true });

export default mongoose.model('Enrollment', enrollmentSchema);
