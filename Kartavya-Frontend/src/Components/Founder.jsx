import React from 'react';
import founderImage from '../Assets/Founder.png';
import { Link } from "react-router-dom";
function Founder() {
  return (
    <section id="founder" className="py-24 bg-[#001740] text-white overflow-hidden relative">
      {/* Background Ornaments based on Brand Gold and Red */}
      <div className="absolute top-0 right-0 -m-32 w-96 h-96 opacity-10 transform translate-x-16 -translate-y-16">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--color-brand-gold)" d="M47.7,-68.8C59.6,-57.8,65.6,-38.7,69.5,-19.9C73.4,-1.2,75.1,17.2,68.7,33.1C62.3,49,47.8,62.5,31.2,70.5C14.7,78.5,-3.9,81,-23,76.9C-42.1,72.7,-61.7,61.8,-73.2,45.4C-84.7,29.1,-88.2,7.3,-83.4,-11.6C-78.6,-30.5,-65.4,-46.6,-49.6,-57.2C-33.8,-67.8,-15.5,-73,2,-75.4C19.5,-77.8,35.8,-79.8,47.7,-68.8Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-brand-red/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">

        {/* Founder Portrait Section */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end lg:sticky lg:top-32 self-start">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold to-yellow-400 rounded-3xl transform rotate-3 group-hover:rotate-6 transition duration-500 opacity-80 shadow-2xl shadow-brand-gold/20"></div>
            <div className="relative bg-[#00205b] p-2 rounded-3xl border border-brand-blue-light/50 w-full max-w-sm transform group-hover:-translate-y-2 group-hover:rotate-0 transition duration-500 z-10 shadow-2xl">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-inner relative z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#001740]/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                {/* Real photo of the founder should replace this generic one */}
                <img
                  src={founderImage}
                  alt="Founder of Kartavya IAS"
                  className="w-full h-full object-cover object-top sepia-[0.3] group-hover:sepia-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Founder Name Tag */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 rounded-2xl px-6 py-4 shadow-2xl border-b-4 border-brand-red flex flex-col items-center min-w-[85%] transition-transform duration-500 group-hover:-translate-y-1 z-10">
                <span className="text-2xl font-black whitespace-nowrap text-brand-blue-dark mb-1">Dr.Kumar Mayank</span>
                <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-3">Founder & Director</span>
                <a href="https://www.instagram.com/kartavyaias__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold hover:shadow-lg hover:scale-105 transition-all" title="Follow on Instagram">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  Follow on Instagram
                </a>
              </div>
            </div>

            <div className="absolute -left-12 -top-12 z-0 animate-pulse">
              <svg className="w-24 h-24 text-brand-gold/30" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" /></svg>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:col-span-7 pt-12 md:pt-0">
          <h2 className="text-sm font-extrabold text-brand-gold tracking-widest uppercase mb-3 flex items-center gap-3">
            <span className="w-12 h-[3px] bg-brand-gold rounded-full"></span>
            Visionary Leadership
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">Visionary</span> Founder
          </h3>
          <p className="text-brand-surface/80 text-lg leading-relaxed mb-6 font-medium">
            Guided by decades of academic excellence and profound societal commitment, Dr. Kumar Mayank has established <span className="text-brand-gold font-bold">Kartavya IAS</span> as a premier institution for UPSC preparation. His leadership is not merely driven by results, but by an unwavering vision of nation-building.
          </p>
          <div className="bg-brand-red/10 border-l-4 border-brand-red p-5 rounded-r-xl mb-8 backdrop-blur-sm">
            <p className="text-white text-sm md:text-base leading-relaxed font-light italic">
              "Beyond producing top bureaucrats, Dr. Mayank actively runs the <Link to="/about" className="text-brand-gold font-bold hover:underline">Kartavya Educational Society</Link>, a pan-India NGO dedicated to providing free education to orphans, underprivileged children, and ambitious daughters, proving that his educational mission extends far beyond the traditional classroom."
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {/* Doctorate Highlight */}
            <div className="bg-[#002670]/40 backdrop-blur-md border border-brand-blue/50 rounded-2xl p-6 hover:bg-[#0033a0]/80 hover:border-brand-gold/50 transition duration-300 group shadow-lg">
              <div className="w-14 h-14 bg-brand-red/20 text-brand-red-light rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300 group-hover:bg-brand-red group-hover:text-white shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">Doctorate in Economics</h4>
              <p className="text-brand-surface/60 text-sm leading-relaxed">Deep command over India’s economic framework, directly aligning with core UPSC civil service subjects.</p>
            </div>

            {/* Awards Highlight */}
            <div className="bg-[#002670]/40 backdrop-blur-md border border-brand-blue/50 rounded-2xl p-6 hover:bg-[#0033a0]/80 hover:border-brand-gold/50 transition duration-300 group shadow-lg">
              <div className="w-14 h-14 bg-brand-gold/20 text-brand-gold rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300 group-hover:bg-brand-gold group-hover:text-[#001740] shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">Renowned Awardee</h4>
              <p className="text-brand-surface/60 text-sm leading-relaxed">Recognized repeatedly with prestigious national awards for exceptional contribution to education.</p>
            </div>
          </div>

          {/* Branches Highlight */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* New Delhi Main Br anch */}
            <div className="bg-gradient-to-br from-brand-red to-brand-red-dark rounded-2xl p-6 border border-brand-red-light shadow-2xl shadow-brand-red/20 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition duration-300">
              <div className="absolute top-0 right-0 bg-black/20 backdrop-blur-md text-white border-b border-l border-white/20 text-xs font-bold px-4 py-1.5 rounded-bl-2xl">Main Branch</div>
              <div className="relative z-10">
                <h4 className="text-2xl font-black text-white mb-1 mt-3 group-hover:text-brand-gold-light transition-colors">New Delhi</h4>
                <p className="text-brand-surface/90 text-sm mb-6 leading-relaxed">The historic core and main hub of our civil services preparation excellence.</p>
              </div>
              <button className="bg-white text-brand-red-dark hover:bg-brand-surface font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition w-full shadow-lg hover:shadow-xl relative z-10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Visit Main Branch
              </button>
            </div>

            {/* Prayagraj Branch */}
            <div className="bg-gradient-to-br from-[#004eb8] to-[#0033a0] rounded-2xl p-6 border border-brand-blue-light/50 shadow-2xl shadow-brand-blue/20 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition duration-300">
              <div className="absolute top-0 right-0 bg-black/20 text-brand-gold-light border-b border-l border-white/10 text-xs font-bold px-4 py-1.5 rounded-bl-2xl backdrop-blur-md">New Hub</div>
              <div className="relative z-10">
                <h4 className="text-2xl font-black text-white mb-1 mt-3 group-hover:text-brand-gold-light transition-colors">Prayagraj</h4>
                <p className="text-brand-surface/80 text-sm mb-6 leading-relaxed">Operating right from the heart of India's current UPSC Hub!</p>
              </div>
              <button className="bg-brand-gold hover:bg-yellow-400 text-[#001740] font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition w-full shadow-lg hover:shadow-xl relative z-10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                View Details
              </button>
            </div>
          </div>
          <Link to="/about" className="bg-white text-brand-blue-dark border-2 border-brand-blue/10 font-bold py-3.5 px-8 rounded-full shadow-md hover:bg-brand-blue hover:text-white hover:border-brand-blue hover:-translate-y-1 transform transition duration-300 mt-10 flex items-center justify-center gap-2 group">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Founder;
