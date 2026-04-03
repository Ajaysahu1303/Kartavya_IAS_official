import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../Assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-brand-gold-light">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-3">

        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 group cursor-pointer">
          <img src={logo} className="w-16 h-16 md:w-18 md:h-20 transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md" alt="Kartavya IAS Logo" />
          <h1 className="font-extrabold text-xl md:text-2xl tracking-tight">
            <span className="text-brand-red drop-shadow-sm">Kartavya</span> <span className="text-brand-blue drop-shadow-sm">IAS</span>
          </h1>
        </Link>

        <div className="hidden lg:flex gap-8 font-semibold text-gray-700">
          <Link to="/demo" className="hover:text-brand-red transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all">Demo Lectures</Link>
          <Link to="/demo-pdfs" className="hover:text-brand-red transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all">Free PDFs</Link>
          <Link to="/quiz" className="hover:text-brand-red transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all">Practice Quiz</Link>
          <Link to="/courses" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-red transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all">Courses</Link>
          <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-red transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all">About Us</Link>
          <Link to="/contact" className="hover:text-brand-red transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/courses" onClick={() => window.scrollTo(0, 0)} className="hidden sm:inline-block bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white font-bold px-5 py-2 md:px-6 md:py-2.5 rounded-full shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:-translate-y-0.5 transform transition-all duration-300">
            Enroll Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-brand-blue p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-brand-gold-light/30 shadow-xl absolute top-full left-0 w-full">
          <div className="flex flex-col px-6 py-4 gap-4 font-bold text-gray-800 text-lg">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-brand-red active:text-brand-red transition-colors border-b border-gray-100 pb-2">Home</Link>
            <Link to="/demo" onClick={() => setIsOpen(false)} className="hover:text-brand-red active:text-brand-red transition-colors border-b border-gray-100 pb-2">Demo Lectures</Link>
            <Link to="/demo-pdfs" onClick={() => setIsOpen(false)} className="hover:text-brand-red active:text-brand-red transition-colors border-b border-gray-100 pb-2">Free PDFs</Link>
            <Link to="/quiz" onClick={() => setIsOpen(false)} className="hover:text-brand-red active:text-brand-red transition-colors border-b border-gray-100 pb-2">Practice Quiz</Link>
            <Link to="/courses" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }} className="hover:text-brand-red active:text-brand-red transition-colors border-b border-gray-100 pb-2">Courses</Link>
            <Link to="/about" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }} className="hover:text-brand-red active:text-brand-red transition-colors border-b border-gray-100 pb-2">About Us</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-brand-red active:text-brand-red transition-colors border-b border-gray-100 pb-2">Contact</Link>

            <Link to="/courses" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }} className="sm:hidden text-center mt-2 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white font-bold px-6 py-3 rounded-full shadow-lg">
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;