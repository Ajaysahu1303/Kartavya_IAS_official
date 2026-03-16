import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import founderImage from '../Assets/Founder.png';
import bg_history from '../Assets/bg_history.png';
import abstract_bg from '../Assets/abstract-bg.png';

function AboutPage() {
    return (
        <div>
            <section className="py-24 bg-[#001740] text-white overflow-hidden relative">
                {/* Background Ornaments based on Brand Gold and Red */}
                <div className="absolute top-0 right-0 -m-32 w-96 h-96 opacity-10 transform translate-x-16 -translate-y-16">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="var(--color-brand-gold)" d="M47.7,-68.8C59.6,-57.8,65.6,-38.7,69.5,-19.9C73.4,-1.2,75.1,17.2,68.7,33.1C62.3,49,47.8,62.5,31.2,70.5C14.7,78.5,-3.9,81,-23,76.9C-42.1,72.7,-61.7,61.8,-73.2,45.4C-84.7,29.1,-88.2,7.3,-83.4,-11.6C-78.6,-30.5,-65.4,-46.6,-49.6,-57.2C-33.8,-67.8,-15.5,-73,2,-75.4C19.5,-77.8,35.8,-79.8,47.7,-68.8Z" transform="translate(100 100)" />
                    </svg>
                </div>

                <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-brand-red/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">

                    {/* Founder Portrait Section */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold to-yellow-400 rounded-3xl transform rotate-3 group-hover:rotate-6 transition duration-500 opacity-80 shadow-2xl shadow-brand-gold/20"></div>
                            <div className="relative bg-[#00205b] p-2 rounded-3xl border border-brand-blue-light/50 w-full max-w-sm transform group-hover:-translate-y-2 group-hover:rotate-0 transition duration-500 z-10 shadow-2xl">
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-inner relative z-0">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#001740]/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                                    {/* Real photo of the founder should replace this generic one */}
                                    <img
                                        src={founderImage}
                                        alt="Founder of Kartavya IAS"
                                        className="w-full h-full object-cover object-top sepia-[0.3] group-hover:sepia-0 group-hover:scale-105 transition-all duration-700"
                                    />
                                </div>

                                {/* Founder Name Tag */}
                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 rounded-2xl px-8 py-4 shadow-2xl border-b-4 border-brand-red flex flex-col items-center min-w-[85%] transition-transform duration-500 group-hover:-translate-y-1 z-0">
                                    <span className="text-2xl font-black whitespace-nowrap text-brand-blue-dark">Dr.Kumar Mayank</span>
                                    <span className="text-brand-red text-xs font-bold uppercase tracking-widest mt-1">Founder & Director</span>
                                </div>
                            </div>

                            <div className="absolute -left-12 -top-12 z-0 animate-pulse">
                                <svg className="w-24 h-24 text-brand-gold/30" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-7 pt-12 md:pt-0">
                        <h2 className="text-sm font-extrabold text-brand-gold tracking-widest uppercase mb-3 flex items-center gap-3">
                            <span className="w-12 h-[3px] bg-brand-gold rounded-full"></span>
                            Visionary Leadership
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">Visionary</span> Founder
                        </h3>
                        <p className="text-brand-surface/80 text-lg leading-relaxed mb-8 font-medium">
                            Guided by decades of academic excellence and bureaucratic experience, our Founder has transformed <span className="text-brand-gold font-bold">Kartavya IAS</span> into the premier destination for UPSC preparation. With a deep commitment to student success, the leadership drives our results-oriented approach.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-10">
                            {/* Doctorate Highlight */}
                            <div className="bg-[#002670]/40 backdrop-blur-md border border-brand-blue/50 rounded-2xl p-6 hover:bg-[#0033a0]/80 hover:border-brand-gold/50 transition duration-300 group shadow-lg">
                                <div className="w-14 h-14 bg-brand-red/20 text-brand-red-light rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300 group-hover:bg-brand-red group-hover:text-white shadow-inner">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path></svg>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">Doctorate in Economy</h4>
                                <p className="text-brand-surface/60 text-sm leading-relaxed">Deep command over India’s economic framework, directly aligning with core UPSC civil service subjects.</p>
                            </div>

                            {/* Awards Highlight */}
                            <div className="bg-[#002670]/40 backdrop-blur-md border border-brand-blue/50 rounded-2xl p-6 hover:bg-[#0033a0]/80 hover:border-brand-gold/50 transition duration-300 group shadow-lg">
                                <div className="w-14 h-14 bg-brand-gold/20 text-brand-gold rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300 group-hover:bg-brand-gold group-hover:text-[#001740] shadow-inner">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">Renowned Awardee</h4>
                                <p className="text-brand-surface/60 text-sm leading-relaxed">Recognized repeatedly with prestigious national awards for exceptional contribution to education.</p>
                            </div>
                        </div>

                        {/* Branches Highlight */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Prayagraj Main Branch */}
                            <div className="bg-gradient-to-br from-brand-red to-brand-red-dark rounded-2xl p-6 border border-brand-red-light shadow-2xl shadow-brand-red/20 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition duration-300">
                                <div className="absolute top-0 right-0 bg-black/20 backdrop-blur-md text-white border-b border-l border-white/20 text-xs font-bold px-4 py-1.5 rounded-bl-2xl">Main Branch</div>
                                <div className="relative z-10">
                                    <h4 className="text-2xl font-black text-white mb-1 mt-3 group-hover:text-brand-gold-light transition-colors">Prayagraj</h4>
                                    <p className="text-brand-surface/90 text-sm mb-6 leading-relaxed">The historic core and main hub of our civil services preparation excellence.</p>
                                </div>
                                <button className="bg-white text-brand-red-dark hover:bg-brand-surface font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition w-full shadow-lg hover:shadow-xl relative z-10">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    Visit Main Branch
                                </button>
                            </div>

                            {/* New Delhi Branch */}
                            <div className="bg-gradient-to-br from-[#004eb8] to-[#0033a0] rounded-2xl p-6 border border-brand-blue-light/50 shadow-2xl shadow-brand-blue/20 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition duration-300">
                                <div className="absolute top-0 right-0 bg-black/20 text-brand-gold-light border-b border-l border-white/10 text-xs font-bold px-4 py-1.5 rounded-bl-2xl backdrop-blur-md">New Hub</div>
                                <div className="relative z-10">
                                    <h4 className="text-2xl font-black text-white mb-1 mt-3 group-hover:text-brand-gold-light transition-colors">New Delhi</h4>
                                    <p className="text-brand-surface/80 text-sm mb-6 leading-relaxed">Operating right from the heart of India's current UPSC Hub!</p>
                                </div>
                                <button className="bg-brand-gold hover:bg-yellow-400 text-[#001740] font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition w-full shadow-lg hover:shadow-xl relative z-10">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    View Details
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* Institute History */}
            <section className="py-24 relative overflow-hidden bg-brand-surface">

                {/* --- Background Image Layer --- */}
                <div
                    className="absolute inset-0 z-0 opacity-40 grayscale-[20%] pointer-events-none"
                    style={{
                        backgroundImage: `url(${bg_history})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'right center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    {/* Soft Gradient to blend with the background surface */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-surface via-brand-surface/40 to-transparent"></div>
                </div>

                {/* Yahan 'max-w-7xl' aur 'px-4 md:px-10' se content aur left shift ho jayega */}
                <div className="max-w-8xl mx-auto px-4 md:px-10 relative z-10">

                    {/* Minimal Heading - Further Left */}
                    <div className="mb-12 text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4 tracking-tight">
                            Our Journey
                        </h2>
                        <div className="w-16 h-1.5 bg-brand-gold rounded-full"></div>
                    </div>

                    {/* Story Text Container - Left Shifted */}
                    <div className="max-w-2xl ">
                        <div className="relative z-10 space-y-6">
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-left font-normal">
                                Established in <span className="text-brand-blue-dark font-semibold relative inline-block z-10">
                                    2015
                                    <span className="absolute bottom-1 left-0 w-full h-2 bg-brand-gold/30 -z-10 rounded-sm"></span>
                                </span>, Kartavya IAS was founded with the vision of
                                providing high-quality guidance for UPSC aspirants. What began as a
                                small initiative in <span className="text-brand-blue-dark font-semibold">Prayagraj</span> has now grown into a respected coaching
                                institute helping hundreds of students prepare for India’s toughest
                                examination.
                            </p>

                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-left font-normal">
                                With the expansion to <span className="text-brand-blue-dark font-semibold">New Delhi</span>, the institute continues to provide
                                structured mentorship, expert faculty guidance, and a competitive
                                academic environment to help students achieve their goals in civil
                                services.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
            {/* Vision Mission */}
            <section className="py-20 bg-brand-blue-dark text-white relative overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">

                    {/* Vision Card */}
                    <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-t-4 border-brand-gold transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] shadow-xl">
                        <div className="flex items-center gap-4 mb-4">
                            <h3 className="text-2xl font-bold text-brand-gold">Our Vision</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                            To become one of India’s most trusted institutions for civil services
                            preparation by nurturing responsible leaders who contribute to
                            nation building with integrity and excellence.
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-t-4 border-brand-gold transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] shadow-xl">
                        <div className="flex items-center gap-4 mb-4">
                            <h3 className="text-2xl font-bold text-brand-gold">Our Mission</h3>
                        </div>
                        <ul className="text-gray-300 space-y-3 list-none">
                            {[
                                "Provide conceptual and analytical learning for UPSC aspirants",
                                "Develop disciplined study habits and strategic preparation",
                                "Offer expert mentorship and regular evaluation",
                                "Build responsible civil servants for future India"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 group-hover:text-white transition-colors">
                                    <span className="text-brand-gold mt-1.5 text-[10px]">◆</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            {/* Why Choose Us */}
            <section
                className="py-20 relative bg-cover bg-center"
                style={{
                    backgroundImage: `
      linear-gradient(rgba(250,249,246,0.92), rgba(255,245,214,0.85)),
      url(${abstract_bg})
    `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="max-w-6xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4 tracking-tight">
                            Why Choose Kartavya IAS
                        </h2>
                        <div className="w-16 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Expert Faculty",
                                desc: "Experienced mentors with deep understanding of UPSC syllabus."
                            },
                            {
                                title: "Structured Preparation",
                                desc: "Comprehensive study plans with regular tests and evaluations."
                            },
                            {
                                title: "Personal Mentorship",
                                desc: "Individual guidance to track progress and improve performance."
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl hover:shadow-brand-blue-dark/5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                            >
                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-brand-gold transition-colors duration-300"></div>

                                <div className="flex flex-col gap-5">

                                    {/* Number */}
                                    <div className="w-12 h-12 rounded-xl bg-brand-surface border border-gray-100 flex items-center justify-center group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-300">
                                        <span className="text-xl font-bold text-gray-400 group-hover:text-brand-gold transition-colors">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-blue-dark mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                            {feature.desc}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            {/* Founder Message */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">

                    {/* Section Heading */}
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4 tracking-tight">
                            Message from the Founder
                        </h2>
                        <div className="w-16 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
                    </div>

                    {/* Elegant Quote Layout */}
                    <div className="relative">
                        {/* Large Decorative Quote Icon */}
                        <div className="text-8xl text-brand-gold/20 font-serif leading-none absolute -top-8 left-1/2 -translate-x-1/2 select-none">
                            "
                        </div>

                        <p className="text-gray-600 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-light italic relative z-10 pt-6">
                            Civil Services is not just an examination but a commitment to serve the
                            nation with integrity and responsibility. At Kartavya IAS, our goal is
                            not only to help students clear the UPSC examination but to build future
                            administrators who possess knowledge, character, and dedication toward
                            society. Through disciplined preparation, conceptual clarity, and
                            consistent mentorship, we guide aspirants to transform their dreams
                            into reality.
                        </p>

                        {/* Founder Signature Area */}
                        <div className="mt-10 flex flex-col items-center justify-center gap-2">
                            <div className="w-12 h-[2px] bg-brand-red mb-2"></div>
                            <h4 className="text-xl font-bold text-brand-blue-dark">
                                Dr. Kumar Mayank
                            </h4>
                            <span className="text-brand-gold font-medium text-sm tracking-wider uppercase">
                                Founder & Director
                            </span>
                        </div>

                        <div className="mt-14 flex justify-center">
                            <Link to="/testimonials" className="bg-gradient-to-r from-brand-red to-brand-red-dark hover:from-brand-red-dark hover:to-brand-red text-white font-extrabold py-4 px-10 rounded-full shadow-xl hover:shadow-brand-red/40 hover:-translate-y-1 transform transition duration-300 flex items-center gap-3 group">
                                <span>See Our Success Stories</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
