import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import emblem from "../Assets/Emblem of India.svg";
import logo from "../Assets/logo.png";
const API_BASE = import.meta.env.VITE_API_URL;
const profiles = [
  {
    title: "IAS",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    desc: "Administrative Excellence",
  },
  {
    title: "IPS",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    desc: "Maintaining Order",
  },
  {
    title: "IFS",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    desc: "Global Diplomacy",
  },
];

function Hero() {
  const [heroText, setHeroText] = useState("New Batch Starts Sept 15th");

  useEffect(() => {
    fetch(`${API_BASE}/api/settings/heroText`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.value) {
          setHeroText(data.data.value);
        }
      })
      .catch(err => console.error("Error fetching hero text:", err));
  }, []);

  return (
    <section id="home" className="relative bg-gradient-to-br from-brand-gold-light/60 via-brand-surface to-brand-red/5 pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden scroll-mt-28">
      {/* Decorative Blur Backgrounds based on Logo colors */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-brand-red/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>

      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-5 z-0 overflow-hidden">
        <img
          src={emblem}
          alt="Ashoka Emblem watermark"
          className="w-48 md:w-64 lg:w-96 max-h-[90%] object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-16 z-10">
        {/* LEFT SECTION (Profiles & Stats) */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start gap-8">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl shadow-brand-blue/5 p-6 border border-white max-w-sm w-full transform hover:scale-105 transition duration-500">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-gradient-to-br from-brand-gold to-yellow-300 rounded-full flex items-center justify-center text-brand-blue-dark font-extrabold text-2xl shadow-inner border border-brand-gold-light">
                50+
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Selections Every Year</h3>
                <p className="text-gray-600 text-sm">Consistent results in UPSC</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full justify-center">
            {profiles.map((p) => (
              <div
                key={p.title}
                className="bg-white/90 backdrop-blur-sm border border-brand-gold-light/50 rounded-xl shadow-lg shadow-brand-gold/10 w-full text-center p-4 transform transition duration-300 hover:-translate-y-2 hover:shadow-brand-blue/20 group"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-16 h-16 rounded-full mx-auto object-cover ring-4 ring-brand-blue/10 p-1 group-hover:ring-brand-blue/30 transition-all"
                />
                <h3 className="mt-3 font-bold text-brand-blue-dark group-hover:text-brand-red transition-colors">{p.title}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION (Hero Content) */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-gold-light text-brand-red-dark text-sm font-bold mb-6 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-red"></span>
            </span>
            {heroText}
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Shape Your Destiny With <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red-dark drop-shadow-sm">Kartavya</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-blue-dark drop-shadow-sm">IAS</span>
          </h2>

          <p className="text-gray-700 text-lg md:text-xl mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Prepare for UPSC Prelims and Mains with India’s top coaching institute. Guided by <span className="text-brand-red font-semibold">excellence</span>, driven by <span className="text-brand-blue font-semibold">duty</span>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a href="#courses" className="bg-gradient-to-r from-brand-red to-brand-red-dark text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 hover:-translate-y-1 transform transition duration-300">
              Explore Courses
            </a>
            <Link to="/demo" className="bg-white text-brand-blue-dark border-2 border-brand-blue/10 font-bold py-3.5 px-8 rounded-full shadow-md hover:bg-brand-blue hover:text-white hover:border-brand-blue hover:-translate-y-1 transform transition duration-300 flex items-center justify-center gap-2 group">
              <svg className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Watch Demo
            </Link>
            <Link to="/quiz" className="bg-white text-brand-red-dark border-2 border-brand-red/10 font-bold py-3.5 px-6 rounded-full shadow-md hover:bg-brand-red hover:text-white hover:border-brand-red hover:-translate-y-1 transform transition duration-300 flex items-center justify-center gap-2 group">
              <span className="text-xl group-hover:scale-110 transition-transform">⚡</span>
              Practice Quiz
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 lg:gap-8 text-sm text-gray-700 font-bold flex-wrap">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-brand-gold/30 shadow-sm">
              <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Offline / Hybrid
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-brand-gold/30 shadow-sm">
              <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Live Online
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
