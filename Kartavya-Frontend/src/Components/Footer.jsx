import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const staticOfferings = [
  { _id: '1', title: 'UPSC GS Foundation', link: '#course-1' },
  { _id: '2', title: 'Prelims Test Series', link: '#course-2' },
  { _id: '4', title: 'Mains Answer Writing', link: '#course-4' },
  { _id: '5', title: 'Optional Subject Experts', link: '#course-5' },
];

function Footer() {
  const [offerings, setOfferings] = useState(staticOfferings);

  useEffect(() => {
    const fetchOfferings = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/offerings`);
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setOfferings(data);
        }
      } catch (error) {
        console.error("Error fetching offerings:", error);
      }
    };

    fetchOfferings();
  }, []);

  return (
    <footer className="bg-brand-blue-dark text-brand-surface relative overflow-hidden border-t-4 border-brand-red">
      {/* Decorative Branding Elements */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-gold/10 rounded-full mix-blend-screen filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">

        {/* Brand Column */}
        <div className="lg:pr-8">
          <a href="#home" className="flex items-center gap-2 mb-6 group cursor-pointer">
            <img src={logo} className="w-15 h-20 drop-shadow-md brightness-100 transform group-hover:scale-105 transition-transform duration-300" alt="Kartavya IAS Logo" />
            <h2 className="font-black text-2xl tracking-tight text-white">Kartavya <span className="text-brand-red-light">IAS</span></h2>
          </a>
          <p className="text-brand-surface/70 text-sm leading-relaxed mb-6">
            Shaping the nation's future by guiding dedicated aspirants toward administrative brilliance and true success in the UPSC examinations.
          </p>
          <div className="flex items-center gap-4">
            {/* Social Icons Placeholder */}
            <a href="https://www.facebook.com/share/18DQEHRkL1/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors group">
              <svg className="w-5 h-5 text-brand-surface/80 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.593 1.325-1.325v-21.351C24 .593 23.407 0 22.675 0z" /></svg>
            </a>
            <a href="https://www.instagram.com/kartavyaiasofficial?igsh=YjZhNnUzODJkM21z" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors group">
              <svg className="w-5 h-5 text-brand-surface/80 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a href="https://www.youtube.com/@KartavyaIasofficial" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors group">
              <svg className="w-5 h-5 text-brand-surface/80 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
            Quick Links
          </h3>
          <ul className="text-brand-surface/70 space-y-3 font-medium">
            <li><a href="#home" className="hover:text-brand-gold transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
            <li><a href="#founder" className="hover:text-brand-gold transition-colors">Founder's Vision</a></li>
            <li><a href="#enroll" className="hover:text-brand-gold transition-colors">Enrollment</a></li>
          </ul>
        </div>

        {/* Core Offerings */}
        <div>
          <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
            Offerings
          </h3>
          <ul className="text-brand-surface/70 space-y-3 font-medium">
            {offerings.map((offering) => (
              <li key={offering._id}><a href={offering.link} className="hover:text-white transition-colors cursor-pointer block">{offering.title}</a></li>
            ))}
          </ul>
        </div>

        {/* Physical Address */}
        <div>
          <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-red-light"></span>
            Our Campuses
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-white font-semibold text-sm">Prayagraj (Main)</p>
              <p className="text-brand-surface/60 text-sm mt-1 leading-relaxed">Front of
                Aanand Bhawan,Katra, Prayagraj, UP 211002</p>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">New Delhi</p>
              <p className="text-brand-surface/60 text-sm mt-1 leading-relaxed">101,B-14,First Floor,Dr Mukharji Nagar,New Delhi 110009</p>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 bg-[#001740] py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-surface/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Kartavya IAS. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-brand-surface/50">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;