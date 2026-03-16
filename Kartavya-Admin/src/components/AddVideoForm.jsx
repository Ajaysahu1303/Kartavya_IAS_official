import React from 'react';
import { extractYouTubeId } from '../utils/youtube';
import { categories } from '../constants/constants';

const AddVideoForm = ({ 
  formData, 
  setFormData, 
  handleAddVideo, 
  submitting, 
  successMsg 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-6">
      <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
        <span className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white text-sm font-black">+</span>
        Add New Video
      </h2>

      <form onSubmit={handleAddVideo} className="space-y-5">
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1">Video Title *</label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
            placeholder="e.g. Indian Freedom Movement - Part 1"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1">YouTube Video Link or ID *</label>
          <input
            type="text"
            required
            value={formData.youtubeVideoId}
            onChange={(e) => setFormData({ ...formData, youtubeVideoId: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
            placeholder="Paste full YouTube URL or just the ID"
          />
          {formData.youtubeVideoId && (
            <p className="text-xs mt-1 font-medium text-green-600">
              ✅ Extracted ID: <strong>{extractYouTubeId(formData.youtubeVideoId)}</strong>
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1">Subject Category *</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1">Description (Optional)</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all resize-none"
            rows="3"
            placeholder="Short description of the video"
          ></textarea>
        </div>

        {/* Preview */}
        {formData.youtubeVideoId && extractYouTubeId(formData.youtubeVideoId).length === 11 && (
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <img
              src={`https://img.youtube.com/vi/${extractYouTubeId(formData.youtubeVideoId)}/mqdefault.jpg`}
              alt="Preview"
              className="w-full h-36 object-cover"
            />
            <div className="bg-gray-50 px-3 py-2 text-xs text-gray-500 font-medium">
              Preview: {extractYouTubeId(formData.youtubeVideoId)}
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-gradient-to-r from-brand-red to-brand-red-dark text-white font-bold py-3.5 rounded-xl shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 cursor-pointer"
        >
          {submitting ? 'Adding...' : '🚀 Add Video'}
        </button>

        {successMsg && (
          <p className={`text-sm font-medium text-center p-3 rounded-xl ${successMsg.startsWith('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {successMsg}
          </p>
        )}
      </form>
    </div>
  );
};

export default AddVideoForm;
