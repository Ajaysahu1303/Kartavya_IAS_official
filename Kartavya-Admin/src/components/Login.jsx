import React from 'react';
import logo from '../assets/logo.png';

const Login = ({ 
  handleLogin, 
  loginEmail, 
  setLoginEmail, 
  loginPassword, 
  setLoginPassword, 
  loginError, 
  loginLoading 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001740] to-[#002670] flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-40 h-40 flex items-center justify-center mx-auto mb-2 drop-shadow-xl">
            <img src={logo} alt="Kartavya IAS Logo" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-2xl font-black text-gray-900">Admin Panel</h2>
          <p className="text-gray-500 text-sm mt-1 font-medium">Kartavya IAS — Video Manager</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1">Email</label>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
              placeholder="admin@kartavyaias.com"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1">Password</label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
              placeholder="Enter your password"
            />
          </div>
          {loginError && (
            <p className="text-brand-red text-sm font-medium bg-red-50 p-3 rounded-xl">
              ❌ {loginError}
            </p>
          )}
          <button
            type="submit"
            disabled={loginLoading}
            className="w-full bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white font-bold py-3.5 rounded-xl shadow-lg hover:-translate-y-1 transition-all cursor-pointer disabled:opacity-50"
          >
            {loginLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
