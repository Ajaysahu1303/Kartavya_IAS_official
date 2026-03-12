import React from 'react';

const StatsBar = ({ videosCount, categoryCount, filterCategory }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Total Videos</p>
          <p className="text-3xl font-black text-brand-blue mt-1">{videosCount}</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Categories</p>
          <p className="text-3xl font-black text-brand-red mt-1">{categoryCount}</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Current Filter</p>
          <p className="text-lg font-black text-gray-900 mt-1">{filterCategory}</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Status</p>
          <p className="text-lg font-black text-green-600 mt-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Connected
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
