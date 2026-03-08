import React from 'react';

const courses = [
  {
    id: 1,
    title: "UPSC CSE Foundation",
    description: "Comprehensive coverage of Prelims & Mains with dedicated mentorship.",
    duration: "12 Months",
    mode: "Offline / Live Online",
    price: "₹85,000",
    popular: true,
  },
  {
    id: 2,
    title: "Prelims Test Series",
    description: "Strictly aligned with the latest UPSC pattern. Includes All India Ranking.",
    duration: "3 Months",
    mode: "Online",
    price: "₹5,000",
    popular: false,
  },
  {
    id: 3,
    title: "Interview Guidance",
    description: "Mock interviews by former bureaucrats and experts.",
    duration: "1 Month",
    mode: "Offline (Prayagraj & ND)",
    price: "₹10,000",
    popular: false,
  }
];

function Courses() {
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
            <div key={course.id} className={`relative bg-white rounded-3xl shadow-xl border overflow-hidden hover:-translate-y-2 transform transition-all duration-300 flex flex-col group ${course.popular ? 'border-brand-gold shadow-brand-gold/20' : 'border-gray-200 hover:border-brand-blue shadow-brand-blue/5'}`}>
              
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
                
                {/* Linked straight to the Callback form, preventing dead buttons */}
                <a href="#enroll" className={`w-full py-4 text-center rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${course.popular ? 'bg-gradient-to-r from-brand-red to-brand-red-dark text-white shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 hover:-translate-y-0.5' : 'bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white shadow-md'}`}>
                  Enroll & Callback
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
