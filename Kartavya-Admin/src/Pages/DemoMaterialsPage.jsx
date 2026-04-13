import React, { useState, useEffect } from 'react';
import {
  fetchDemoMaterialsApi,
  addDemoMaterialApi,
  deleteDemoMaterialApi,
  updateDemoMaterialApi,
  uploadFileApi
} from '../api/videoService';

const DemoMaterialsPage = ({ adminToken }) => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = [
    'History', 'Geography', 'Polity', 'economics',
    'Science & Tech', 'Environment', 'Current Affairs',
    'Ethics', 'Essay', 'CSAT'
  ];

  const [formData, setFormData] = useState({
    title: '',
    category: 'History',
    file: null,
    fileUrl: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const fetchMaterials = async () => {
    setLoading(true);
    try {
      const data = await fetchDemoMaterialsApi(filterCategory === 'All' ? '' : filterCategory);
      if (data.success) {
        setMaterials(data.data);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMaterials();
  }, [filterCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      let finalFileUrl = formData.fileUrl;

      // Upload file if new one is selected
      if (formData.file) {
        const uploadRes = await uploadFileApi(formData.file);
        if (uploadRes.success) {
          finalFileUrl = uploadRes.url;
        } else {
          throw new Error('File upload failed');
        }
      }

      const payload = {
        title: formData.title,
        category: formData.category,
        fileUrl: finalFileUrl
      };

      let res;
      if (editingId) {
        res = await updateDemoMaterialApi(editingId, payload, adminToken);
      } else {
        if (!finalFileUrl) throw new Error('Please upload a PDF file');
        res = await addDemoMaterialApi(payload, adminToken);
      }

      if (res.success) {
        setMessage(editingId ? '✅ PDF Updated!' : '✅ PDF Added!');
        setFormData({ title: '', category: 'History', file: null, fileUrl: '' });
        setEditingId(null);
        fetchMaterials();
      } else {
        setMessage('❌ Error: ' + res.message);
      }
    } catch (error) {
      setMessage('❌ Error: ' + error.message);
    }
    setSubmitting(false);
  };

  const handleEdit = (material) => {
    setEditingId(material._id);
    setFormData({
      title: material.title,
      category: material.category,
      file: null,
      fileUrl: material.fileUrl
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this PDF?')) return;
    try {
      const res = await deleteDemoMaterialApi(id, adminToken);
      if (res.success) fetchMaterials();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="space-y-10 animate-fadeIn bg-gray-50 min-h-screen pb-20">
      <div>
        <h1 className="text-3xl font-black text-gray-900">Demo PDF Management</h1>
        <p className="text-gray-500 mt-1 font-medium">Manage free downloadable resources for the Demo section.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
        <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center text-white text-sm">
            {editingId ? '📝' : '➕'}
          </span>
          {editingId ? 'Edit PDF Details' : 'Add New PDF Resource'}
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1">PDF Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                placeholder="e.g. Modern History Prelims Notes"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1">Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1">
                {editingId ? 'Change PDF File (Optional)' : 'Upload PDF File *'}
              </label>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none"
              />
              {formData.fileUrl && (
                <p className="text-[10px] text-brand-blue font-bold mt-1 truncate">Current: {formData.fileUrl}</p>
              )}
            </div>
            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-brand-blue text-white font-black py-4 rounded-xl shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50"
              >
                {submitting ? 'Processing...' : editingId ? 'Update Material' : 'Publish PDF'}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={() => { setEditingId(null); setFormData({ title: '', category: 'History', file: null, fileUrl: '' }); }}
                  className="px-6 py-4 bg-gray-100 text-gray-600 font-bold rounded-xl"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
          {message && (
            <div className={`md:col-span-2 p-4 rounded-xl text-sm font-bold ${message.startsWith('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {message}
            </div>
          )}
        </form>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-2xl font-black text-gray-900">Resource Library</h2>
          <div className="flex gap-2 p-1 bg-white rounded-xl border border-gray-100 shadow-sm overflow-x-auto max-w-full">
            <button
              onClick={() => setFilterCategory('All')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${filterCategory === 'All' ? 'bg-brand-blue text-white' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${filterCategory === cat ? 'bg-brand-blue text-white' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
            <div className="inline-block w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : materials.length === 0 ? (
          <div className="bg-white p-20 text-center rounded-3xl border border-gray-100 shadow-sm">
            <span className="text-5xl block mb-4">📄</span>
            <p className="text-gray-500 font-bold">No PDF materials found for this category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((m) => (
              <div key={m._id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-2xl">
                    📕
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(m)} className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                      ✏️
                    </button>
                    <button onClick={() => handleDelete(m._id)} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                      🗑️
                    </button>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-800 line-clamp-2 mb-2">{m.title}</h3>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-black uppercase rounded-full w-fit">
                  {m.category}
                </span>
                <div className="mt-6 pt-6 border-t border-gray-50">
                  <a
                    href={(m.fileUrl || '').startsWith('http') ? m.fileUrl : `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${m.fileUrl || ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-gray-50 text-brand-blue font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-blue hover:text-white transition-all text-sm"
                  >
                    Preview PDF 👁️
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoMaterialsPage;
