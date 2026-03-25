import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  fetchMaterialsApi, 
  addMaterialApi, 
  deleteMaterialApi,
  fetchQuizzesApi,
  addQuizApi,
  deleteQuizApi,
  uploadFileApi,
  fetchSubjectByIdApi
} from '../api/videoService';

const SubjectDetailsPage = ({ adminToken }) => {
  const { subjectId } = useParams();
  const [subject, setSubject] = useState(null);
  const [materials, setMaterials] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Materials state
  const [materialForm, setMaterialForm] = useState({ title: '', file: null });
  const [submittingMaterial, setSubmittingMaterial] = useState(false);
  
  // Quiz state
  const initialQuizState = { title: '', questions: [{ questionText: '', options: ['', '', '', ''], correctAnswer: '', explanation: '' }] };
  const [quizForm, setQuizForm] = useState(initialQuizState);
  const [submittingQuiz, setSubmittingQuiz] = useState(false);
  
  const [activeTab, setActiveTab] = useState('materials');

  const fetchData = async () => {
    setLoading(true);
    try {
      const subRes = await fetchSubjectByIdApi(subjectId);
      if (subRes.success) setSubject(subRes.data);
      
      const materialsRes = await fetchMaterialsApi(subjectId);
      if (materialsRes.success) setMaterials(materialsRes.data);
      
      const quizzesRes = await fetchQuizzesApi(subjectId);
      if (quizzesRes.success) setQuizzes(quizzesRes.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [subjectId]);

  const handleMaterialSubmit = async (e) => {
    e.preventDefault();
    if (!materialForm.file) return alert('Please select a file');
    setSubmittingMaterial(true);
    try {
      const uploadRes = await uploadFileApi(materialForm.file);
      if (uploadRes.success) {
        const res = await addMaterialApi({
          subject: subjectId,
          title: materialForm.title,
          url: uploadRes.url
        }, adminToken);
        if (res.success) {
          setMaterialForm({ title: '', file: null });
          fetchData();
        }
      }
    } catch (error) {
      alert(error.message);
    }
    setSubmittingMaterial(false);
  };

  const handleQuizSubmit = async (e) => {
    e.preventDefault();
    setSubmittingQuiz(true);
    try {
      const res = await addQuizApi({ ...quizForm, subject: subjectId }, adminToken);
      if (res.success) {
        setQuizForm(initialQuizState);
        fetchData();
        setActiveTab('list-quizzes');
      }
    } catch (error) {
      alert(error.message);
    }
    setSubmittingQuiz(false);
  };

  const addQuestion = () => {
    setQuizForm({
      ...quizForm,
      questions: [...quizForm.questions, { questionText: '', options: ['', '', '', ''], correctAnswer: '', explanation: '' }]
    });
  };

  const updateQuestion = (index, field, value) => {
    const updatedQuestions = [...quizForm.questions];
    updatedQuestions[index][field] = value;
    setQuizForm({ ...quizForm, questions: updatedQuestions });
  };

  const updateOption = (qIndex, oIndex, value) => {
    const updatedQuestions = [...quizForm.questions];
    updatedQuestions[qIndex].options[oIndex] = value;
    setQuizForm({ ...quizForm, questions: updatedQuestions });
  };

  return (
    <div className="space-y-10 animate-fadeIn bg-gray-50 min-h-screen">
      <div>
        <Link to={`/courses`} className="text-brand-blue hover:underline text-sm font-bold flex items-center gap-1 mb-2">
            ← Back to Courses
        </Link>
        <h1 className="text-3xl font-black text-gray-900">
          {subject ? `${subject.title}: Content` : 'Subject Content Management'}
        </h1>
        <p className="text-gray-500 mt-1 font-medium">Add PDFs and Quizzes to your topics.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('materials')}
          className={`pb-4 px-4 font-black transition-all ${activeTab === 'materials' ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-400'}`}
        >
          PDF Materials
        </button>
        <button 
          onClick={() => setActiveTab('quizzes')}
          className={`pb-4 px-4 font-black transition-all ${activeTab === 'quizzes' ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-400'}`}
        >
          Create Quiz
        </button>
        <button 
          onClick={() => setActiveTab('list-quizzes')}
          className={`pb-4 px-4 font-black transition-all ${activeTab === 'list-quizzes' ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-400'}`}
        >
          View Quizzes
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
        {activeTab === 'materials' && (
          <div className="space-y-8">
            <h2 className="text-xl font-black text-gray-800">Upload PDF Material</h2>
            <form onSubmit={handleMaterialSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-bold text-gray-700 block mb-1">Title *</label>
                <input
                  type="text"
                  required
                  value={materialForm.title}
                  onChange={(e) => setMaterialForm({ ...materialForm, title: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                  placeholder="e.g. Ancient History Notes PDF"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-gray-700 block mb-1">Select PDF File *</label>
                <input
                  type="file"
                  required
                  accept=".pdf"
                  onChange={(e) => setMaterialForm({ ...materialForm, file: e.target.files[0] })}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={submittingMaterial}
                className="md:col-span-2 bg-brand-blue text-white font-black py-4 rounded-xl shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50"
              >
                {submittingMaterial ? 'Uploading...' : 'Upload PDF'}
              </button>
            </form>

            <div className="mt-10">
              <h3 className="text-lg font-black text-gray-800 mb-4">Uploaded PDFs ({materials.length})</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {materials.map((m) => (
                  <div key={m._id} className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <span className="text-2xl">📄</span>
                      <p className="font-bold text-gray-700 truncate">{m.title}</p>
                    </div>
                    <button 
                      onClick={async () => {
                        if(confirm('Delete this material?')) {
                          await deleteMaterialApi(m._id, adminToken);
                          fetchData();
                        }
                      }}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-lg"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'quizzes' && (
          <div className="space-y-8">
            <h2 className="text-xl font-black text-gray-800">Create New Quiz</h2>
            <form onSubmit={handleQuizSubmit} className="space-y-8">
              <div>
                <label className="text-sm font-bold text-gray-700 block mb-1">Quiz Title *</label>
                <input
                  type="text"
                  required
                  value={quizForm.title}
                  onChange={(e) => setQuizForm({ ...quizForm, title: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                  placeholder="e.g. Modern India Mock Quiz 1"
                />
              </div>

              <div className="space-y-10">
                {quizForm.questions.map((q, qIndex) => (
                  <div key={qIndex} className="p-6 bg-brand-surface border border-gray-200 rounded-3xl space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-black text-brand-blue">Question {qIndex + 1}</h4>
                      {quizForm.questions.length > 1 && (
                        <button 
                          type="button" 
                          onClick={() => {
                            const updated = [...quizForm.questions];
                            updated.splice(qIndex, 1);
                            setQuizForm({ ...quizForm, questions: updated });
                          }}
                          className="text-red-500 text-sm font-bold"
                        >
                          Remove Question
                        </button>
                      )}
                    </div>
                    
                    <div>
                      <label className="text-xs font-bold text-gray-500 block mb-1 uppercase">Question Text</label>
                      <textarea
                        required
                        value={q.questionText}
                        onChange={(e) => updateQuestion(qIndex, 'questionText', e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none"
                        placeholder="What was the principal cause of...?"
                      ></textarea>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {q.options.map((opt, oIndex) => (
                        <div key={oIndex}>
                          <label className="text-xs font-bold text-gray-500 block mb-1 uppercase">Option {String.fromCharCode(65 + oIndex)}</label>
                          <input
                            type="text"
                            required
                            value={opt}
                            onChange={(e) => updateOption(qIndex, oIndex, e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none"
                            placeholder={`Option ${oIndex + 1}`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-gray-500 block mb-1 uppercase">Correct Answer *</label>
                        <select 
                          required
                          value={q.correctAnswer}
                          onChange={(e) => updateQuestion(qIndex, 'correctAnswer', e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none font-bold"
                        >
                          <option value="">Select Correct Option</option>
                          {q.options.map((opt, oIndex) => (
                             <option key={oIndex} value={opt}>{String.fromCharCode(65 + oIndex)}: {opt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-500 block mb-1 uppercase">Explanation (Optional)</label>
                        <textarea
                          value={q.explanation}
                          onChange={(e) => updateQuestion(qIndex, 'explanation', e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none"
                          placeholder="Why this answer is correct..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <button
                  type="button"
                  onClick={addQuestion}
                  className="flex-1 bg-white text-brand-blue border-2 border-brand-blue font-black py-4 rounded-xl hover:bg-brand-blue/5 transition-all"
                >
                  + Add Another Question
                </button>
                <button
                  type="submit"
                  disabled={submittingQuiz}
                  className="flex-1 bg-brand-blue text-white font-black py-4 rounded-xl shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50"
                >
                  {submittingQuiz ? 'Processing...' : 'Save Complete Quiz'}
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'list-quizzes' && (
          <div className="space-y-6">
            <h2 className="text-xl font-black text-gray-800">Manage Quizzes ({quizzes.length})</h2>
            <div className="grid gap-4">
              {quizzes.length === 0 ? (
                 <p className="text-gray-500 text-center py-10">No quizzes created yet.</p>
              ) : (
                quizzes.map((q) => (
                  <div key={q._id} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex justify-between items-center hover:bg-white transition-all shadow-sm">
                    <div>
                      <h3 className="text-lg font-black text-brand-blue-dark">{q.title}</h3>
                      <p className="text-sm font-bold text-gray-500 mt-1">{q.questions.length} Questions</p>
                    </div>
                    <button 
                      onClick={async () => {
                        if(confirm('Delete this quiz?')) {
                          await deleteQuizApi(q._id, adminToken);
                          fetchData();
                        }
                      }}
                      className="bg-red-50 text-red-500 p-4 rounded-2xl hover:bg-red-100 transition-colors"
                    >
                      🗑️
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectDetailsPage;
