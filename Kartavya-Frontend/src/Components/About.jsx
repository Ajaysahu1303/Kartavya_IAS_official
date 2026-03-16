import React from 'react';
import { Link } from 'react-router-dom';
import academyImage from '../Assets/logo.png';

function About() {

  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative border-y border-brand-gold-light/50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-brand-blue) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10">
        {/* Images/Visuals Side */}
        <div className="relative flex justify-center lg:justify-start group">
          <div className="absolute top-4 -left-4 w-72 h-72 bg-brand-gold/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70 group-hover:opacity-100 transition duration-700"></div>
          <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-brand-blue/10 rounded-full mix-blend-multiply filter blur-2xl opacity-70 group-hover:opacity-100 transition duration-700"></div>

          <div className="relative bg-gradient-to-br from-brand-surface to-white p-3 rounded-3xl shadow-2xl shadow-brand-blue/10 border border-brand-gold-light w-full max-w-md transform group-hover:-translate-y-2 transition duration-500">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden bg-brand-gold-light/20 flex items-center justify-center p-10 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              {/* Use proper object-contain to display logo elegantly */}
              <img src={academyImage} alt="Kartavya IAS Academy" className="w-full h-full object-contain filter drop-shadow-2xl z-10 group-hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl shadow-brand-blue/10 p-5 border border-brand-gold-light flex items-center gap-4 animate-bounce hover:animate-none group-hover:scale-110 transition-transform">
              <div className="bg-brand-red/10 text-brand-red p-3 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              </div>
              <div>
                <h4 className="font-extrabold text-brand-blue-dark leading-tight">10+ Years</h4>
                <p className="text-xs font-bold text-brand-gold uppercase tracking-wider mt-0.5">Of Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className="lg:pl-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
            <h2 className="text-sm font-extrabold text-brand-blue tracking-widest uppercase">About Kartavya IAS</h2>
          </div>

          <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Guiding Aspirants to <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue">True Success</span>
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
            <span className="text-brand-red font-bold">Kartavya IAS</span> isn’t just a coaching institute—it’s an ecosystem of dedicated mentors, strategic learning, and disciplined preparation. We believe in nurturing raw potential and transforming it into administrative brilliance.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our methodology focuses on conceptual clarity and rigorous answer writing practice, laying a concrete foundation for both UPSC Prelims and Mains.
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-gold-light/30 transition-colors border border-transparent hover:border-brand-gold-light group">
              <div className="mt-1 bg-brand-blue/10 text-brand-blue p-2.5 rounded-xl shadow-inner group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">Expert Faculty</h4>
                <p className="text-gray-600 text-sm mt-1">Learn from distinguished educators with profound bureaucratic experience.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-gold-light/30 transition-colors border border-transparent hover:border-brand-gold-light group">
              <div className="mt-1 bg-brand-red/10 text-brand-red p-2.5 rounded-xl shadow-inner group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">Proven Methodology</h4>
                <p className="text-gray-600 text-sm mt-1">Our comprehensive curriculum focuses on conceptual clarity and exam readiness.</p>
              </div>
            </div>
          </div>

          <Link
            to="/about"
            className="inline-block bg-brand-blue text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-brand-blue/30 hover:bg-brand-blue-dark hover:-translate-y-1 hover:shadow-brand-blue/50 transition-all duration-300">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
