import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* ---------------- STATIC COURSES ---------------- */
const API_BASE =
  import.meta.env.VITE_API_URL || "https://kartavya-ias-official.vercel.app";
const staticCourses = [
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
      "economics & Agriculture",
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
      "One Time Payment: ₹10,000"
    ],
    features: "Video Recording of Mock, Immediate Feedback, Body Language Training"
  }
];

function Courses({ isHomePage }) {

  /* ---------------- STATE ---------------- */

  const [dbCourses, setDbCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadCourse, setLeadCourse] = useState(null);
  const [leadData, setLeadData] = useState({ name: '', mobile: '', email: '' });

  /* ---------------- FETCH DB COURSES ---------------- */

  useEffect(() => {

    fetch(`${API_BASE}/api/courses`)
      .then(res => res.json())
      .then(data => {

        if (data.success && Array.isArray(data.data)) {
          setDbCourses(data.data);
        }

      })
      .catch(() => {

        console.log("Backend failed → static courses only");

      });

  }, []);

  /* ---------------- MERGE COURSES ---------------- */

  const mergedCourses = [
    ...staticCourses,
    ...dbCourses
  ];

  const displayedCourses = isHomePage
    ? mergedCourses.slice(0, 3)
    : mergedCourses;

  /* ---------------- ENROLL ---------------- */

  const handleEnrollClick = (course) => {
    setLeadCourse(course);
    setShowLeadForm(true);
  };

  /* ---------------- WHATSAPP FORM ---------------- */

  const handleLeadSubmit = (e) => {

    e.preventDefault();

    if (!leadData.name || !leadData.mobile) return;

    const message = `Hello, I am interested in enrolling in the ${leadCourse.title} course.

Name: ${leadData.name}
Mobile: ${leadData.mobile}
${leadData.email ? `Email: ${leadData.email}` : ''}

Please share admission details.`;

    window.open(
      `https://wa.me/9450066558?text=${encodeURIComponent(message)}`,
      '_blank'
    );

    setShowLeadForm(false);
    setLeadData({ name: '', mobile: '', email: '' });
  };

  /* ---------------- UI ---------------- */

  return (

    <section id="courses" className="py-24 bg-brand-surface relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
            <h2 className="text-sm font-extrabold text-brand-blue tracking-widest uppercase">Our Programs</h2>
            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
          </div>

          <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Transform Your <span className="text-brand-red">Preparation</span>
          </h3>

          <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg font-medium">
            Choose from our meticulously designed courses to accelerate your UPSC journey.
          </p>

        </div>

        {/* COURSE GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {displayedCourses.map((course) => (

            <div
              key={course._id || course.id}
              className={`relative bg-white rounded-3xl shadow-xl border overflow-hidden hover:-translate-y-2 transform transition-all duration-300 flex flex-col group ${course.popular ? 'border-brand-gold shadow-brand-gold/20' : 'border-gray-200 hover:border-brand-blue shadow-brand-blue/5'}`}
            >

              <div className={`h-2 w-full ${course.popular ? 'bg-gradient-to-r from-brand-gold to-yellow-400' : 'bg-gradient-to-r from-brand-blue to-brand-blue-dark'}`}></div>

              {course.popular && (

                <div className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="p-8 flex-1 flex flex-col">

                <h4 className="text-2xl font-black text-brand-blue-dark mb-4">
                  {course.title}
                </h4>

                <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-1 font-medium">
                  {course.description}
                </p>

                <div className="space-y-4 mb-8">

                  <div className="flex items-center text-sm font-bold text-gray-700">
                    ⏱ {course.duration || "Duration"}
                  </div>

                  <div className="flex items-center text-sm font-bold text-gray-700">
                    📍 {course.mode || "Online"}
                  </div>

                </div>

                <div className="flex items-end gap-2 mb-8 border-b border-gray-100 pb-6">

                  <span className="text-4xl font-extrabold text-gray-900">
                    {course.price || "Contact"}
                  </span>

                </div>

                <div className="flex flex-col gap-3 mt-auto">

                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="w-full py-3 rounded-xl font-bold bg-gray-100 hover:bg-gray-200"

                  >

                    View Full Details </button>

                  <button
                    onClick={() => handleEnrollClick(course)}
                    className="w-full py-4 rounded-xl font-bold bg-brand-blue text-white hover:bg-brand-blue-dark"

                  >

                    Enroll Now </button>

                </div>

              </div>
            </div>

          ))}

        </div>

        {isHomePage && (

          <div className="mt-14 flex justify-center">
            <Link
              to="/courses"
              className="bg-brand-blue text-white font-extrabold py-4 px-10 rounded-full shadow-xl"
            >
              View All Courses
            </Link>
          </div>
        )}

      </div>

      {/* MODAL: VIEW DETAILS */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeIn relative">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-1 bg-brand-gold rounded-full"></span>
                <h3 className="text-brand-blue font-bold tracking-widest uppercase text-xs">Course Overview</h3>
              </div>

              <h2 className="text-3xl font-black text-gray-900 mb-4">{selectedCourse.title}</h2>
              <p className="text-gray-600 mb-8 font-medium leading-relaxed">{selectedCourse.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-2xl">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Duration</span>
                  <p className="font-bold text-gray-900">{selectedCourse.duration}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Mode</span>
                  <p className="font-bold text-gray-900">{selectedCourse.mode}</p>
                </div>
              </div>

              {selectedCourse.syllabus && selectedCourse.syllabus.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
                    <span className="text-brand-red">📚</span> Curriculum Highlights
                  </h4>
                  <ul className="space-y-3">
                    {selectedCourse.syllabus.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-gray-700 font-medium text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedCourse.feeStructure && selectedCourse.feeStructure.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
                    <span className="text-brand-gold">💰</span> Fee Structure
                  </h4>
                  <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    {selectedCourse.feeStructure.map((fee, i) => (
                      <div key={i} className={`flex justify-between items-center py-3 ${i !== selectedCourse.feeStructure.length - 1 ? 'border-b border-gray-100' : ''}`}>
                        <span className="text-gray-600 font-medium text-sm">{fee.split(':')[0]}</span>
                        <span className="font-bold text-brand-blue-dark">{fee.split(':')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-gray-100 flex gap-4">
                <button
                  onClick={() => { setSelectedCourse(null); handleEnrollClick(selectedCourse); }}
                  className="flex-1 bg-brand-blue text-white py-4 rounded-xl font-bold hover:-translate-y-1 transition-transform shadow-lg shadow-brand-blue/30"
                >
                  Proceed to Enroll
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: LEAD ENROLLMENT FORM */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl animate-fadeIn relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue to-brand-gold"></div>

            <button
              onClick={() => setShowLeadForm(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase rounded-lg mb-4">Enrollment Request</span>
              <h2 className="text-2xl font-black text-gray-900 mb-2">Connect With Us</h2>
              <p className="text-sm text-gray-500 mb-6 font-medium">To proceed with enrollment for <span className="text-brand-blue font-bold">{leadCourse?.title}</span>, drop your details below.</p>

              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase mb-1 block">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={leadData.name}
                    onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                    className="w-full bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium"
                    placeholder="E.g. Ajay Sahu"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase mb-1 block">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={leadData.mobile}
                    onChange={(e) => setLeadData({ ...leadData, mobile: e.target.value })}
                    className="w-full bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium"
                    placeholder="+91..."
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase mb-1 block">Email Address (Optional)</label>
                  <input
                    type="email"
                    value={leadData.email}
                    onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                    className="w-full bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium"
                    placeholder="ajay@example.com"
                  />
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowLeadForm(false)}
                    className="flex-1 py-4 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                    Send on WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Courses;
