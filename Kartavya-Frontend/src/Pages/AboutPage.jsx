import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import founderImage from '../Assets/Founder.png';
import bg_history from '../Assets/bg_history.png';
import abstract_bg from '../Assets/abstract-bg.png';
import classPhoto1 from '../Assets/class_photo1.jpg';
import classPhoto2 from '../Assets/class_photo2.jpg';
import founderShort from '../Assets/About_Shorts/IMG_2969.MOV';

function AboutPage() {
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [showJourney, setShowJourney] = useState(false);

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

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-16">

                    {/* Founder Portrait Section */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end lg:sticky lg:top-32 self-start">
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
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 rounded-2xl px-6 py-4 shadow-2xl border-b-4 border-brand-red flex flex-col items-center min-w-[85%] transition-transform duration-500 group-hover:-translate-y-1 z-10">
                                    <span className="text-2xl font-black whitespace-nowrap text-brand-blue-dark mb-1">Dr.Kumar Mayank</span>
                                    <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-3">Founder & Director</span>
                                    <a href="https://www.instagram.com/kartavyaias__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold hover:shadow-lg hover:scale-105 transition-all" title="Follow on Instagram">
                                        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                        Follow on Instagram
                                    </a>
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
                        <p className="text-brand-surface/80 text-lg leading-relaxed mb-6 font-medium">
                            Guided by decades of academic excellence and profound societal commitment, Dr. Kumar Mayank has established <span className="text-brand-gold font-bold">Kartavya IAS</span> as a premier institution for UPSC preparation. His leadership is not merely driven by results, but by an unwavering vision of nation-building.
                        </p>
                        <div className="bg-brand-red/10 border-l-4 border-brand-red p-5 rounded-r-xl mb-8 backdrop-blur-sm">
                            <p className="text-white text-sm md:text-base leading-relaxed font-light italic">
                                "Beyond producing top bureaucrats, Dr. Mayank actively runs the <span className="text-brand-gold font-bold">Kartavya Educational Society</span>, a pan-India NGO dedicated to providing free education to orphans, underprivileged children, and ambitious daughters, proving that his educational mission extends far beyond the traditional classroom."
                            </p>
                        </div>

                        {/* Hindi Intro Snippet & Toggle Button */}
                        <div className="mb-10 text-white/90 border-l-2 border-brand-gold pl-4 py-2">
                            <p className="text-sm md:text-base leading-relaxed font-light mb-3">
                                "प्रयागराज की विद्वता और दिल्ली के प्रतिस्पर्धी माहौल के बीच एक नाम ऐसा है जिसने हज़ारों सपनों को हकीकत में बदला है— <strong className="text-brand-gold">डॉ. कुमार मयंक</strong>।"
                            </p>
                            <button 
                                onClick={() => { setShowJourney(!showJourney); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                                className="text-brand-gold hover:text-yellow-300 font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-colors group"
                            >
                                {showJourney ? 'संक्षिप्त करें (Show Less)' : 'पूरी यात्रा पढ़ें (Read Full Journey)'}
                                <svg className={`w-4 h-4 transform transition-transform ${showJourney ? 'rotate-180' : 'group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Expanded Hindi Journey (Full Width - approx 95%) */}
                {showJourney && (
                    <div className="max-w-[95%] lg:max-w-6xl mx-auto mb-16 p-8 md:p-12 bg-white/5 border border-brand-gold/20 rounded-3xl backdrop-blur-sm shadow-2xl">
                                <h3 className="text-2xl font-bold text-brand-gold mb-6 flex items-center gap-3">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                                    विद्वता और अनुभव का संगम
                                </h3>
                                <p className="text-white/80 leading-relaxed mb-10">
                                    डॉ. कुमार मयंक मात्र एक शिक्षक नहीं, बल्कि विषय के गहरे जानकार हैं। अर्थशास्त्र (Economics) और सांख्यिकी (Statistics) जैसे जटिल विषयों में पोस्ट ग्रेजुएशन करने के बाद, उन्होंने <strong className="text-brand-gold">इकोनॉमिक्स में पीएचडी (Ph.D.)</strong> की उपाधि प्राप्त की। उनकी यही शैक्षणिक गहराई उन्हें अन्य मेंटर्स से अलग खड़ा करती है, क्योंकि वे डेटा और सिद्धांतों को व्यावहारिक रूप से समझाने में माहिर हैं।
                                </p>
                                
                                {/* Simple Timeline */}
                                <div className="space-y-8 border-l-2 border-brand-red/50 pl-6 ml-3">
                                    <div className="relative">
                                        <div className="absolute -left-[33px] top-1 w-4 h-4 bg-brand-gold rounded-full shadow-[0_0_10px_#ffd700]"></div>
                                        <div className="text-brand-gold font-bold text-sm mb-1">2013-14</div>
                                        <h4 className="text-lg font-bold text-white mb-2">नींव: जब अनुभव बना मार्गदर्शक</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            डॉ. मयंक की यात्रा में सबसे बड़ा मोड़ तब आया जब 2013 में उन्होंने स्वयं IAS का इंटरव्यू दिया। सफलता की दहलीज तक पहुँचने के उस व्यक्तिगत अनुभव ने उन्हें यह महसूस कराया कि एक अभ्यर्थी के लिए सही मार्गदर्शन की कीमत क्या होती है। कई छात्रों का दर्द समझने के बाद, वर्ष 2014 में उन्होंने इलाहाबाद में आईएएस की तैयारी कर रहे छात्रों को निस्वार्थ भाव से मार्गदर्शन देना शुरू किया।
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[33px] top-1 w-4 h-4 bg-brand-red rounded-full shadow-[0_0_10px_var(--color-brand-red)]"></div>
                                        <div className="text-brand-red font-bold text-sm mb-1">2015</div>
                                        <h4 className="text-lg font-bold text-white mb-2">संस्था का जन्म: छात्रों का अटूट विश्वास</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            डॉ. मयंक सर के पढ़ाने के सटीक तरीके और अर्थशास्त्र जैसे विषयों पर उनकी सूक्ष्म पकड़ ने छात्रों को इस कदर प्रभावित किया कि उनका नाम छात्रों की जुबान पर चढ़ गया। छात्रों के इसी अटूट विश्वास और अनुरोध पर, वर्ष 2015 में एक औपचारिक रूप देते हुए <strong className="text-brand-gold">'कर्तव्य एजुकेशनल सोसाइटी'</strong> का पंजीकरण कराया गया। यह एक शिक्षक के प्रति छात्रों के सम्मान का ही परिणाम था।
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[33px] top-1 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                                        <div className="text-white font-bold text-sm mb-1">2016 - वर्तमान</div>
                                        <h4 className="text-lg font-bold text-white mb-2">एक दशक का गौरवशाली सफर</h4>
                                        <p className="text-white/70 text-sm leading-relaxed mb-2">
                                            इलाहाबाद में सफलता के झंडे गाड़ने के बाद, वर्ष 2016 में डॉ. मयंक ने दिल्ली के 'मुखर्जी नगर' में कदम रखा। पिछले 10 वर्षों में उनके मार्गदर्शन में हज़ारों छात्रों ने प्रशासनिक सेवाओं में सफलता हासिल की है।
                                        </p>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            आज 'कर्तव्य' सिर्फ एक संस्था नहीं, बल्कि उन लाखों छात्रों की उम्मीद है जो एक दिन प्रशासक बनकर देश सेवा करना चाहते हैं।
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="mt-10 pt-8 border-t border-white/10">
                                    <h4 className="text-lg font-bold text-brand-gold mb-4">क्यों चुनें डॉ. कुमार मयंक और कर्तव्य IAS?</h4>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <span className="text-brand-red mt-0.5">✔</span>
                                            <p className="text-white/80 text-sm"><strong className="text-white">उच्च शैक्षणिक योग्यता:</strong> पीएचडी (इकोनॉमिक्स) और सांख्यिकी में विशेषज्ञता रखने वाले शिक्षक से पढ़ने का अवसर।</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-brand-red mt-0.5">✔</span>
                                            <p className="text-white/80 text-sm"><strong className="text-white">प्रैक्टिकल अनुभव:</strong> स्वयं आईएएस इंटरव्यू तक पहुँचने का अनुभव, जो उन्हें परीक्षा की वास्तविक चुनौतियों से रूबरू कराता है।</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-brand-red mt-0.5">✔</span>
                                            <p className="text-white/80 text-sm"><strong className="text-white">निस्वार्थ समर्पण:</strong> शिक्षा को व्यवसाय के बजाय एक सामाजिक जिम्मेदारी (कर्तव्य) समझना और हमेशा छात्रों के हित में कार्य करना।</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                )}

                {/* Features and Branches in one inline row */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Doctorate Highlight */}
                    <div className="bg-[#002670]/40 backdrop-blur-md border border-brand-blue/50 rounded-2xl p-6 hover:bg-[#0033a0]/80 hover:border-brand-gold/50 transition duration-300 group shadow-lg flex flex-col justify-start">
                        <div className="w-14 h-14 bg-brand-red/20 text-brand-red-light rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300 group-hover:bg-brand-red group-hover:text-white shadow-inner">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path></svg>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">Doctorate in Economy</h4>
                        <p className="text-brand-surface/60 text-sm leading-relaxed">Deep command over India’s economic framework, directly aligning with core UPSC civil service subjects.</p>
                    </div>

                    {/* Awards Highlight */}
                    <div className="bg-[#002670]/40 backdrop-blur-md border border-brand-blue/50 rounded-2xl p-6 hover:bg-[#0033a0]/80 hover:border-brand-gold/50 transition duration-300 group shadow-lg flex flex-col justify-start">
                        <div className="w-14 h-14 bg-brand-gold/20 text-brand-gold rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300 group-hover:bg-brand-gold group-hover:text-[#001740] shadow-inner">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">Renowned Awardee</h4>
                        <p className="text-brand-surface/60 text-sm leading-relaxed">Recognized repeatedly with prestigious national awards for exceptional contribution to education.</p>
                    </div>

                    {/* New Delhi Main Branch */}
                    <div className="bg-gradient-to-br from-brand-red to-brand-red-dark rounded-2xl p-6 border border-brand-red-light shadow-2xl shadow-brand-red/20 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition duration-300">
                        <div className="absolute top-0 right-0 bg-black/20 backdrop-blur-md text-white border-b border-l border-white/20 text-xs font-bold px-4 py-1.5 rounded-bl-2xl">Main Branch</div>
                        <div className="relative z-10">
                            <h4 className="text-2xl font-black text-white mb-1 mt-3 group-hover:text-brand-gold-light transition-colors">New Delhi</h4>
                            <p className="text-brand-surface/90 text-sm mb-6 leading-relaxed">The historic core and main hub of our civil services preparation excellence.</p>
                        </div>
                        <button onClick={() => setSelectedAddress({ city: 'New Delhi', text: 'B-7/8, Shop-4, Bhandari House, Near UCO Bank, Mukherjee Nagar, New Delhi' })} className="bg-white text-brand-red-dark hover:bg-brand-surface font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition w-full shadow-lg hover:shadow-xl relative z-10 mt-auto">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            View Address
                        </button>
                    </div>

                    {/* Prayagraj Branch */}
                    <div className="bg-gradient-to-br from-[#004eb8] to-[#0033a0] rounded-2xl p-6 border border-brand-blue-light/50 shadow-2xl shadow-brand-blue/20 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition duration-300">
                        <div className="absolute top-0 right-0 bg-black/20 text-brand-gold-light border-b border-l border-white/10 text-xs font-bold px-4 py-1.5 rounded-bl-2xl backdrop-blur-md">New Hub</div>
                        <div className="relative z-10">
                            <h4 className="text-2xl font-black text-white mb-1 mt-3 group-hover:text-brand-gold-light transition-colors">Prayagraj</h4>
                            <p className="text-brand-surface/80 text-sm mb-6 leading-relaxed">Operating right from the heart of India's current UPSC Hub!</p>
                        </div>
                        <button onClick={() => setSelectedAddress({ city: 'Prayagraj', text: 'Opposite Swaraj Bhawan (Anand Bhawan), Salori Shukla Market, Prayagraj' })} className="bg-brand-gold hover:bg-yellow-400 text-[#001740] font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition w-full shadow-lg hover:shadow-xl relative z-10 mt-auto">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            View Address
                        </button>
                    </div>
                </div>
            </div>
        </section>



            {/* Institute History Timeline */}
            <section className="py-24 relative overflow-hidden bg-brand-surface">
                {/* --- Premium Background Effects --- */}
                <div
                    className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-multiply"
                    style={{
                        backgroundImage: `url(${bg_history})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-surface via-brand-surface/90 to-white/70 z-0"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Narrative */}
                    <div>
                        <div className="mb-10 text-left">
                            <span className="text-brand-red font-bold tracking-widest uppercase text-sm mb-3 block flex items-center gap-2">
                                <div className="w-8 h-0.5 bg-brand-red"></div>
                                Our Legacy
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-[#001740] mb-6 leading-tight">
                                A Journey from the <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001740] to-[#004eb8]">Grassroots</span> to the Capital
                            </h2>
                        </div>

                        {/* Elegent Vertical Timeline */}
                        <div className="space-y-0 relative border-l-[3px] border-gray-200 ml-4 group">
                            <div className="absolute top-0 bottom-0 left-[-3px] w-[3px] bg-gradient-to-b from-brand-gold to-brand-red origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 ease-in-out"></div>

                            <div className="relative pl-10 pb-12">
                                <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-brand-gold border-4 border-white shadow-md z-10"></span>
                                <h3 className="text-2xl font-bold text-[#001740] mb-3">2015: The Origin in Prayagraj</h3>
                                <p className="text-gray-600 text-lg leading-relaxed font-light">
                                    Founded with a clear vision to provide elite, structured guidance for UPSC aspirants. What started as a focused initiative quickly became a formidable symbol of trust, nurturing hundreds of students for India's toughest exam.
                                </p>
                            </div>

                            <div className="relative pl-10 pb-4">
                                <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#001740] border-4 border-white shadow-md z-10"></span>
                                <h3 className="text-2xl font-bold text-[#001740] mb-3">Expansion to New Delhi</h3>
                                <p className="text-gray-600 text-lg leading-relaxed font-light">
                                    Driven by incredible student success and growing demand, we scaled our presence to the absolute heart of UPSC preparation—Mukherjee Nagar, New Delhi. Here, we command a competitive ecosystem equipped with expert faculty and relentless mentorship.
                                </p>
                            </div>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="mt-14 flex flex-wrap gap-10 border-t border-gray-200 pt-10">
                            <div>
                                <h4 className="text-4xl md:text-5xl font-black text-brand-gold mb-2">2+</h4>
                                <p className="text-sm text-[#001740] font-bold uppercase tracking-widest">Premium Campuses</p>
                            </div>
                            <div>
                                <h4 className="text-4xl md:text-5xl font-black text-brand-red mb-2">10<span className="text-2xl md:text-3xl text-brand-red/70 ml-1">Yrs</span></h4>
                                <p className="text-sm text-[#001740] font-bold uppercase tracking-widest">Of Excellence</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Class Photos Collage */}
                    <div className="relative mt-10 lg:mt-0">
                        {/* Decorative Background Blob */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/30 to-brand-red/20 transform rotate-[4deg] rounded-[3rem] -z-10 translate-x-3 translate-y-6 filter blur-md"></div>

                        <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
                            <div className="space-y-4 md:space-y-6 mt-16 pb-8">
                                <div className="group relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white shadow-black/10">
                                    <div className="absolute inset-0 bg-[#001740]/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                                    <img src={classPhoto1} alt="Classroom Session" className="w-full h-64 md:h-[22rem] object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                </div>
                            </div>
                            <div className="space-y-4 md:space-y-6">
                                <div className="group relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white shadow-black/10">
                                    <div className="absolute inset-0 bg-[#001740]/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                                    <img src={classPhoto2} alt="Classroom Instruction" className="w-full h-64 md:h-[22rem] object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>

                        {/* Decorative Premium Badge */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#001740] text-white rounded-full shadow-[0_10px_40px_rgba(0,23,64,0.4)] z-20 border-4 border-white hidden md:flex flex-col items-center justify-center w-32 h-32 hover:scale-110 transition-transform duration-500 cursor-default">
                            <span className="text-4xl font-black text-brand-gold">#1</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-center leading-tight mt-1 text-white/90">Trusted<br />Institute</span>
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

            {/* NGO Section: Kartavya Educational Society */}
            <section className="py-24 bg-brand-surface relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 -m-32 w-[30rem] h-[30rem] bg-brand-gold rounded-full mix-blend-multiply filter blur-[120px] opacity-10 pointer-events-none"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-brand-red rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.08] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red-dark font-bold px-5 py-2 rounded-full text-sm mb-4 border border-brand-red/20 uppercase tracking-widest shadow-sm">
                            Our Philanthropic Initiative
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#001740] mb-6">
                            कर्तव्य एजुकेशनल सोसाइटी
                        </h2>
                        <div className="w-24 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        {/* Narrative Column */}
                        <div className="lg:col-span-7 space-y-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-brand-red-dark leading-snug">
                                Empowering the Underprivileged: A Nationwide Mission
                                <br /><span className="text-xl md:text-2xl text-[#001740] font-medium mt-3 block">गरीब और अनाथ बच्चों की शिक्षा का देशव्यापी संकल्प</span>
                            </h3>

                            <p className="text-lg text-gray-700 leading-relaxed font-light">
                                <strong className="text-[#001740] font-semibold">Kartavya Educational Society</strong> is a dedicated NGO working across India to provide free, high-quality education to orphans and underprivileged children. Driven by the belief that money should never be a barrier to learning, the society serves as a beacon of hope for thousands of students.
                                <br /><br />
                                <span className="font-bold text-brand-red px-2 py-1 bg-brand-red/10 rounded-md inline-block mb-1">New Mega Campaign (नयी मुहिम):</span><br />
                                'बेटियों की पढ़ाई — हमारी ज़िम्मेदारी' (Education for Daughters) is our latest initiative. Led by <strong className="text-[#001740] font-semibold">Dr. Kumar Mayank</strong>, this movement aims to turn every capable daughter's dream of becoming an officer into a reality, breaking all societal and financial limits.
                            </p>

                            <div className="bg-white p-8 rounded-3xl border-l-[6px] border-brand-gold shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h4 className="text-xl font-bold text-[#001740] mb-3">Turning an Unfinished Journey into Others' Success</h4>
                                <p className="text-gray-600 mb-5 leading-relaxed">
                                    Dr. Mayank himself dreamed of an administrative career (IAS). Though circumstances kept him away, he turned that into an unwavering resolution to guide others.
                                </p>
                                <p className="text-gray-800 font-medium italic border-t border-gray-100 pt-4 relative">
                                    <span className="absolute -top-3 left-4 bg-white px-2 text-brand-gold text-2xl leading-none">"</span>
                                    अगर मैं अधिकारी नहीं बन पाया, तो क्या हुआ... अब मैं देश की इतनी बेटियों को अधिकारी बनाऊँगा कि भारत का हर प्रशासनिक गलियारा उनकी सफलता की गूँज से भर जाएगा।
                                </p>
                            </div>

                            {/* Call to Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-5 mt-6">
                                <Link to="/betiyon-ki-padhai" className="group bg-brand-gold text-[#001740] font-extrabold py-4 px-8 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-[0_4px_15px_rgba(255,215,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,215,0,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 text-lg w-full sm:w-auto">
                                    <span>महा-अभियान से जुड़ें</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </Link>
                                <a href="https://wa.me/9161355675" target="_blank" rel="noopener noreferrer" className="bg-[#001740] text-white font-bold py-4 px-8 rounded-full border border-[#001740] hover:bg-[#002670] transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto">
                                    <span className="text-brand-red animate-pulse text-xl leading-none">♥</span> Join Mission WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Pillars Column */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300 border border-t-[6px] border-t-brand-red relative overflow-hidden group">
                                <h4 className="text-xl font-bold text-[#001740] mb-4 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center font-black group-hover:scale-110 transition-transform">1</div>
                                    Pan-India Reach (संपूर्ण भारत)
                                </h4>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Our NGO is spread across India, actively finding and helping poor and orphaned children achieve quality education without any cost.
                                </p>
                                <p className="text-[#001740] font-semibold text-sm bg-gray-50 p-3 rounded-xl border border-gray-100">
                                    संपूर्ण भारत में गरीब और अनाथ बच्चों को मुफ्त शिक्षा प्रदान करना हमारी सबसे बड़ी प्राथमिकता है।
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300 border border-t-[6px] border-t-brand-gold relative overflow-hidden group">
                                <h4 className="text-xl font-bold text-[#001740] mb-4 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 text-[#001740] flex items-center justify-center font-black group-hover:scale-110 transition-transform">2</div>
                                    Our New Initiative (नई मुहिम)
                                </h4>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    With our new "Betiyon Ki Padhai" mission, we act as a shield for talented daughters facing a lack of resources for UPSC preparation.
                                </p>
                                <p className="text-[#001740] font-semibold text-sm bg-gray-50 p-3 rounded-xl border border-gray-100">
                                    आर्थिक तंगी कभी भी बेटियों के सपनों के आड़े नहीं आनी चाहिए। 'बेटियों की पढ़ाई' हमारी नई मुहिम है।
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Closing Section Quote */}
                    <div className="mt-20 max-w-5xl mx-auto bg-gradient-to-br from-[#001740] to-[#002670] rounded-[2.5rem] p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden border border-[#001740]/50">
                        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-brand-gold text-7xl opacity-50 select-none font-serif">"</div>

                        <p className="text-xl md:text-3xl font-light italic leading-relaxed mb-8 relative z-10">
                            "मेरा सपना अधूरा रहा तो क्या हुआ, अब देश की हर बेटी का सपना मेरा अपना है। जब वे अधिकारी बनकर अपने माँ-बाप का नाम रोशन करेंगी, तो समझूँगा मेरा सपना पूरा हो गया।"
                        </p>

                        <div className="flex flex-col items-center justify-center gap-3 relative z-10">
                            <div className="w-16 h-[2px] bg-brand-red"></div>
                            <p className="font-bold tracking-widest uppercase text-brand-gold text-sm md:text-base">— Dr. Kumar Mayank</p>
                            <p className="text-sm text-gray-400 uppercase tracking-widest mt-1">Founder, Kartavya Educational Society</p>
                        </div>
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
                <div className="max-w-5xl mx-auto px-6 text-center">

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

                        {/* Media Section: Podcast */}
                        <div className="mt-14 max-w-4xl mx-auto bg-gray-50 p-4 md:p-8 rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-bold text-[#001740] mb-6 text-center">Watch Podcast on UPSC Strategy</h3>
                            <div className="relative w-full overflow-hidden rounded-2xl shadow-inner border border-gray-200" style={{ paddingTop: '56.25%' }}>
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/g_oKF6J-C60"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen>
                                </iframe>
                            </div>
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
            {/* Popup Modal for Branch Addresses */}
            {selectedAddress && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
                    <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl transform transition-transform scale-100 opacity-100 border border-gray-100 relative">
                        {/* Close button */}
                        <button 
                            onClick={() => setSelectedAddress(null)} 
                            className="absolute top-4 right-4 text-gray-400 hover:text-brand-red bg-gray-50 hover:bg-brand-red/10 h-8 w-8 rounded-full flex items-center justify-center transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        
                        <div className="flex justify-center mb-5">
                            <div className="w-14 h-14 bg-brand-gold/20 text-[#001740] rounded-2xl flex items-center justify-center">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                        </div>
                        
                        <h3 className="text-2xl font-black text-[#001740] text-center mb-2">
                            {selectedAddress.city} Campus
                        </h3>
                        
                        <div className="w-12 h-1 bg-brand-red mx-auto rounded-full mb-6"></div>
                        
                        <p className="text-gray-600 text-center text-lg leading-relaxed mb-8">
                            {selectedAddress.text}
                        </p>
                        
                        <button 
                            onClick={() => setSelectedAddress(null)} 
                            className="w-full bg-[#001740] text-white font-bold py-3 px-4 rounded-xl hover:bg-[#002670] transition-colors shadow-lg"
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AboutPage;
