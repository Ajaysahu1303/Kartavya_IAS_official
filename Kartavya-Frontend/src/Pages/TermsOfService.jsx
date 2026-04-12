import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-brand-surface py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-gray-100">
        <h1 className="text-4xl md:text-5xl font-black text-brand-blue-dark mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-700 font-medium leading-relaxed">
          <p>
            Welcome to Kartavya IAS. By accessing or using our website and enrolling in our educational programs, you agree to be bound by these Terms of Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By using our platform, you signify your acceptance of these terms. If you do not agree to these terms, please refrain from using our platform.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Course Enrollment and Fees</h2>
          <p>
            Enrollment in our courses is subject to payment of applicable fees. Fees are non-refundable once the course has commenced unless explicitly stated otherwise in a specific course offering. Installment policies must be strictly adhered to.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Intellectual Property</h2>
          <p>
            All content provided by Kartavya IAS, including but not limited to study materials, PDFs, test series, and video lectures, is our intellectual property. You may not reproduce, distribute, or create derivative works without our written permission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. User Conduct</h2>
          <p>
            You agree not to use the platform for any unlawful purpose. Harassment, unauthorized access (hacking), and automated scraping of our free quiz or PDF resources are strictly prohibited and will result in an immediate ban.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Amendments</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. Your continued use of the platform after any such changes constitutes your acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Jurisdiction</h2>
          <p>
            All jurisdiction cases and legal disputes will be strictly subjected to the Honorable Allahabad High Court.
          </p>
          
          <p className="text-sm text-gray-500 mt-10 pt-6 border-t border-gray-100">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
