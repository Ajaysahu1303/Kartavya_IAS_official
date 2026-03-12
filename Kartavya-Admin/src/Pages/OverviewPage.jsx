import React, { useState, useEffect } from 'react';
import { fetchVideosApi } from '../api/videoService';
import StatsBar from '../components/StatsBar';

const OverviewPage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchVideosApi('All');
        setVideos(data.data || []);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-12 h-12 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h1 className="text-3xl font-black text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1 font-medium">Welcome back! Here's what's happening today.</p>
      </div>

      <StatsBar 
        videosCount={videos.length} 
        categoryCount={[...new Set(videos.map(v => v.category))].length} 
        filterCategory="All" 
      />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <a href="/videos" className="p-4 bg-blue-50 text-blue-700 rounded-2xl text-center font-bold hover:bg-blue-100 transition-colors">
              Manage Videos
            </a>
            <a href="/settings" className="p-4 bg-purple-50 text-purple-700 rounded-2xl text-center font-bold hover:bg-purple-100 transition-colors">
              Update Hero
            </a>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-[#001740] to-[#002670] p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-2">Live Status</h3>
            <p className="text-blue-200 text-sm mb-4">The backend server is active and connected to MongoDB Atlas.</p>
            <div className="flex items-center gap-2 text-green-400 font-bold">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              All Systems Operational
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-8 -mt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
