import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  duration: {
    type: String,
    required: [true, 'Please add a duration'],
  },
  mode: {
    type: String,
    required: [true, 'Please add a mode'],
  },
  price: {
    type: String,
    required: [true, 'Please add a price'],
  },
  popular: {
    type: Boolean,
    default: false,
  },
  syllabus: {
    type: [String],
    default: [],
  },
  feeStructure: {
    type: [String],
    default: [],
  },
  features: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Course ||
  mongoose.model("Course", courseSchema);