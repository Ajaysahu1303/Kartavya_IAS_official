import React, { useState, useEffect } from 'react';
import { 
  fetchOfferingsApi, 
  addOfferingApi, 
  deleteOfferingApi, 
  updateOfferingApi 
} from '../api/videoService';

const OfferingsPage = ({ adminToken }) => {
  const [offerings, setOfferings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // Form state
  const initialFormState = {
    title: '',
    link: ''
  };
  const [formData, setFormData] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const fetchOfferings = async () => {
    setLoading(true);
    try {
      const data = await fetchOfferingsApi();
      setOfferings(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOfferings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      let res;
      if (editingId) {
        res = await updateOfferingApi(editingId, formData, adminToken);
      } else {
        res = await addOfferingApi(formData, adminToken);
      }

      if (res.success) {
        setMessage(editingId ? '✅ Offering updated!' : '✅ Offering added!');
        setFormData(initialFormState);
        setEditingId(null);
        fetchOfferings();
      } else {
        setMessage('❌ Error: ' + res.message);
      }
    } catch (error) {
      setMessage('❌ Error: ' + error.message);
    }
    setSubmitting(false);
  };

  const handleEdit = (offering) => {
    setEditingId(offering._id);
    setFormData({
      title: offering.title,
      link: offering.link
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;
    try {
      const res = await deleteOfferingApi(id, adminToken);
      if (res.success) {
        fetchOfferings();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      <div>
        <h1 className="text-3xl font-black text-gray-900">Footer Offerings Management</h1>
        <p className="text-gray-500 mt-1 font-medium">Manage the quick service links displayed in the website footer.</p>
      </div>

      {/* Offering Form */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
        <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center text-white text-sm font-black">
            {editingId ? '✏️' : '+'}
          </span>
          {editingId ? 'Edit Offering' : 'Add New Offering'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1">Offering Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium"
                placeholder="e.g. UPSC GS Foundation"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1">Link (ID or URL) *</label>
              <input
                type="text"
                required
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium"
                placeholder="e.g. #course-1 or https://..."
              />
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 bg-brand-blue text-white font-black py-4 rounded-xl shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 cursor-pointer"
            >
              {submitting ? 'Processing...' : editingId ? 'Update Offering' : 'Create Offering'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => { setEditingId(null); setFormData(initialFormState); }}
                className="px-6 py-4 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-all cursor-pointer"
              >
                Cancel
              </button>
            )}
          </div>
          {message && (
            <p className={`text-sm font-bold text-center p-3 rounded-xl ${message.startsWith('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {message}
            </p>
          )}
        </form>
      </div>

      {/* Offering List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-gray-900">Existing Offerings ({offerings.length})</h2>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : offerings.length === 0 ? (
          <div className="bg-white p-16 text-center rounded-3xl border border-gray-100 shadow-sm">
            <span className="text-5xl block mb-4">🔗</span>
            <p className="text-gray-500 font-bold">No offerings found. Add your first link above!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering) => (
              <div key={offering._id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group relative">
                <div className="flex justify-between items-start mb-4">
                  <div className="pr-10">
                    <h3 className="text-xl font-black text-brand-blue-dark leading-tight">{offering.title}</h3>
                    <p className="text-brand-blue text-xs font-bold mt-2 truncate w-48 bg-brand-blue/5 px-2 py-1 rounded inline-block">{offering.link}</p>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <button onClick={() => handleEdit(offering)} className="bg-blue-50 text-blue-600 p-2 rounded-lg hover:bg-blue-100 transition-colors" title="Edit">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                  </button>
                  <button onClick={() => handleDelete(offering._id, offering.title)} className="bg-red-50 text-red-600 p-2 rounded-lg hover:bg-red-100 transition-colors" title="Delete">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferingsPage;
