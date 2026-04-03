import React, { useState, useEffect } from 'react';
import { getSettingApi, updateSettingApi, uploadFileApi } from '../api/videoService';
import { API_BASE } from '../constants/constants';

const GeneralSettings = ({ adminToken }) => {
  const [heroText, setHeroText] = useState('');
  const [heroHeading, setHeroHeading] = useState('');
  const [heroParagraph, setHeroParagraph] = useState('');
  const [selectionsCount, setSelectionsCount] = useState('');
  const [facultyCards, setFacultyCards] = useState([]);

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const keys = ['heroText', 'heroHeading', 'heroParagraph', 'selectionsCount', 'facultyCards'];
      const results = await Promise.all(keys.map(key => getSettingApi(key)));

      results.forEach((res, index) => {
        if (res.success && res.data) {
          const val = res.data.value;
          const key = keys[index];
          if (key === 'heroText') setHeroText(val || 'New Batch Starts Sept 15th');
          if (key === 'heroHeading') setHeroHeading(val || 'Shape Your Destiny With Kartavya IAS');
          if (key === 'heroParagraph') setHeroParagraph(val || 'Prepare for UPSC Prelims and Mains with India’s top coaching institute.');
          if (key === 'selectionsCount') setSelectionsCount(val || '50+');
          if (key === 'facultyCards') {
            try {
              setFacultyCards(val ? JSON.parse(val) : [
                { title: "IAS", img: "https://randomuser.me/api/portraits/men/32.jpg", desc: "Administrative Excellence" },
                { title: "IPS", img: "https://randomuser.me/api/portraits/women/45.jpg", desc: "Maintaining Order" },
                { title: "IFS", img: "https://randomuser.me/api/portraits/men/65.jpg", desc: "Global Diplomacy" }
              ]);
            } catch (e) {
              setFacultyCards([]);
            }
          }
        }
      });
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    try {
      const updates = [
        updateSettingApi('heroText', heroText, adminToken),
        updateSettingApi('heroHeading', heroHeading, adminToken),
        updateSettingApi('heroParagraph', heroParagraph, adminToken),
        updateSettingApi('selectionsCount', selectionsCount, adminToken),
        updateSettingApi('facultyCards', JSON.stringify(facultyCards), adminToken)
      ];

      const results = await Promise.all(updates);
      const allSuccess = results.every(res => res.success);

      if (allSuccess) {
        setMessage('✅ All Hero section settings updated successfully!');
      } else {
        setMessage('❌ Some settings failed to update.');
      }
    } catch (error) {
      setMessage('❌ Network error: ' + error.message);
    }
    setSaving(false);
  };

  const addFaculty = () => {
    setFacultyCards([...facultyCards, { title: '', img: '', desc: '' }]);
  };

  const removeFaculty = (index) => {
    setFacultyCards(facultyCards.filter((_, i) => i !== index));
  };

  const updateFaculty = (index, field, value) => {
    const newCards = [...facultyCards];
    newCards[index][field] = value;
    setFacultyCards(newCards);
  };

  const handleFileUpload = async (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    setMessage('⏳ Uploading image...');
    try {
      const res = await uploadFileApi(file);
      if (res.success) {
        updateFaculty(index, 'img', res.url);
        setMessage('✅ Image uploaded!');
      } else {
        setMessage('❌ Upload failed: ' + res.message);
      }
    } catch (err) {
      setMessage('❌ Error uploading: ' + err.message);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-10">
      <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
        <span className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center text-white text-sm font-black">⚙️</span>
        Hero Section Customization
      </h2>

      <form onSubmit={handleSave} className="space-y-8">
        {/* Basic Hero Text */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1">Badge Text (Top)</label>
            <input
              type="text"
              value={heroText}
              onChange={(e) => setHeroText(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
              placeholder="e.g. New Batch Starts Sept 15th"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1">Selections Count</label>
            <input
              type="text"
              value={selectionsCount}
              onChange={(e) => setSelectionsCount(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
              placeholder="e.g. 50+"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1">Hero Heading</label>
          <input
            type="text"
            value={heroHeading}
            onChange={(e) => setHeroHeading(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
            placeholder="Main Heading"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1">Hero Paragraph</label>
          <textarea
            value={heroParagraph}
            onChange={(e) => setHeroParagraph(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all h-24"
            placeholder="Hero description text"
          />
        </div>

        {/* Faculty Cards section */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-black text-gray-900">Faculty / Program Cards</h3>
            <button
              type="button"
              onClick={addFaculty}
              className="text-xs bg-brand-blue text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              + Add Card
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {facultyCards.map((faculty, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 relative group">
                <button
                  type="button"
                  onClick={() => removeFaculty(index)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg"
                >
                  ✕
                </button>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm overflow-hidden">
                      {faculty.img ? (
                        <img
                          src={faculty.img.startsWith('http') ? faculty.img : `${API_BASE}${faculty.img}`}
                          alt={faculty.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400 font-bold uppercase p-2 text-center">No Image</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Upload Photo</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(index, e)}
                        className="text-xs text-gray-500 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-[10px] file:font-black file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <input
                      type="text"
                      placeholder="Title (e.g. IAS)"
                      value={faculty.title}
                      onChange={(e) => updateFaculty(index, 'title', e.target.value)}
                      className="w-full px-3 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Specialization / Description"
                      value={faculty.desc}
                      onChange={(e) => updateFaculty(index, 'desc', e.target.value)}
                      className="w-full px-3 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={saving || loading}
            className="w-full bg-brand-blue text-white font-bold py-4 rounded-xl shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 cursor-pointer"
          >
            {saving ? 'Saving...' : 'Save All Hero Settings'}
          </button>

          {message && (
            <p className={`mt-4 text-sm font-medium p-3 rounded-xl ${message.startsWith('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default GeneralSettings;
