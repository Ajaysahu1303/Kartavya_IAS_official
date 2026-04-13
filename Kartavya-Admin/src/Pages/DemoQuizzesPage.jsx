import React, { useState, useEffect } from 'react';
import {
  fetchDemoQuizzesApi,
  addDemoQuizApi,
  deleteDemoQuizApi,
  updateDemoQuizApi
} from '../api/videoService';

const DemoQuizzesPage = ({ adminToken }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = [
    'History', 'Geography', 'Polity', 'economics',
    'Science & Tech', 'Environment', 'Current Affairs',
    'Ethics', 'Essay', 'CSAT'
  ];

  const [formData, setFormData] = useState({
    question: '',
    options: ['', '', '', ''],
    correctOption: 0,
    explanation: '',
    category: 'History'
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const fetchQuizzes = async () => {
    setLoading(true);
    try {
      const data = await fetchDemoQuizzesApi(filterCategory === 'All' ? '' : filterCategory);
      if (data.success) {
        setQuizzes(data.data);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuizzes();
  }, [filterCategory]);

  const handleOptionChange = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData({ ...formData, options: newOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      let res;
      if (editingId) {
        res = await updateDemoQuizApi(editingId, formData, adminToken);
      } else {
        res = await addDemoQuizApi(formData, adminToken);
      }

      if (res.success) {
        setMessage(editingId ? '✅ Quiz Updated!' : '✅ Quiz Added!');
        setFormData({ question: '', options: ['', '', '', ''], correctOption: 0, explanation: '', category: 'History' });
        setEditingId(null);
        fetchQuizzes();
      } else {
        setMessage('❌ Error: ' + res.message);
      }
    } catch (error) {
      setMessage('❌ Error: ' + error.message);
    }
    setSubmitting(false);
  };

  const handleEdit = (quiz) => {
    setEditingId(quiz._id);
    setFormData({
      question: quiz.question,
      options: quiz.options,
      correctOption: quiz.correctOption,
      explanation: quiz.explanation || '',
      category: quiz.category
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this quiz question?')) return;
    try {
      const res = await deleteDemoQuizApi(id, adminToken);
      if (res.success) fetchQuizzes();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="space-y-10 animate-fadeIn bg-gray-50 min-h-screen pb-20">
      <div>
        <h1 className="text-3xl font-black text-gray-900">Practice Quiz Management</h1>
        <p className="text-gray-500 mt-1 font-medium">Manage daily practice questions for the Demo section.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
        <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center text-white text-sm">
            {editingId ? '📝' : '⚡'}
          </span>
          {editingId ? 'Edit Quiz Question' : 'Create New MCQ'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-gray-700 block mb-1">Question Text *</label>
                <textarea
                  required
                  rows="4"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                  placeholder="Enter the MCQ question here..."
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
              <div>
                <label className="text-sm font-bold text-gray-700 block mb-1">Explanation (Optional)</label>
                <textarea
                  rows="3"
                  value={formData.explanation}
                  onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                  placeholder="Explain why the correct answer is right..."
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold text-gray-700 block">Options & Correct Answer *</label>
              {formData.options.map((opt, idx) => (
                <div key={idx} className="flex gap-4 items-center bg-gray-50 p-3 rounded-2xl border border-gray-100">
                  <input
                    type="radio"
                    name="correctOption"
                    checked={formData.correctOption === idx}
                    onChange={() => setFormData({ ...formData, correctOption: idx })}
                    className="w-5 h-5 text-brand-blue accent-brand-blue cursor-pointer"
                  />
                  <input
                    type="text"
                    required
                    value={opt}
                    onChange={(e) => handleOptionChange(idx, e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-sm font-medium"
                    placeholder={`Option ${idx + 1}`}
                  />
                  {formData.correctOption === idx && (
                    <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-1 rounded-md uppercase">Correct</span>
                  )}
                </div>
              ))}

              <div className="pt-4 flex gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-brand-blue text-white font-black py-4 rounded-2xl shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50"
                >
                  {submitting ? 'Processing...' : editingId ? 'Update Question' : 'Publish Quiz'}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={() => { setEditingId(null); setFormData({ question: '', options: ['', '', '', ''], correctOption: 0, explanation: '', category: 'History' }); }}
                    className="px-6 py-4 bg-gray-100 text-gray-600 font-bold rounded-2xl"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>
          {message && (
            <div className={`p-4 rounded-xl text-sm font-bold ${message.startsWith('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {message}
            </div>
          )}
        </form>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-2xl font-black text-gray-900">Question Bank</h2>
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
        ) : quizzes.length === 0 ? (
          <div className="bg-white p-20 text-center rounded-3xl border border-gray-100 shadow-sm">
            <span className="text-5xl block mb-4">🧩</span>
            <p className="text-gray-500 font-bold">No quiz questions found for this category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {quizzes.map((q) => (
              <div key={q._id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase rounded-full">
                    {q.category}
                  </span>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(q)} className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 text-xs">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(q._id)} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 text-xs text-red-500">
                      Delete
                    </button>
                  </div>
                </div>
                <h3 className="text-md font-bold text-gray-800 mb-4">{q.question}</h3>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {q.options.map((opt, i) => (
                    <div key={i} className={`p-2 rounded-lg text-xs font-medium border ${q.correctOption === i ? 'border-green-200 bg-green-50 text-green-700' : 'border-gray-100 bg-gray-50 text-gray-500'}`}>
                      {i + 1}. {opt}
                    </div>
                  ))}
                </div>
                {q.explanation && (
                  <p className="text-[10px] text-gray-400 italic mt-auto pt-4 border-t border-gray-50 font-medium">
                    <span className="font-black text-gray-500 mr-1">EXPLANATION:</span> {q.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoQuizzesPage;
