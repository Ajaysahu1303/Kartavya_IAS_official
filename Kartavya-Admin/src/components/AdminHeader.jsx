import React from 'react';
import logo from '../assets/logo.png';

const AdminHeader = ({ handleLogout }) => {
  return (
    <div className="bg-gradient-to-r from-[#001740] to-[#002670] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 flex items-center justify-center drop-shadow-md">
            <img src={logo} alt="Kartavya Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-xl font-black">Video Manager</h1>
            <p className="text-brand-gold-light text-xs font-bold">Kartavya IAS Admin</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-white/10 text-white font-bold px-5 py-2 rounded-xl text-sm hover:bg-white/20 transition-colors cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
