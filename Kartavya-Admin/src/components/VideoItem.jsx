import React from 'react';
import { categories } from '../constants/constants';

const VideoItem = ({ 
  video, 
  editingId, 
  setEditingId, 
  editData, 
  setEditData, 
  handleUpdate, 
  handleDelete 
}) => {
  return (
    <div key={video._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
      {editingId === video._id ? (
        /* Edit Mode */
        <div className="space-y-3">
          <input
            type="text"
            value={editData.title}
            onChange={(e) => setEditData({ ...editData, title: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-blue outline-none"
            placeholder="Title"
          />
          <input
            type="text"
            value={editData.youtubeVideoId}
            onChange={(e) => setEditData({ ...editData, youtubeVideoId: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-blue outline-none"
            placeholder="YouTube Video ID"
          />
          <select
            value={editData.category}
            onChange={(e) => setEditData({ ...editData, category: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-blue outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <div className="flex gap-2">
            <button onClick={() => handleUpdate(video._id)} className="bg-brand-blue text-white font-bold px-4 py-2 rounded-lg text-sm cursor-pointer">Save</button>
            <button onClick={() => setEditingId(null)} className="bg-gray-100 text-gray-700 font-bold px-4 py-2 rounded-lg text-sm cursor-pointer">Cancel</button>
          </div>
        </div>
      ) : (
        /* View Mode */
        <div className="flex gap-4 items-center">
          <div className="flex-shrink-0 w-32 h-20 rounded-xl overflow-hidden bg-gray-200 relative">
            <img
              src={`https://img.youtube.com/vi/${video.youtubeVideoId}/mqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-sm line-clamp-1">{video.title}</h3>
            <div className="flex items-center gap-3 mt-1 flex-wrap">
              <span className="bg-brand-blue/10 text-brand-blue text-xs font-bold px-2.5 py-1 rounded-full">{video.category}</span>
              <span className="text-gray-400 text-xs">{new Date(video.createdAt).toLocaleDateString()}</span>
              <span className="text-gray-400 text-xs font-mono">ID: {video.youtubeVideoId}</span>
            </div>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={() => { setEditingId(video._id); setEditData({ title: video.title, youtubeVideoId: video.youtubeVideoId, category: video.category, description: video.description || '' }); }}
              className="bg-blue-50 text-brand-blue hover:bg-blue-100 p-2.5 rounded-xl transition-colors cursor-pointer"
              title="Edit video"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
            </button>
            <button
              onClick={() => handleDelete(video._id, video.title)}
              className="bg-red-50 text-brand-red hover:bg-red-100 p-2.5 rounded-xl transition-colors cursor-pointer"
              title="Delete video"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoItem;
