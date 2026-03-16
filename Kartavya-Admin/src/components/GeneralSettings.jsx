import React, { useState, useEffect } from 'react';
import { getSettingApi, updateSettingApi } from '../api/videoService';

const GeneralSettings = ({ adminToken }) => {
  const [heroText, setHeroText] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const fetchHeroText = async () => {
    setLoading(true);
    try {
      const res = await getSettingApi('heroText');
      if (res.success) {
        setHeroText(res.data.value || 'New Batch Starts Sept 15th');
      }
    } catch (error) {
      console.error('Error fetching hero text:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHeroText();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    try {
      const res = await updateSettingApi('heroText', heroText, adminToken);
      if (res.success) {
        setMessage('✅ Hero text updated successfully!');
      } else {
        setMessage('❌ Error: ' + res.message);
      }
    } catch (error) {
      setMessage('❌ Network error: ' + error.message);
    }
    setSaving(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-10">
      <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
        <span className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center text-white text-sm font-black">⚙️</span>
        General Settings
      </h2>

      <form onSubmit={handleSave} className="space-y-6">
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1">Hero Section Text</label>
          <input
            type="text"
            value={heroText}
            onChange={(e) => setHeroText(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
            placeholder="e.g. New Batch Starts Sept 15th"
            required
          />
          <p className="text-xs text-gray-500 mt-2">This text appears on the main website's hero section.</p>
        </div>

        <button
          type="submit"
          disabled={saving || loading}
          className="bg-brand-blue text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 cursor-pointer"
        >
          {saving ? 'Saving...' : 'Save Settings'}
        </button>

        {message && (
          <p className={`text-sm font-medium p-3 rounded-xl ${message.startsWith('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default GeneralSettings;
