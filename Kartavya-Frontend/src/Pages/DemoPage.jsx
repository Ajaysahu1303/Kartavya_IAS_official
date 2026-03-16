import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const rawApiBase = import.meta.env.VITE_API_URL || 'https://kartavya-ias-official.vercel.app';
const API_BASE = rawApiBase.replace(/\/$/, '');

// Auto-extract YouTube Video ID from any URL format
const extractYouTubeId = (input) => {
  if (!input) return '';
  const str = input.trim();
  const longMatch = str.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (longMatch) return longMatch[1];
  const shortMatch = str.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];
  const embedMatch = str.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) return str;
  return str;
};

const categoryMeta = {
  'History': { icon: '🏛️', color: 'from-amber-500 to-orange-600' },
  'Geography': { icon: '🌍', color: 'from-green-500 to-emerald-600' },
  'Polity': { icon: '⚖️', color: 'from-blue-500 to-indigo-600' },
  'Economy': { icon: '📊', color: 'from-violet-500 to-purple-600' },
  'Science & Tech': { icon: '🔬', color: 'from-cyan-500 to-teal-600' },
  'Environment': { icon: '🌱', color: 'from-lime-500 to-green-600' },
  'Current Affairs': { icon: '📰', color: 'from-red-500 to-rose-600' },
  'Ethics': { icon: '🧭', color: 'from-sky-500 to-blue-600' },
  'Essay': { icon: '✍️', color: 'from-fuchsia-500 to-pink-600' },
  'CSAT': { icon: '🧮', color: 'from-yellow-500 to-amber-600' },
};

// All possible categories even if no videos yet
const allCategories = Object.keys(categoryMeta);

function DemoPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      fetch(`${API_BASE}/api/videos?category=${encodeURIComponent(selectedCategory)}`)
        .then((res) => res.json())
        .then((data) => {
          setVideos(data.data || []);
          setActiveVideo(data.data && data.data.length > 0 ? data.data[0] : null);
          setLoading(false);
        })
        .catch(() => {
          setVideos([]);
          setLoading(false);
        });
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Main Heading */}
      {!selectedCategory && (
        <div className="text-center pt-14 pb-10 px-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
            <h2 className="text-sm font-extrabold text-brand-blue tracking-widest uppercase">Free Demo Lectures</h2>
            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Choose a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue">Subject</span>
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto text-lg font-medium">
            Watch free demo lectures from our expert faculty across all UPSC subjects.
          </p>
        </div>
      )}

      {/* Category Grid */}
      {!selectedCategory && (
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {allCategories.map((cat) => {
              const meta = categoryMeta[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${meta.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform duration-300">{meta.icon}</span>
                    <h4 className="font-bold text-gray-800 group-hover:text-white transition-colors text-sm">{cat}</h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Videos for Selected Category */}
      {selectedCategory && (
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => { setSelectedCategory(null); setVideos([]); setActiveVideo(null); }}
              className="bg-white border border-gray-200 text-gray-700 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              All Subjects
            </button>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              <span className="text-4xl mr-2">{categoryMeta[selectedCategory]?.icon}</span>
              {selectedCategory}
            </h2>
          </div>

          {loading && (
            <div className="text-center py-20">
              <div className="inline-block w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-500 font-medium">Loading videos...</p>
            </div>
          )}

          {!loading && videos.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <span className="text-6xl block mb-4">📹</span>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">Coming Soon!</h3>
              <p className="text-gray-500 font-medium">Demo lectures for {selectedCategory} will be added shortly.</p>
            </div>
          )}

          {!loading && videos.length > 0 && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Video Player */}
              <div className="lg:col-span-2">
                {activeVideo && (
                  <div>
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${extractYouTubeId(activeVideo.youtubeVideoId)}?rel=0&modestbranding=1`}
                        title={activeVideo.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-5">{activeVideo.title}</h3>
                    {activeVideo.description && (
                      <p className="text-gray-600 mt-2">{activeVideo.description}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Video Playlist Sidebar */}
              <div className="lg:col-span-1">
                <h4 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider">
                  {videos.length} Lecture{videos.length > 1 ? 's' : ''} Available
                </h4>
                <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                  {videos.map((video) => (
                    <button
                      key={video._id}
                      onClick={() => setActiveVideo(video)}
                      className={`w-full flex gap-3 items-start p-3 rounded-xl text-left transition-all duration-200 ${activeVideo?._id === video._id
                        ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30'
                        : 'bg-white hover:bg-gray-50 border border-gray-100 shadow-sm'
                        }`}
                    >
                      <div className="flex-shrink-0 w-28 h-16 rounded-lg overflow-hidden bg-gray-200 relative">
                        <img
                          src={`https://img.youtube.com/vi/${extractYouTubeId(video.youtubeVideoId)}/mqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-bold text-sm line-clamp-2 ${activeVideo?._id === video._id ? 'text-white' : 'text-gray-800'}`}>
                          {video.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DemoPage;
