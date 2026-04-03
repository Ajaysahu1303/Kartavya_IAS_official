import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Sidebar = ({ handleLogout }) => {
  const menuItems = [
    { name: 'Overview', path: '/', icon: '📊' },
    { name: 'Videos', path: '/videos', icon: '📹' },
    { name: 'Demo PDF', path: '/demo-pdfs', icon: '📄' },
    { name: 'Demo Quizzes', path: '/demo-quizzes', icon: '🧩' },
    { name: 'Courses', path: '/courses', icon: '📚' },
    { name: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  return (
    <div className="w-64 bg-[#001740] text-white min-h-screen flex flex-col shadow-2xl sticky top-0">
      <div className="p-8 flex flex-col items-center border-b border-white/10">
        <img src={logo} alt="Kartavya Logo" className="w-24 h-24 object-contain mb-4 drop-shadow-lg" />
        <h2 className="text-xl font-black tracking-tight text-white">Admin Hub</h2>
        <p className="text-brand-gold-light text-[10px] font-bold uppercase tracking-widest mt-1">Kartavya IAS</p>
      </div>

      <nav className="flex-1 mt-8 px-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${isActive
                ? 'bg-gradient-to-r from-brand-blue to-blue-600 text-white shadow-lg shadow-brand-blue/30'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="p-6 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-red-500/10 text-red-400 font-bold rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <span>🚪</span> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
