import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* ---------------- STATIC COURSES ---------------- */
const API_BASE = import.meta.env.VITE_API_URL;
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

    fetch("http://localhost:5000/api/courses")
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

    </section>
  );
}

export default Courses;
