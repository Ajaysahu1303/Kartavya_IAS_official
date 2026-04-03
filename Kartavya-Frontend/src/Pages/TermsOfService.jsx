import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-brand-surface selection:bg-brand-red/10 selection:text-brand-red">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-8">
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-1.5 bg-brand-red rounded-full"></span>
            <h1 className="text-sm font-black text-brand-blue tracking-[0.2em] uppercase">Terms & Conditions</h1>
            <span className="w-12 h-1.5 bg-brand-red rounded-full"></span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue">Service</span></h2>
          <p className="mt-8 text-gray-600 text-lg font-medium">Last Updated: March 30, 2026</p>
        </header>

        <section className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full filter blur-3xl -mr-32 -mt-32"></div>

          <div className="space-y-12 relative z-10">
            <div className="group">
              <h3 className="text-2xl font-black text-brand-blue-dark mb-4 flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300">
                <span className="w-3 h-3 bg-brand-gold rounded-full"></span>
                Acceptance of Terms
              </h3>
              <p className="text-gray-700 leading-loose font-medium text-lg">
                By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </div>

            <div className="group">
              <h3 className="text-2xl font-black text-brand-blue-dark mb-4 flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300">
                <span className="w-3 h-3 bg-brand-gold rounded-full"></span>
                Use License
              </h3>
              <div className="bg-brand-surface p-8 rounded-2xl border border-gray-50 mb-4">
                <p className="text-gray-600 font-medium italic mb-6">Permission is granted to temporarily download one copy of the materials (information or software) on Kartavya IAS website for personal, non-commercial transitory viewing only.</p>
                <h4 className="font-bold text-brand-blue mb-4 uppercase tracking-wide text-xs">This is the grant of a license, not a transfer of title, and under this license you may not:</h4>
                <ul className="space-y-3 font-bold text-gray-500 text-sm">
                  <li>Modify or copy the materials;</li>
                  <li>Use the materials for any commercial purpose, or for any public display;</li>
                  <li>Attempt to decompile or reverse engineer any software contained on Kartavya IAS's website;</li>
                  <li>Remove any copyright or other proprietary notations from the materials;</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>
              </div>
            </div>

            <div className="group">
              <h3 className="text-2xl font-black text-brand-blue-dark mb-4 flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300">
                <span className="w-3 h-3 bg-brand-gold rounded-full"></span>
                Disclaimer
              </h3>
              <p className="text-gray-700 leading-loose font-medium text-lg">
                The materials on Kartavya IAS's website are provided "as is". Kartavya IAS makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="group">
              <h3 className="text-2xl font-black text-brand-blue-dark mb-4 flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300">
                <span className="w-3 h-3 bg-brand-gold rounded-full"></span>
                Limitations
              </h3>
              <p className="text-gray-700 leading-loose font-medium text-lg">
                In no event shall Kartavya IAS or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Kartavya IAS's Internet site, even if Kartavya IAS or a Kartavya IAS authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div className="group">
              <h3 className="text-2xl font-black text-brand-blue-dark mb-4 flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300">
                <span className="w-3 h-3 bg-brand-gold rounded-full"></span>
                Modifications
              </h3>
              <p className="text-gray-700 leading-loose font-medium text-lg">
                Kartavya IAS may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
              </p>
            </div>

            <div className="p-8 bg-brand-blue-dark rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-red/10 pointer-events-none"></div>
              <h3 className="text-xl font-bold text-brand-gold-light mb-4 relative z-10">Legal Contact</h3>
              <p className="text-lg font-medium relative z-10 opacity-90 mb-4">
                For information regarding these terms, please contact:
              </p>
              <div className="space-y-2 relative z-10 text-brand-gold-light font-black">
                <p>Email: legal@kartavyaias.com</p>
                <p>Phone: +91 94500 66558</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
