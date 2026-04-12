import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-brand-surface py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-gray-100">
        <h1 className="text-4xl md:text-5xl font-black text-brand-blue-dark mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-700 font-medium leading-relaxed">
          <p>
            At Kartavya IAS, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website or services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, phone number, and educational background when you register for courses, fill out contact forms, or participate in mock tests and quizzes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            Your information is used to provide, maintain, and improve our educational services. This includes personalizing your course curriculum, processing course enrollments, sending updates or administrative messages, and responding to your inquiries.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h2>
          <p>
            We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data. However, no internet transmission is entirely secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Sharing Your Information</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us via our Contact Page or directly at our Prayagraj or New Delhi campuses.
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

export default PrivacyPolicy;
