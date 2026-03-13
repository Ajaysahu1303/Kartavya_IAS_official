import React, { useState } from 'react';

function Enroll() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const apiBase = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || 'https://kartavya-ias-official.vercel.app';
      const response = await fetch(`${apiBase}/api/enroll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        alert(`Thank you ${formData.name}! We will call you shortly to discuss your admission.`);
        setFormData({ name: '', phone: '', course: '', message: '' });
      } else {
        setStatus({ loading: false, success: false, error: data.message || 'Something went wrong.' });
        alert(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: 'Cannot connect to the server.' });
      alert('Cannot connect to the server. Please try again later.');
    }
  };

  return (
    <section id="enroll" className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-brand-blue transform -skew-y-3 origin-top-left -z-0 shadow-lg shadow-brand-blue/20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-gray-100/50">

          {/* Left Column - The Pitch & Trust Signals */}
          <div className="lg:w-5/12 bg-gradient-to-br from-[#002670] to-[#001740] p-6 sm:p-10 lg:p-14 text-white relative flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red rounded-full mix-blend-screen filter blur-[80px] opacity-40 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-sm font-extrabold text-brand-gold tracking-widest uppercase mb-3">Begin Your Journey</h2>
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
                Ready to clear <span className="text-brand-gold">UPSC</span> on your first attempt?
              </h3>
              <p className="text-brand-surface/80 text-lg leading-relaxed mb-10">
                Join our upcoming batch and get mentored by renowned subject-matter experts. Leave your details below, and our senior counselors will call you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue border border-brand-blue-light flex items-center justify-center text-brand-gold">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs text-brand-surface/60 font-medium uppercase tracking-wider">Direct Helpline</p>
                    <p className="font-bold text-base sm:text-lg">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue border border-brand-blue-light flex items-center justify-center text-brand-gold">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-brand-surface/60 font-medium uppercase tracking-wider">Email Us</p>
                    <p className="font-bold text-base sm:text-lg break-all">admissions@kartavyaias.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 relative z-10 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <p className="italic text-brand-surface/80 text-sm">
                "Finding the right mentor is 50% of your UPSC preparation. Kartavya IAS made the journey incredibly clear."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Student" className="w-10 h-10 rounded-full border-2 border-brand-gold" />
                <div>
                  <p className="text-sm font-bold text-white">Anjali Verma</p>
                  <p className="text-xs text-brand-gold">AIR 42, UPSC 2022</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - The Enrollment / Enquiry Form */}
          <div className="lg:w-7/12 p-6 sm:p-10 lg:p-14 bg-white relative">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Request a Callback</h3>
            <p className="text-gray-500 text-sm mb-8 font-medium">Please fill in your details, and our admission team will get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="E.g. Siddharth Rao"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Mobile Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 xxxxx xxxxx"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Interested Course</label>
                <div className="relative">
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all duration-200 appearance-none text-gray-700"
                  >
                    <option value="" disabled>Select your goal</option>
                    <option value="UPSC GS Foundation (Pre + Mains) 2025">UPSC GS Foundation (Pre + Mains) 2025</option>
                    <option value="UPSC Mains Answer Writing Program">UPSC Mains Answer Writing Program</option>
                    <option value="Optional Subjects Coaching">Optional Subjects Coaching</option>
                    <option value="Mock Interview Guidance">Mock Interview Guidance</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Additional Message / Question (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any specific doubts regarding timings, fee, or faculty?"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-brand-red hover:bg-brand-red-light text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-brand-red/30 hover:-translate-y-1 hover:shadow-brand-red/50 transition-all duration-300 flex justify-center items-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {status.loading ? 'Submitting...' : 'Submit Enrollment Enquiry'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Your data is 100% secure. We do not share it with third parties.
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Enroll;
