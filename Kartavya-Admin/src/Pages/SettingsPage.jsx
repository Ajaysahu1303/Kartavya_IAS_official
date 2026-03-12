import React from 'react';
import GeneralSettings from '../components/GeneralSettings';

const SettingsPage = ({ adminToken }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h1 className="text-3xl font-black text-gray-900">General Settings</h1>
        <p className="text-gray-500 mt-1 font-medium">Control dynamic content across your website.</p>
      </div>

      <div className="max-w-4xl">
        <GeneralSettings adminToken={adminToken} />
      </div>
      
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Account Information</h3>
        <div className="space-y-4">
          <div className="flex justify-between py-3 border-b border-gray-50">
            <span className="text-gray-500 font-medium">Admin Email</span>
            <span className="text-gray-900 font-bold">admin@kartavyaias.com</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-gray-500 font-medium">Role</span>
            <span className="bg-blue-50 text-brand-blue px-3 py-1 rounded-full text-xs font-black">Super Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
