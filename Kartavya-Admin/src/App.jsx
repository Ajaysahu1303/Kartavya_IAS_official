import { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/logo.png';

const rawApiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const API_BASE = rawApiBase.replace(/\/$/, ''); // Remove trailing slash if it exists

const categories = [
  'History', 'Geography', 'Polity', 'Economy', 'Science & Tech',
  'Environment', 'Current Affairs', 'Ethics', 'Essay', 'CSAT',
];

// Auto-extract YouTube Video ID from any URL format
const extractYouTubeId = (input) => {
  if (!input) return '';
  const str = input.trim();

  // youtube.com/watch?v=ID
  const longMatch = str.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (longMatch) return longMatch[1];

  // youtu.be/ID
  const shortMatch = str.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];

  // youtube.com/embed/ID
  const embedMatch = str.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];

  // Already a clean ID (11 chars)
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) return str;

  // Return as-is (user might still be typing)
  return str;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminToken, setAdminToken] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({ title: '', youtubeVideoId: '', category: categories[0], description: '' });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Videos list
  const [videos, setVideos] = useState([]);
  const [filterCategory, setFilterCategory] = useState('All');
  const [loading, setLoading] = useState(false);

  // Edit mode
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ title: '', youtubeVideoId: '', category: '', description: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setLoginError('Please enter both email and password');
      return;
    }
    setLoginLoading(true);
    setLoginError('');
    try {
      const res = await fetch(`${API_BASE}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail.trim(), password: loginPassword }),
      });
      const data = await res.json();
      if (data.success) {
        setAdminToken(data.token);
        setIsLoggedIn(true);
      } else {
        setLoginError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setLoginError('Server not reachable. Make sure backend is running.');
    }
    setLoginLoading(false);
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
      const cleanedFormData = { ...formData, youtubeVideoId: extractYouTubeId(formData.youtubeVideoId) };
      const res = await fetch(`${API_BASE}/api/videos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken,
        },
        body: JSON.stringify(cleanedFormData),
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

  const handleUpdate = async (id) => {
    try {
      const cleanedEditData = { ...editData, youtubeVideoId: extractYouTubeId(editData.youtubeVideoId) };
      const res = await fetch(`${API_BASE}/api/videos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken,
        },
        body: JSON.stringify(cleanedEditData),
      });
      const data = await res.json();
      if (data.success) {
        setEditingId(null);
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
            <div className="w-40 h-40 flex items-center justify-center mx-auto mb-2 drop-shadow-xl">
              <img src={logo} alt="Kartavya IAS Logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-2xl font-black text-gray-900">Admin Panel</h2>
            <p className="text-gray-500 text-sm mt-1 font-medium">Kartavya IAS — Video Manager</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">Email</label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                placeholder="admin@kartavyaias.com"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">Password</label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                placeholder="Enter your password"
              />
            </div>
            {loginError && (
              <p className="text-brand-red text-sm font-medium bg-red-50 p-3 rounded-xl">
                ❌ {loginError}
              </p>
            )}
            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white font-bold py-3.5 rounded-xl shadow-lg hover:-translate-y-1 transition-all cursor-pointer disabled:opacity-50"
            >
              {loginLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
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
            <div className="w-14 h-14 flex items-center justify-center drop-shadow-md">
              <img src={logo} alt="Kartavya Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-black">Video Manager</h1>
              <p className="text-brand-gold-light text-xs font-bold">Kartavya IAS Admin</p>
            </div>
          </div>
          <button
            onClick={() => { setIsLoggedIn(false); setAdminToken(''); }}
            className="bg-white/10 text-white font-bold px-5 py-2 rounded-xl text-sm hover:bg-white/20 transition-colors cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Total Videos</p>
            <p className="text-3xl font-black text-brand-blue mt-1">{videos.length}</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Categories</p>
            <p className="text-3xl font-black text-brand-red mt-1">{[...new Set(videos.map(v => v.category))].length}</p>
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

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* Add Video Form — Left */}
          <div className="lg:col-span-2">
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
          </div>

          {/* Videos List — Right */}
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
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
