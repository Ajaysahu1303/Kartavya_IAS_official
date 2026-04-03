import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const categories = [
  'History', 'Geography', 'Polity', 'Economy', 'Science & Tech',
  'Environment', 'Current Affairs', 'Ethics', 'CSAT', 'All',
];

function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminToken, setAdminToken] = useState('');
  const [loginInput, setLoginInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Form state
  const [formData, setFormData] = useState({ title: '', youtubeVideoId: '', category: categories[0], description: '' });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Videos list
  const [videos, setVideos] = useState([]);
  const [filterCategory, setFilterCategory] = useState('All');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginInput.trim()) {
      setLoginError('Please enter the admin token');
      return;
    }
    setAdminToken(loginInput.trim());
    setIsLoggedIn(true);
    setLoginError('');
  };

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const url = filterCategory === 'All'
        ? `${API_BASE}/api/videos`
        : `${API_BASE}/api/videos?category=${encodeURIComponent(filterCategory)}`;
      const res = await fetch(url);
      const data = await res.json();
      setVideos(data.data || []);
    } catch {
      setVideos([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isLoggedIn) fetchVideos();
  }, [isLoggedIn, filterCategory]);

  const handleAddVideo = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg('');
    try {
      const res = await fetch(`${API_BASE}/api/videos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken,
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg(`✅ "${formData.title}" added successfully!`);
        setFormData({ title: '', youtubeVideoId: '', category: categories[0], description: '' });
        fetchVideos();
      } else {
        setSuccessMsg(`❌ Error: ${data.message}`);
      }
    } catch (err) {
      setSuccessMsg(`❌ Network error: ${err.message}`);
    }
    setSubmitting(false);
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;
    try {
      const res = await fetch(`${API_BASE}/api/videos/${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-token': adminToken },
      });
      const data = await res.json();
      if (data.success) {
        fetchVideos();
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (err) {
      alert(`Network error: ${err.message}`);
    }
  };

  // ========================
  // LOGIN SCREEN
  // ========================
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#001740] to-[#002670] flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-brand-red-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-red/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h2 className="text-2xl font-black text-gray-900">Admin Login</h2>
            <p className="text-gray-500 text-sm mt-1">Enter your secret token to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">Admin Secret Token</label>
              <input
                type="password"
                value={loginInput}
                onChange={(e) => setLoginInput(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                placeholder="Enter admin token"
              />
            </div>
            {loginError && <p className="text-brand-red text-sm font-medium">{loginError}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white font-bold py-3.5 rounded-xl shadow-lg hover:-translate-y-1 transition-all"
            >
              Login
            </button>
          </form>

          <Link to="/" className="block text-center mt-6 text-brand-blue font-bold text-sm hover:underline">
            ← Back to Website
          </Link>
        </div>
      </div>
    );
  }

  // ========================
  // ADMIN DASHBOARD
  // ========================
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-[#001740] to-[#002670] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </div>
            <h1 className="text-xl font-black">Video Manager</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/demo" className="text-brand-gold-light font-bold text-sm hover:text-white transition-colors">View Demo Page →</Link>
            <button
              onClick={() => { setIsLoggedIn(false); setAdminToken(''); }}
              className="bg-white/10 text-white font-bold px-4 py-2 rounded-xl text-sm hover:bg-white/20 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* Add Video Form — Left */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-6">
              <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white text-sm">+</span>
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
                  <label className="text-sm font-semibold text-gray-700 block mb-1">YouTube Video ID *</label>
                  <input
                    type="text"
                    required
                    value={formData.youtubeVideoId}
                    onChange={(e) => setFormData({ ...formData, youtubeVideoId: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                    placeholder="e.g. pmmLK6qCG7c"
                  />
                  <p className="text-xs text-gray-400 mt-1">The ID from the YouTube URL (e.g. youtube.com/watch?v=<strong>pmmLK6qCG7c</strong>)</p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1">Subject Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
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
                {formData.youtubeVideoId && (
                  <div className="rounded-xl overflow-hidden border border-gray-200">
                    <img
                      src={`https://img.youtube.com/vi/${formData.youtubeVideoId}/mqdefault.jpg`}
                      alt="Preview"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-brand-red to-brand-red-dark text-white font-bold py-3.5 rounded-xl shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50"
                >
                  {submitting ? 'Adding...' : 'Add Video'}
                </button>

                {successMsg && (
                  <p className={`text-sm font-medium text-center p-3 rounded-xl ${successMsg.startsWith('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {successMsg}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Videos List — Right */}
          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-xl font-black text-gray-900">All Videos ({videos.length})</h2>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none"
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
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                <span className="text-5xl block mb-3">📭</span>
                <p className="text-gray-500 font-medium">No videos found. Add your first video!</p>
              </div>
            )}

            {!loading && videos.length > 0 && (
              <div className="space-y-4">
                {videos.map((video) => (
                  <div key={video._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex gap-4 items-center hover:shadow-md transition-shadow">
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
                      <div className="flex items-center gap-3 mt-1">
                        <span className="bg-brand-blue/10 text-brand-blue text-xs font-bold px-2.5 py-1 rounded-full">{video.category}</span>
                        <span className="text-gray-400 text-xs">{new Date(video.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(video._id, video.title)}
                      className="flex-shrink-0 bg-red-50 text-brand-red hover:bg-red-100 p-2.5 rounded-xl transition-colors"
                      title="Delete video"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
