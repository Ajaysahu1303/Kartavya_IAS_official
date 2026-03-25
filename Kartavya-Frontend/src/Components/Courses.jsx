import React, { useState, useEffect } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const localCourses = [
  {
    id: 1,
    title: "UPSC CSE Foundation",
    description: "Comprehensive coverage of Prelims & Mains with dedicated mentorship.",
    duration: "12 Months",
    mode: "Offline / Live Online",
    price: "₹85,000",
    popular: true,
    syllabus: [
      "History, Art & Culture",
      "Geography & Environment",
      "Indian Polity & Governance",
      "Economy & Agriculture",
      "Science & Tech, Current Affairs"
    ],
    feeStructure: [
      "Registration: ₹5,000",
      "1st Installment: ₹40,000",
      "2nd Installment: ₹40,000"
    ],
    features: "Daily Answer Writing, Personal Mentorship, Study Material"
  },
  {
    id: 2,
    title: "Prelims Test Series",
    description: "Strictly aligned with the latest UPSC pattern. Includes All India Ranking.",
    duration: "3 Months",
    mode: "Online",
    price: "₹5,000",
    popular: false,
    syllabus: [
      "14 Sectional Tests",
      "6 Full Length GS Tests",
      "4 Full Length CSAT Tests"
    ],
    feeStructure: [
      "One Time Payment: ₹5,000"
    ],
    features: "Detailed Solutions, All India Ranking, Performance Analytics"
  },
  {
    id: 3,
    title: "Interview Guidance",
    description: "Mock interviews by former bureaucrats and experts.",
    duration: "1 Month",
    mode: "Offline (Prayagraj & ND)",
    price: "₹10,000",
    popular: false,
    syllabus: [
      "DAF Analysis Session",
      "2 Mock Interviews with Panel",
      "One-on-One Mentorship"
    ],
    feeStructure: [
      "One Time Payment: ₹10,000 (Free for Mains Qualifiers)"
    ],
    features: "Video Recording of Mock, Immediate Feedback, Body Language Training"
  },
  {
    id: 4,
    title: "Mains Answer Writing",
    description: "Daily answer practice with evaluation by experts to boost your Mains score.",
    duration: "4 Months",
    mode: "Online / Offline",
    price: "₹12,000",
    popular: false,
    syllabus: [
      "GS 1, 2, 3, 4 Comprehensive Coverage",
      "Essay Writing Techniques",
      "Current Affairs Integration"
    ],
    feeStructure: [
      "One Time Payment: ₹12,000"
    ],
    features: "Detailed Evaluation within 24 hours, Model Answers, One-on-one Feedback Sessions"
  },
  {
    id: 5,
    title: "Optional Subject Experts",
    description: "Specialized guidance for Geography, PSIR, Sociology, and History optionals.",
    duration: "5 Months",
    mode: "Offline / Live Online",
    price: "₹35,000",
    popular: false,
    syllabus: [
      "Paper 1 & Paper 2 Full Coverage",
      "Previous Year Question Analysis",
      "4 Sectional and 2 Full Length Tests"
    ],
    feeStructure: [
      "Registration: ₹5,000",
      "Remaining Balance: ₹30,000"
    ],
    features: "Printed Notes, Faculty Mentorship, High Scoring Strategies"
  }
];

