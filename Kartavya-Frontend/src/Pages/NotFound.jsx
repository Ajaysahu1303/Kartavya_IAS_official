import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001740] to-[#002670] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gold/15 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>

      <div className="text-center relative z-10 max-w-lg">
        {/* 404 number */}
        <h1 className="text-[10rem] md:text-[14rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-white/5 select-none">
          404
        </h1>

        {/* Message */}
        <div className="-mt-10 md:-mt-14">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-brand-surface/60 text-lg font-medium mb-10 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-gradient-to-r from-brand-red to-brand-red-dark text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 hover:-translate-y-1 transform transition duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4"></path></svg>
              Go Home
            </Link>
            <Link
              to="/demo"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold py-3.5 px-8 rounded-full hover:bg-white/20 hover:-translate-y-1 transform transition duration-300"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
