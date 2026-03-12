import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children, handleLogout }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-gray-900">
      <Sidebar handleLogout={handleLogout} />
      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
