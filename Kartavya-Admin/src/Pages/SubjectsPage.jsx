import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  fetchSubjectsApi,
  addSubjectApi,
  deleteSubjectApi,
  updateSubjectApi,
  fetchCoursesApi
} from '../api/videoService';

const SubjectsPage = ({ adminToken }) => {
  const { courseId } = useParams();
  const [subjects, setSubjects] = useState([]);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const initialFormState = {
    title: '',
    description: '',
    order: 0
  };
  const [formData, setFormData] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const coursesRes = await fetchCoursesApi();
      if (coursesRes.success) {
        setCourse(coursesRes.data.find(c => c._id === courseId));
      }

      const subjectsRes = await fetchSubjectsApi(courseId);
      if (subjectsRes.success) {
        setSubjects(subjectsRes.data);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [courseId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      let res;
      if (editingId) {
        res = await updateSubjectApi(editingId, formData, adminToken);
      } else {
        res = await addSubjectApi({ ...formData, course: courseId }, adminToken);
      }

      if (res.success) {
        setMessage(editingId ? '✅ Subject updated!' : '✅ Subject added!');
        setFormData(initialFormState);
        setEditingId(null);
        fetchData();
      } else {
        setMessage('❌ Error: ' + res.message);
      }
    } catch (error) {
      setMessage('❌ Error: ' + error.message);
    }
    setSubmitting(false);
  };

  const handleEdit = (subject) => {
    setEditingId(subject._id);
    setFormData({
      title: subject.title,
      description: subject.description || '',
      order: subject.order || 0
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Are you sure you want to delete subject "${title}"?`)) return;
    try {
      const res = await deleteSubjectApi(id, adminToken);
      if (res.success) {
        fetchData();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/courses" className="text-brand-blue hover:underline text-sm font-bold flex items-center gap-1 mb-2">
            ← Back to Courses
          </Link>
          <h1 className="text-3xl font-black text-gray-900">
            {course ? `${course.title}: Subjects` : 'Subjects Management'}
          </h1>
          <p className="text-gray-500 mt-1 font-medium">Manage chapters and topics for this course.</p>
        </div>
      </div>

      {/* Subject Form */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
        <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center text-white text-sm font-black">
            {editingId ? '✏️' : '+'}
          </span>
          {editingId ? 'Edit Subject' : 'Add New Subject'}
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1">Subject Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                placeholder="e.g. Ancient Indian History"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1">Display Order</label>
              <input
                type="number"
                value={formData.order}
                onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                placeholder="0"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1">Description</label>
              <textarea
                rows="3"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all resize-none"
                placeholder="Briefly describe what this topic covers..."
              ></textarea>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-brand-blue text-white font-black py-4 rounded-xl shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 cursor-pointer"
              >
                {submitting ? 'Processing...' : editingId ? 'Update Subject' : 'Create Subject'}
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
          </div>
        </form>
        {message && (
          <p className={`mt-4 text-sm font-bold text-center p-3 rounded-xl ${message.startsWith('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {message}
          </p>
        )}
      </div>

      {/* Subject List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-gray-900">Existing Subjects ({subjects.length})</h2>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : subjects.length === 0 ? (
          <div className="bg-white p-16 text-center rounded-3xl border border-gray-100 shadow-sm">
            <span className="text-5xl block mb-4">📖</span>
            <p className="text-gray-500 font-bold">No subjects added yet. Start by adding one above!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <div key={subject._id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-black uppercase text-gray-400">Order: {subject.order}</span>
                    <h3 className="text-xl font-black text-brand-blue-dark">{subject.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(subject)} className="bg-blue-50 text-blue-600 p-2 rounded-lg hover:bg-blue-100" title="Edit">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </button>
                    <button onClick={() => handleDelete(subject._id, subject.title)} className="bg-red-50 text-red-600 p-2 rounded-lg hover:bg-red-100" title="Delete">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                </div>

                <p className="text-gray-500 text-sm line-clamp-2 mb-6">
                  {subject.description || 'No description provided.'}
                </p>

                <Link
                  to={`/subject-details/${subject._id}`}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-brand-blue-dark text-white rounded-xl font-black group-hover:bg-brand-blue transition-colors shadow-lg shadow-brand-blue/20"
                >
                  Manage Content 📚
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectsPage;
