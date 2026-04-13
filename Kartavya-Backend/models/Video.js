import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
  },
  youtubeVideoId: {
    type: String,
    required: [true, 'Please add a YouTube video ID'],
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
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
      'CSAT',
    ],
  },
  description: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Video', videoSchema);
