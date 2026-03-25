import React, { useState, useEffect } from 'react';
import QuizPlayer from './QuizPlayer';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const CourseContent = ({ courseId }) => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [subjectDetails, setSubjectDetails] = useState({}); // { subjectId: { materials, quizzes } }
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/api/subjects/course/${courseId}`);
        const data = await res.json();
        if (data.success) {
          setSubjects(data.data);
        }
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
      setLoading(false);
    };

    if (courseId) fetchSubjects();
  }, [courseId]);

  const toggleSubject = async (subjectId) => {
    if (expandedSubject === subjectId) {
      setExpandedSubject(null);
      return;
    }

    setExpandedSubject(subjectId);

    // Fetch details if not already fetched
    if (!subjectDetails[subjectId]) {
      try {
        const [matRes, quizRes] = await Promise.all([
          fetch(`${API_BASE}/api/materials/subject/${subjectId}`).then(r => r.json()),
          fetch(`${API_BASE}/api/quizzes/subject/${subjectId}`).then(r => r.json())
        ]);

        setSubjectDetails(prev => ({
          ...prev,
          [subjectId]: {
            materials: matRes.success ? matRes.data : [],
            quizzes: quizRes.success ? quizRes.data : []
          }
        }));
      } catch (error) {
        console.error("Error fetching subject details:", error);
      }
    }
  };

  if (loading) return <div className="text-center py-4">Loading course content...</div>;
  if (subjects.length === 0) return null;

  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold text-brand-blue-dark mb-4 border-b-2 border-brand-gold inline-block pb-1">
        Course Curriculum & Resources
      </h3>
      <div className="space-y-4">
        {subjects.map((subject) => (
          <div key={subject._id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              onClick={() => toggleSubject(subject._id)}
              className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors"
            >
              <div>
                <h4 className="font-black text-gray-800">{subject.title}</h4>
                <p className="text-xs text-gray-500 font-bold uppercase mt-1">{subject.description || 'No description'}</p>
              </div>
              <span className={`transform transition-transform duration-300 ${expandedSubject === subject._id ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {expandedSubject === subject._id && (
              <div className="p-5 border-t border-gray-50 bg-brand-surface/30 animate-fadeIn">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Materials */}
                  <div>
                    <h5 className="text-xs font-black text-brand-blue uppercase mb-3 flex items-center gap-2">
                       <span>📄</span> PDF Materials
                    </h5>
                    <div className="space-y-2">
                      {subjectDetails[subject._id]?.materials?.length > 0 ? (
                        subjectDetails[subject._id].materials.map((m) => (
                          <a 
                            key={m._id} 
                            href={`${API_BASE}${m.url}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-100 text-sm font-bold text-gray-700 hover:border-brand-gold hover:text-brand-gold transition-all shadow-sm"
                          >
                            <span>📎</span> {m.title}
                          </a>
                        ))
                      ) : (
                        <p className="text-xs text-gray-400 font-bold italic">No PDFs available</p>
                      )}
                    </div>
                  </div>

                  {/* Quizzes */}
                  <div>
                    <h5 className="text-xs font-black text-brand-red uppercase mb-3 flex items-center gap-2">
                       <span>🧠</span> Practice Quizzes
                    </h5>
                    <div className="space-y-2">
                      {subjectDetails[subject._id]?.quizzes?.length > 0 ? (
                        subjectDetails[subject._id].quizzes.map((q) => (
                          <button 
                            key={q._id} 
                            onClick={() => setSelectedQuiz(q)}
                            className="w-full flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 text-sm font-bold text-gray-700 hover:border-brand-red hover:text-brand-red transition-all shadow-sm"
                          >
                            <span className="flex items-center gap-2">
                              <span>📝</span> {q.title}
                            </span>
                            <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-md">{q.questions.length} Qs</span>
                          </button>
                        ))
                      ) : (
                        <p className="text-xs text-gray-400 font-bold italic">No quizzes available</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {selectedQuiz && (
        <QuizPlayer quiz={selectedQuiz} onBack={() => setSelectedQuiz(null)} />
      )}
    </div>
  );
};

export default CourseContent;
