import logo from "../Assets/logo.png";

function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-brand-surface relative overflow-hidden border-t-4 border-brand-red">
      {/* Decorative Branding Elements */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-gold/10 rounded-full mix-blend-screen filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">

        {/* Brand Column */}
        <div className="lg:pr-8">
          <div className="flex items-center gap-2 mb-6">
            <img src={logo} className="w-10 h-10 drop-shadow-md brightness-0 invert opacity-90" alt="Kartavya IAS Logo" />
            <h2 className="font-black text-2xl tracking-tight text-white">Kartavya <span className="text-brand-red-light">IAS</span></h2>
          </div>
          <p className="text-brand-surface/70 text-sm leading-relaxed mb-6">
            Shaping the nation's future by guiding dedicated aspirants toward administrative brilliance and true success in the UPSC examinations.
          </p>
          <div className="flex items-center gap-4">
            {/* Social Icons Placeholder */}
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors group">
              <svg className="w-5 h-5 text-brand-surface/80 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors group">
              <svg className="w-5 h-5 text-brand-surface/80 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
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
            <li><a href="#home" className="hover:text-brand-gold transition-colors inline-flex items-center gap-2"><svg className="w-3 h-3 text-brand-red opacity-0 -translate-x-2 transition-all"><path fill="currentColor" d="M0 0h24v24H0z" /></svg>Home</a></li>
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
            <li className="hover:text-white transition-colors cursor-pointer">UPSC GS Foundation</li>
            <li className="hover:text-white transition-colors cursor-pointer">Prelims Test Series</li>
            <li className="hover:text-white transition-colors cursor-pointer">Mains Answer Writing</li>
            <li className="hover:text-white transition-colors cursor-pointer">Optional Subject Experts</li>
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
              <p className="text-brand-surface/60 text-sm mt-1 leading-relaxed">Katarniya Bagh, Civil Lines, Prayagraj, UP 211001</p>
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
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;