function Courses() {
  const [courses, setCourses] = useState(localCourses);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // State for WhatsApp Lead Form
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadCourse, setLeadCourse] = useState(null);
  const [leadData, setLeadData] = useState({ name: '', mobile: '', email: '' });

  const handleEnrollClick = (course) => {
    setLeadCourse(course);
    setShowLeadForm(true);
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (!leadData.name || !leadData.mobile) return;

    const message = `Hello, I am interested in enrolling in the ${leadCourse.title} course.\n\nMy details are:\nName: ${leadData.name}\nMobile: ${leadData.mobile}${leadData.email ? `\nEmail: ${leadData.email}` : ''}\n\nPlease let me know the admission process.`;

    // Close modals
    setShowLeadForm(false);
    setSelectedCourse(null);
    setLeadData({ name: '', mobile: '', email: '' });

    // Clear hash so it doesn't immediately reopen
    window.history.replaceState(null, '', window.location.pathname);

    // Redirect to WhatsApp
    window.open(`https://wa.me/9450066558?text=${encodeURIComponent(message)}`, '_blank');
  };

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/api/courses`);
        const data = await res.json();
        if (data.success && data.data && data.data.length > 0) {
          setCourses(data.data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
      setLoading(false);
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#course-')) {
        const courseId = hash.replace('#course-', '');
        const matchingCourse = courses.find((c) => (c.id?.toString() === courseId || c._id === courseId));
        if (matchingCourse) {
          setSelectedCourse(matchingCourse);
        }
      }
    };

    handleHashChange(); // Check on initial load
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [courses]);

  const closeModal = () => {
    setSelectedCourse(null);
    window.history.replaceState(null, '', '#courses');
  };

  return (
    <section id="courses" className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full mix-blend-multiply filter blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full mix-blend-multiply filter blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
            <h2 className="text-sm font-extrabold text-brand-blue tracking-widest uppercase">Our Programs</h2>
            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue drop-shadow-sm">Preparation</span>
          </h3>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg font-medium">
            Choose from our meticulously designed courses to accelerate your journey to clearing the UPSC Civil Services Examination.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course._id || course.id} id={`course-${course._id || course.id}`} className={`relative bg-white rounded-3xl shadow-xl border overflow-hidden hover:-translate-y-2 transform transition-all duration-300 flex flex-col group ${course.popular ? 'border-brand-gold shadow-brand-gold/20' : 'border-gray-200 hover:border-brand-blue shadow-brand-blue/5'}`}>

              {/* Card Header Gradient */}
              <div className={`h-2 w-full ${course.popular ? 'bg-gradient-to-r from-brand-gold to-yellow-400' : 'bg-gradient-to-r from-brand-blue to-brand-blue-dark'}`}></div>

              {course.popular && (
                <div className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-brand-red/30 animate-pulse">
                  Most Popular
                </div>
              )}

              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-black text-brand-blue-dark mb-4 group-hover:text-brand-red transition-colors">{course.title}</h4>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-1 font-medium">
                  {course.description}
                </p>

                <div className="space-y-4 mb-8 bg-brand-surface/50 p-5 rounded-2xl border border-gray-100">
                  <div className="flex items-center text-sm font-bold text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                    </div>
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm font-bold text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                    </div>
                    {course.mode}
                  </div>
                </div>

                <div className="flex items-end gap-2 mb-8 border-b border-gray-100 pb-6">
                  <span className="text-4xl font-extrabold text-gray-900 tracking-tight">{course.price}</span>
                  <span className="text-gray-500 font-bold mb-1 uppercase tracking-wider text-xs">/ Course</span>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="w-full py-3 text-center rounded-xl font-bold bg-gray-100 text-brand-blue-dark hover:bg-gray-200 transition-colors"
                  >
                    View Full Details
                  </button>
                  <button
                    onClick={() => handleEnrollClick(course)}
                    className={`w-full py-4 text-center rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${course.popular ? 'bg-gradient-to-r from-brand-red to-brand-red-dark text-white shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 hover:-translate-y-0.5' : 'bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white shadow-md'}`}>
                    Enroll Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden mt-10 mb-10 transform scale-100 transition-transform">

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark p-6 flex justify-between items-center sticky top-0 z-10 shadow-md">
              <div>
                <h2 className="text-2xl font-black text-white">{selectedCourse.title}</h2>
                <div className="flex gap-4 mt-2 text-brand-gold-light text-sm font-bold">
                  <span>⏱ {selectedCourse.duration}</span>
                  <span>📍 {selectedCourse.mode}</span>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-white hover:text-brand-red transition-colors bg-white/10 rounded-full p-2 self-start"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 md:p-10 max-h-[70vh] overflow-y-auto text-gray-700 bg-brand-surface">

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-gold-light/50 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Total Fee</h3>
                  <p className="text-4xl font-extrabold text-brand-blue-dark">{selectedCourse.price}</p>
                </div>
                <button
                  onClick={() => handleEnrollClick(selectedCourse)}
                  className="bg-brand-red text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-brand-red/50 hover:-translate-y-1 transition-all"
                >
                  Proceed to Enroll on WhatsApp
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-blue-dark mb-4 border-b-2 border-brand-gold inline-block pb-1">Syllabus Covered</h3>
                  <ul className="space-y-3">
                    {selectedCourse.syllabus.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                        <div className="mt-0.5 text-brand-gold flex-shrink-0">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-blue-dark mb-4 border-b-2 border-brand-gold inline-block pb-1">Fee Structure</h3>
                  <ul className="space-y-3">
                    {selectedCourse.feeStructure.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                        <div className="mt-0.5 text-brand-blue flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


              <div className="bg-[#001740] rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden mt-10">
                <div className="absolute inset-0 bg-brand-gold/10 pointer-events-none"></div>
                <h3 className="text-lg font-bold text-brand-gold-light mb-2 relative z-10">Key Features</h3>
                <p className="text-lg font-medium relative z-10">{selectedCourse.features}</p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Lead Form Modal */}
      {showLeadForm && leadCourse && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden transform scale-100 transition-transform p-8">
            <button
              onClick={() => setShowLeadForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-brand-red transition-colors bg-gray-100 rounded-full p-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <h3 className="text-2xl font-black text-brand-blue-dark mb-2">Almost there!</h3>
            <p className="text-gray-500 text-sm mb-6">Please provide your details before we connect you with our counselors on WhatsApp regarding the <span className="font-bold text-brand-red">{leadCourse.title}</span>.</p>

            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={leadData.name}
                  onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#25d366] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  value={leadData.mobile}
                  onChange={(e) => setLeadData({ ...leadData, mobile: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#25d366] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Your WhatsApp number"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1">Email Address (Optional)</label>
                <input
                  type="email"
                  value={leadData.email}
                  onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#25d366] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-[#25d366] hover:bg-[#128c7e] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.996 2C6.478 2 2 6.478 2 11.996c0 1.764.462 3.483 1.34 5L2 22l5.122-1.34c1.458.825 3.106 1.296 4.874 1.296C17.525 21.956 22 17.514 22 11.996 22 6.48 17.525 2 11.996 2zm0 18.318c-1.487 0-2.943-.385-4.223-1.111l-.304-.173-3.136.824.839-3.06-.19-.313A8.254 8.254 0 013.682 12c0-4.593 3.738-8.332 8.332-8.332 4.594 0 8.332 3.738 8.332 8.332s-3.738 8.332-8.332 8.332z"></path></svg>
                Continue to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Courses;
