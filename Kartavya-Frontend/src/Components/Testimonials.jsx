import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    role: "Selected in UPSC 2024",
    content: "Kartavya IAS provided me with the structured guidance and personal mentorship I needed to clear the exam in my first attempt.",
    rating: 5
  },
  {
    id: 2,
    name: "Sneha Reddy",
    role: "Mains Qualifier",
    content: "The daily answer writing practice was a game-changer for me. Detailed feedback helped improve my articulation.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "Foundation Course Student",
    content: "Dr. Mayank's classes on economics are phenomenal. The concepts are explained with extreme clarity making them easy to remember.",
    rating: 5
  }
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full mix-blend-multiply filter blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full mix-blend-multiply filter blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
            <h2 className="text-sm font-extrabold text-brand-blue tracking-widest uppercase">Student Success</h2>
            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Hear from our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue drop-shadow-sm">Achievers</span>
          </h3>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg font-medium">
            Discover how Kartavya IAS is transforming aspirants into civil servants through dedication and expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:-translate-y-2 hover:border-brand-gold transition-all duration-300 relative group">
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" /></svg>
              </div>

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-brand-blue-dark">{testimonial.name}</h4>
                  <p className="text-sm font-medium text-brand-red">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex text-brand-gold mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>

              <p className="text-gray-600 font-medium leading-relaxed">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
