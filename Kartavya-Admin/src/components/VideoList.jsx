import React from 'react';
import { categories } from '../constants/constants';
import VideoItem from './VideoItem';

const VideoList = ({ 
  videos, 
  loading, 
  filterCategory, 
  setFilterCategory, 
  editingId, 
  setEditingId, 
  editData, 
  setEditData, 
  handleUpdate, 
  handleDelete 
}) => {
  return (
    <div className="lg:col-span-3">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-black text-gray-900">All Videos</h2>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none cursor-pointer"
        >
          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {loading && (
        <div className="text-center py-16">
          <div className="inline-block w-8 h-8 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && videos.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-5xl block mb-3">📭</span>
          <h3 className="text-xl font-bold text-gray-700 mb-1">No Videos Yet</h3>
          <p className="text-gray-500 font-medium text-sm">Add your first demo video using the form!</p>
        </div>
      )}

      {!loading && videos.length > 0 && (
        <div className="space-y-4">
          {videos.map((video) => (
            <VideoItem 
              key={video._id} 
              video={video} 
              editingId={editingId} 
              setEditingId={setEditingId} 
              editData={editData} 
              setEditData={setEditData} 
              handleUpdate={handleUpdate} 
              handleDelete={handleDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoList;
