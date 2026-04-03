import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  fetchCoursesApi, 
  addCourseApi, 
  deleteCourseApi, 
  updateCourseApi 
} from '../api/videoService';

const CoursesPage = ({ adminToken }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // Form state
  const initialFormState = {
    title: '',
    description: '',
    duration: '',
    mode: '',
    price: '',
    popular: false,
    syllabus: '',
    feeStructure: '',
    features: ''
  };
  const [formData, setFormData] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const data = await fetchCoursesApi();
      if (data.success) {
        setCourses(data.data);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    const formattedData = {
      ...formData,
      syllabus: formData.syllabus.split(',').map(s => s.trim()).filter(s => s !== ''),
      feeStructure: formData.feeStructure.split(',').map(f => f.trim()).filter(f => f !== '')
    };

    try {
      let res;
      if (editingId) {
        res = await updateCourseApi(editingId, formattedData, adminToken);
      } else {
        res = await addCourseApi(formattedData, adminToken);
      }

      if (res.success) {
        setMessage(editingId ? '✅ Course updated!' : '✅ Course added!');
        setFormData(initialFormState);
        setEditingId(null);
        fetchCourses();
      } else {
        setMessage('❌ Error: ' + res.message);
      }
    } catch (error) {
      setMessage('❌ Error: ' + error.message);
    }
    setSubmitting(false);
  };

  const handleEdit = (course) => {
    setEditingId(course._id);
    setFormData({
      title: course.title,
      description: course.description,
      duration: course.duration,
      mode: course.mode,
      price: course.price,
      popular: course.popular,
      syllabus: course.syllabus.join(', '),
      feeStructure: course.feeStructure.join(', '),
      features: course.features
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;
    try {
      const res = await deleteCourseApi(id, adminToken);
      if (res.success) {
        fetchCourses();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      <div>
        <h1 className="text-3xl font-black text-gray-900">Course Management</h1>
        <p className="text-gray-500 mt-1 font-medium">Manage your educational programs and fee structures.</p>
      </div>

      {/* Course Form */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
        <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center text-white text-sm font-black">
            {editingId ? '✏️' : '+'}
          </span>
          {editingId ? 'Edit Course' : 'Add New Course'}
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1">Course Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                placeholder="e.g. UPSC CSE Foundation"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1">Price *</label>
              <input
                type="text"
                required
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                placeholder="e.g. ₹85,000"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-bold text-gray-700 block mb-1">Duration *</label>
                <input
                  type="text"
                  required
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                  placeholder="e.g. 12 Months"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-gray-700 block mb-1">Mode *</label>
                <input
                  type="text"
                  required
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                  placeholder="e.g. Offline / Online"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1">Description *</label>
              <textarea
                required
                rows="3"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all resize-none"
                placeholder="Short pitch for the course"
              ></textarea>
            </div>
            <div className="flex items-center gap-3 p-4 bg-brand-surface rounded-2xl border border-gray-100">
               <input 
                type="checkbox" 
                id="popular" 
                checked={formData.popular}
                onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
                className="w-5 h-5 accent-brand-gold cursor-pointer"
               />
               <label htmlFor="popular" className="text-sm font-bold text-gray-700 cursor-pointer">Mark as "Most Popular"</label>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1">Syllabus (comma separated items) *</label>
              <textarea
                required
                rows="3"
                value={formData.syllabus}
                onChange={(e) => setFormData({ ...formData, syllabus: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all resize-none"
                placeholder="History, Geography, Polity..."
              ></textarea>
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1">Fee Structure (comma separated items) *</label>
              <textarea
                required
                rows="3"
                value={formData.feeStructure}
                onChange={(e) => setFormData({ ...formData, feeStructure: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all resize-none"
                placeholder="Registration: ₹5000, 1st Installment: ₹40000..."
              ></textarea>
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1">Key Features</label>
              <input
                type="text"
                value={formData.features}
                onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                placeholder="e.g. Daily Answer Writing, Mentorship"
              />
            </div>
            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-brand-blue text-white font-black py-4 rounded-xl shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 cursor-pointer"
              >
                {submitting ? 'Processing...' : editingId ? 'Update Course' : 'Create Course'}
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
          </div>
        </form>
      </div>

      {/* Course List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-gray-900">Existing Courses ({courses.length})</h2>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : courses.length === 0 ? (
          <div className="bg-white p-16 text-center rounded-3xl border border-gray-100 shadow-sm">
            <span className="text-5xl block mb-4">📚</span>
            <p className="text-gray-500 font-bold">No courses found. Add your first program above!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div key={course._id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-black text-brand-blue-dark">{course.title}</h3>
                      {course.popular && <span className="bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase px-2 py-0.5 rounded-full border border-brand-gold/20">Popular</span>}
                    </div>
                    <p className="text-brand-blue text-sm font-black mt-1">{course.price}</p>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => handleEdit(course)} className="bg-blue-50 text-blue-600 p-2 rounded-lg hover:bg-blue-100" title="Edit">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </button>
                    <button onClick={() => handleDelete(course._id, course.title)} className="bg-red-50 text-red-600 p-2 rounded-lg hover:bg-red-100" title="Delete">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4 py-4 border-y border-gray-50">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400">Duration</p>
                    <p className="text-sm font-bold text-gray-700">{course.duration}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400">Mode</p>
                    <p className="text-sm font-bold text-gray-700">{course.mode}</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center gap-4">
                   <div className="flex-1">
                     <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Syllabus Highlights</p>
                     <div className="flex flex-wrap gap-2">
                       {course.syllabus.slice(0, 3).map((s, i) => (
                         <span key={i} className="bg-gray-50 text-gray-600 text-xs px-2 py-1 rounded-md border border-gray-100">{s}</span>
                       ))}
                       {course.syllabus.length > 3 && <span className="text-gray-400 text-xs font-bold">+{course.syllabus.length - 3} more</span>}
                     </div>
                   </div>
                   <Link to={`/subjects/${course._id}`} className="px-4 py-2 bg-brand-blue/10 text-brand-blue font-black rounded-lg hover:bg-brand-blue hover:text-white transition-all text-xs flex-shrink-0 cursor-pointer">
                     Manage Subjects →
                   </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
