import logo from "../Assets/logo.png";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-brand-surface relative overflow-hidden border-t-4 border-brand-red">
      {/* Decorative Branding Elements */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-gold/10 rounded-full mix-blend-screen filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">

        {/* Brand Column */}
        <div className="lg:pr-8">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 mb-6 hover:opacity-90 transition-opacity cursor-pointer">
            <img src={logo} className="w-18 h-20 drop-shadow-md brightness-100" alt="Kartavya IAS Logo" />
            <h2 className="font-black text-2xl tracking-tight text-white">Kartavya <span className="text-brand-red-light">IAS</span></h2>
          </Link>
          <p className="text-brand-surface/70 text-sm leading-relaxed mb-6">
            Shaping the nation's future by guiding dedicated aspirants toward administrative brilliance and true success in the UPSC examinations.
          </p>
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <a href="https://youtube.com/@kartavyaiasofficial?si=88mX0UOav0gWNNz8" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF0000] transition-colors group" title="YouTube">
              <svg className="w-5 h-5 text-brand-surface/80 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
            <a href="https://www.instagram.com/kartavyaiasofficial?igsh=bHZ0aG5udWkyMmFk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E1306C] transition-colors group" title="Instagram">
              <svg className="w-5 h-5 text-brand-surface/80 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a href="https://www.facebook.com/share/18DQEHRkL1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] transition-colors group" title="Facebook">
              <svg className="w-5 h-5 text-brand-surface/80 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
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
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-gold transition-colors">Home</Link></li>
            <li><Link to="/demo" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-gold transition-colors">Demo Lectures</Link></li>
            <li><Link to="/demo-pdfs" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-gold transition-colors">Free PDFs</Link></li>
            <li><Link to="/quiz" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-gold transition-colors">Practice Quiz</Link></li>
            <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-gold transition-colors">About Us</Link></li>
            <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Core Offerings */}
        <div>
          <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
            Offerings
          </h3>
          <ul className="text-brand-surface/70 space-y-3 font-medium">
            <li><a href="#course-1" className="hover:text-white transition-colors cursor-pointer block">UPSC GS Foundation</a></li>
            <li><a href="#course-2" className="hover:text-white transition-colors cursor-pointer block">Prelims Test Series</a></li>
            <li><a href="#course-4" className="hover:text-white transition-colors cursor-pointer block">Mains Answer Writing</a></li>
            <li><a href="#course-5" className="hover:text-white transition-colors cursor-pointer block">Optional Subject Experts</a></li>
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
              <p className="text-white font-semibold text-sm">New Delhi (Main)</p>
              <p className="text-brand-surface/60 text-sm mt-1 leading-relaxed">101,B-14,First Floor,Dr Mukharji Nagar,New Delhi 110009</p>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Prayagraj</p>
              <p className="text-brand-surface/60 text-sm mt-1 leading-relaxed">Front of
                Aanand Bhawan,Katra, Prayagraj, UP 211002</p>
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
            <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;