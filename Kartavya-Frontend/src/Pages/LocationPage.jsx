import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const branchData = {
  prayagraj: {
    name: "Prayagraj Main Branch",
    tagline: "Our headquarters in the historic heart of Prayagraj, the hub of academic excellence.",
    address: "Colonelganj Rd, in front of ANAND BHAWAN, behind the UNIK BAJAR, Colnel Ganj, George Town, Prayagraj, Uttar Pradesh 211002",
    contact: "+91-XXXXXXXXXX",
    hours: "Monday — Sunday: 9:00 AM - 8:00 PM",
    isMain: true,
    mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1801.32!2d81.8596!3d25.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3985340623d6a693%3A0xe67ef5d3b1e32d1e!2sAnand%20Bhawan%2C%20Prayagraj!5e0!3m2!1sen!2sin!4v1711517000000!5m2!1sen!2sin`
  },
  delhi: {
    name: "New Delhi Branch",
    tagline: "Operating right from the heart of India's current UPSC Hub!",
    address: "204 A89, Jawaharlal Nehru Stadium, Near Chawla Restaurant, Pragati Vihar, Delhi-110003",
    contact: "+91-XXXXXXXXXX",
    hours: "Monday — Sunday: 9:00 AM - 8:00 PM",
    isMain: false,
    mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.7915!2d77.23!3d28.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd46!2sJawaharlal%20Nehru%20Stadium!5e0!3m2!1sen!2sin!4v1711518000000!5m2!1sen!2sin`
  }
};

const LocationPage = () => {
  const { branchId } = useParams();
  
  // Default to prayagraj if no branchId or invalid branchId
  const branch = branchData[branchId];

  if (!branch) {
    return <Navigate to="/location/prayagraj" replace />;
  }

  return (
    <div className="bg-[#001740] min-h-screen text-white font-outfit">
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
                {branchId === 'prayagraj' ? 'Main Hub' : 'Delhi Hub'}
              </span>
            </h1>
            <p className="text-brand-surface/70 text-lg max-w-2xl mx-auto leading-relaxed">
              {branch.tagline}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Address Details */}
            <div className="bg-[#002670]/40 backdrop-blur-md border border-brand-blue/50 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 -m-16 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center gap-2 ${branch.isMain ? 'bg-brand-red/20 text-brand-red-light' : 'bg-blue-500/20 text-blue-400'} px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8`}>
                  <span className={`w-2 h-2 ${branch.isMain ? 'bg-brand-red' : 'bg-blue-500'} rounded-full animate-pulse`}></span>
                  {branch.isMain ? 'Headquarters' : 'Regional Hub'}
                </div>

                <h2 className="text-3xl font-black text-brand-gold mb-6 uppercase tracking-tight">{branch.name}</h2>
                
                <div className="space-y-8 mb-10">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-brand-gold/20 text-brand-gold rounded-2xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white/60 uppercase text-xs tracking-widest mb-1">Address</h4>
                      <p className="text-xl font-medium leading-normal">{branch.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-brand-blue-light/20 text-brand-blue-light rounded-2xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white/60 uppercase text-xs tracking-widest mb-1">Office Hours</h4>
                      <p className="text-xl font-medium">{branch.hours}</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-brand-red/20 text-brand-red-light rounded-2xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white/60 uppercase text-xs tracking-widest mb-1">Contact</h4>
                      <p className="text-xl font-medium">{branch.contact}</p>
                    </div>
                  </div>
                </div>

                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(branch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-brand-gold text-brand-blue-dark hover:bg-yellow-400 font-black py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-brand-gold/20"
                >
                  Get Directions
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </div>

            {/* Map Preview */}
            <div className="bg-[#002670]/40 backdrop-blur-md border border-brand-blue/50 rounded-3xl p-3 shadow-2xl h-[500px] lg:h-[600px] transform lg:rotate-2 hover:rotate-0 transition duration-500 overflow-hidden relative group">
              <iframe
                title={`Google Maps ${branch.name}`}
                src={`${branch.mapUrl}&q=${encodeURIComponent(branch.address)}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000 opacity-80 group-hover:opacity-100"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocationPage;
