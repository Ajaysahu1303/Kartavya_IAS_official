import logo from "../Assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-brand-gold-light">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-3">

        <div className="flex items-center gap-3 group cursor-pointer">
          <img src={logo} className="w-12 h-12 transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md" alt="Kartavya IAS Logo"/>
          <h1 className="font-extrabold text-2xl tracking-tight">
            <span className="text-brand-red drop-shadow-sm">Kartavya</span> <span className="text-brand-blue drop-shadow-sm">IAS</span>
          </h1>
        </div>

        <div className="hidden md:flex gap-8 font-semibold text-gray-700">
          <a href="#home" className="hover:text-brand-red transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all">Home</a>
          <a href="#courses" className="hover:text-brand-red transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all">Courses</a>
          <a href="#about" className="hover:text-brand-red transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all">About Us</a>
          <a href="#founder" className="hover:text-brand-red transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all">Founder</a>
          <a href="#enroll" className="hover:text-brand-red transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all">Contact</a>
        </div>

        <a href="#enroll" className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white font-bold px-6 py-2.5 rounded-full shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:-translate-y-0.5 transform transition-all duration-300">
          Enroll Now
        </a>

      </div>
    </nav>
  );
}

export default Navbar;