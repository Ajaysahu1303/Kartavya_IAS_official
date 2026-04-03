import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-brand-surface selection:bg-brand-red/10 selection:text-brand-red">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-8">
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-1.5 bg-brand-red rounded-full"></span>
            <h1 className="text-sm font-black text-brand-blue tracking-[0.2em] uppercase">Trust & Transparency</h1>
            <span className="w-12 h-1.5 bg-brand-red rounded-full"></span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue">Policy</span></h2>
          <p className="mt-8 text-gray-600 text-lg font-medium">Last Updated: March 30, 2026</p>
        </header>

        <section className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full filter blur-3xl -mr-32 -mt-32"></div>

          <div className="space-y-12 relative z-10">
            <div className="group">
              <h3 className="text-2xl font-black text-brand-blue-dark mb-4 flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300">
                <span className="w-3 h-3 bg-brand-gold rounded-full"></span>
                Introduction
              </h3>
              <p className="text-gray-700 leading-loose font-medium text-lg">
                At Kartavya IAS, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or enroll in our courses. We value the trust you place in us and recognize the importance of secure transactions and information privacy.
              </p>
            </div>

            <div className="group">
              <h3 className="text-2xl font-black text-brand-blue-dark mb-4 flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300">
                <span className="w-3 h-3 bg-brand-gold rounded-full"></span>
                Information We Collect
              </h3>
              <div className="grid gap-6">
                <div className="bg-brand-surface p-6 rounded-2xl border border-gray-50">
                  <h4 className="font-bold text-brand-blue mb-2 uppercase tracking-wide text-sm">Personal Data</h4>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, and Address.
                  </p>
                </div>
                <div className="bg-brand-surface p-6 rounded-2xl border border-gray-50">
                  <h4 className="font-bold text-brand-blue mb-2 uppercase tracking-wide text-sm">Usage Data</h4>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's IP address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, and the time spent on those pages.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <h3 className="text-2xl font-black text-brand-blue-dark mb-4 flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300">
                <span className="w-3 h-3 bg-brand-gold rounded-full"></span>
                How We Use Your Data
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "To provide and maintain our Service",
                  "To notify you about changes to our Service",
                  "To allow you to participate in interactive features",
                  "To provide customer support",
                  "To gather analysis or valuable information",
                  "To monitor the usage of our Service",
                  "To detect, prevent and address technical issues"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-bold bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <span className="text-brand-red flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="group">
              <h3 className="text-2xl font-black text-brand-blue-dark mb-4 flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300">
                <span className="w-3 h-3 bg-brand-gold rounded-full"></span>
                Data Security
              </h3>
              <p className="text-gray-700 leading-loose font-medium text-lg">
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. We implement various security measures including SSL encryption and restricted access to personal information.
              </p>
            </div>

            <div className="p-8 bg-brand-blue-dark rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-red/10 pointer-events-none"></div>
              <h3 className="text-xl font-bold text-brand-gold-light mb-4 relative z-10">Contact Us</h3>
              <p className="text-lg font-medium relative z-10 opacity-90 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2 relative z-10 text-brand-gold-light font-black">
                <p>Email: contact@kartavyaias.com</p>
                <p>Phone: +91 94500 66558</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
