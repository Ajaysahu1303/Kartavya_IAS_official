import React, { useState } from "react";
import poster from "../Assets/betiyan/poster.jpg";
import betiyanVideo from "../Assets/betiyan/IMG_3107.MOV";
import aboutVideo from "../Assets/About_Shorts/IMG_2969.MOV";
import { Link } from "react-router-dom";

function BetiyanPage() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const videoSlides = [
        { src: betiyanVideo, label: "अभियान संदेश" },
        { src: aboutVideo, label: "संस्थापक का संदेश" }
    ];
    return (
        <div className="bg-brand-surface">
            {/* HERO BANNER */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#001740] text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold rounded-full blur-[100px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-block bg-brand-gold/10 text-brand-gold font-bold px-4 py-2 rounded-full mb-6 border border-brand-gold/30">
                            कर्तव्य एजुकेशनल सोसाइटी
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                            बेटियों की पढ़ाई — <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
                                हमारा कर्तव्य
                            </span>
                        </h1>
                        <p className="text-xl text-brand-surface/80 leading-relaxed mb-8 font-light">
                            संदेश: आर्थिक सीमाओं को तोड़कर, बेटियों के सपनों को उड़ान देना। 
                            हम हर उस बेटी के साथ खड़े हैं जिसके पास संकल्प है, मेहनत है और देश की सेवा करने का जज्बा है।
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://wa.me/9161355675" target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-[#001740] font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors shadow-lg shadow-brand-gold/20">
                                Join Mission
                            </a>
                            <a href="#mission" className="bg-white/10 text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 transition-colors border border-white/20">
                                और जानें
                            </a>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold to-brand-red rounded-3xl transform rotate-3 scale-105 opacity-50 group-hover:rotate-6 transition-transform duration-500 blur-sm"></div>
                        <img 
                            src={poster} 
                            alt="Free Education for Girls" 
                            className="relative rounded-3xl shadow-2xl w-full object-cover border-4 border-[#001740]/50 transform group-hover:-translate-y-2 transition-transform duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* MISSION STATEMENT */}
            <section id="mission" className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Text Column */}
                    <div className="lg:col-span-7">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#001740] mb-10 text-center lg:text-left">
                            डॉ. कुमार मयंक का संकल्प
                        </h2>
                        
                        <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden text-left">
                            <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
                            
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                डॉ. कुमार मयंक का एक ही संकल्प है—<span className="font-bold text-brand-red">"देश की हर बेटी बने अधिकारी"</span>। उनका दृढ़ विश्वास है कि प्रतिभा किसी सुख-सुविधा की मोहताज नहीं होती, और आर्थिक तंगी के कारण किसी भी बेटी की शिक्षा या उसके अधिकारी बनने का सपना अधूरा नहीं रहना चाहिए।
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                अक्सर देखा जाता है कि कई प्रतिभाशाली बेटियाँ केवल संसाधनों के अभाव में अपने सपनों का त्याग कर देती हैं। डॉ. मयंक इस व्यवस्था को बदलना चाहते हैं। उनका विचार है कि:
                            </p>

                            <div className="space-y-6 my-10">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 shrink-0 bg-brand-blue-light/10 text-[#001740] rounded-full flex items-center justify-center font-bold text-xl">1</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#001740] mb-2">आर्थिक बाधाओं का अंत</h4>
                                        <p className="text-gray-600 leading-relaxed">परिवार की माली हालत कभी भी एक बेटी के प्रशासनिक सेवाओं (IAS/PCS) में जाने के रास्ते का पत्थर नहीं बननी चाहिए।</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 shrink-0 bg-brand-blue-light/10 text-[#001740] rounded-full flex items-center justify-center font-bold text-xl">2</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#001740] mb-2">समान अवसर</h4>
                                        <p className="text-gray-600 leading-relaxed">समाज के अंतिम पायदान पर खड़ी बेटी को भी वही उच्च स्तरीय मार्गदर्शन और संसाधन मिलने चाहिए जो किसी संपन्न परिवार की बेटी को मिलते हैं。</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 shrink-0 bg-brand-blue-light/10 text-[#001740] rounded-full flex items-center justify-center font-bold text-xl">3</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#001740] mb-2">राष्ट्र निर्माण</h4>
                                        <p className="text-gray-600 leading-relaxed">जब अभावों से लड़कर एक बेटी अधिकारी बनती है, तो वह व्यवस्था में अधिक संवेदनशीलता और मजबूती लेकर आती है。</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-brand-red/5 p-6 rounded-2xl border border-brand-red/10 mt-8 relative">
                                <div className="text-6xl text-brand-red/20 font-serif absolute top-2 left-4 -z-10 leading-none">"</div>
                                <p className="text-lg lg:text-xl font-light italic text-[#001740] leading-relaxed text-center z-10 relative">
                                    पैसे की कमी शिक्षा का अंत नहीं हो सकती; हम हर उस बेटी के साथ खड़े हैं जिसके पास संकल्प है, मेहनत है और देश की सेवा करने का जज्बा है।
                                </p>
                                <p className="text-center font-bold text-brand-red mt-4">— डॉ. कुमार मयंक</p>
                            </div>
                        </div>
                    </div>

                    {/* Video Column */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-start mt-12 lg:mt-0 lg:pl-4">
                        <div className="flex flex-col items-center">
                            <div className="relative group w-full max-w-[320px]">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold to-brand-red rounded-3xl transform rotate-3 scale-105 opacity-40 group-hover:-rotate-3 transition-transform duration-500 blur-sm"></div>
                                <div className="relative bg-[#001740] rounded-3xl p-2 shadow-2xl border border-[#001740]/20 z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                                    <div className="relative bg-black rounded-2xl overflow-hidden aspect-[9/16] shadow-inner">
                                        <video 
                                            key={videoSlides[currentVideoIndex].src}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer" 
                                            controls 
                                            playsInline
                                        >
                                            <source src={videoSlides[currentVideoIndex].src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    
                                    {/* Badge overlay */}
                                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white text-[#001740] font-black px-6 py-2 rounded-full shadow-lg border border-gray-100 whitespace-nowrap hidden sm:flex items-center transition-all duration-300">
                                        <span className="text-brand-red animate-pulse mr-2 text-xl leading-none">●</span> {videoSlides[currentVideoIndex].label}
                                    </div>
                                </div>
                            </div>

                            {/* Slider Controls */}
                            <div className="flex gap-4 mt-12">
                                {videoSlides.map((_, index) => (
                                    <button 
                                        key={index}
                                        onClick={() => setCurrentVideoIndex(index)}
                                        className={`h-3 rounded-full transition-all duration-300 ${currentVideoIndex === index ? 'bg-brand-red w-10 shadow-md' : 'bg-gray-300 w-3 hover:bg-gray-400'}`}
                                        aria-label={`Slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#001740] mb-4">
                            इस अभियान से कैसे जुड़ें?
                        </h2>
                        <div className="w-16 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-gray-50 rounded-3xl p-8 text-center border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-20 h-20 bg-brand-red text-white flex items-center justify-center rounded-2xl mx-auto mb-6 shadow-lg shadow-brand-red/30">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#001740] mb-3">1. योग्यता</h3>
                            <p className="text-gray-600">यह पहल उन छात्राओं के लिए है जो 12वीं (12th Pass) पास कर चुकी हैं और सिविल सेवाओं की तैयारी करना चाहती हैं।</p>
                        </div>
                        
                        {/* Step 2 */}
                        <div className="bg-gray-50 rounded-3xl p-8 text-center border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-20 h-20 bg-brand-gold text-[#001740] flex items-center justify-center rounded-2xl mx-auto mb-6 shadow-lg shadow-brand-gold/30">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#001740] mb-3">2. आवेदन करें</h3>
                            <p className="text-gray-600">संस्थान में संपर्क कर या दिए गए फोन नंबर (9161355675) पर कॉल करके आवेदन प्रक्रिया पूरी करें।</p>
                        </div>
                        
                        {/* Step 3 */}
                        <div className="bg-gray-50 rounded-3xl p-8 text-center border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-20 h-20 bg-[#001740] text-white flex items-center justify-center rounded-2xl mx-auto mb-6 shadow-lg shadow-[#001740]/30">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#001740] mb-3">3. निशुल्क शिक्षा</h3>
                            <p className="text-gray-600">चयनित छात्राओं को Kartavya IAS द्वारा ऑफलाइन और ऑनलाइन माध्यम से निशुल्क उच्च स्तरीय मार्गदर्शन मिलेगा।</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SELECTED STUDENTS GALLERY */}
            <section className="py-20 lg:py-28 bg-brand-surface">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-brand-red font-bold tracking-wider uppercase mb-2 block">Our Pride</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#001740] mb-4">
                            चयनित छात्राएं (Selected Students)
                        </h2>
                        <div className="w-16 h-1.5 bg-brand-gold mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            इन होनहार बेटियों ने अपनी मेहनत से साबित किया है कि सही मार्गदर्शन मिले तो कोई भी लक्ष्य बड़ा नहीं होता।
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                                <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                                    {/* Placeholder for student photo */}
                                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                                        <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                                    </div>
                                    <img 
                                        src={`/student-placeholder-${item}.jpg`} 
                                        alt={`Selected Student ${item}`}
                                        className="w-full h-full object-cover relative z-10 opacity-0 transition-opacity duration-300" 
                                        // TODO: Remove opacity-0 when real images are added
                                    />
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
                                        <div className="text-xs text-brand-gold font-bold mb-1">SELECTED</div>
                                        <h4 className="text-white font-bold text-lg">Student Name {item}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-20 bg-gradient-to-br from-[#001740] to-[#002670] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                        आइए, डॉ. कुमार मयंक के इस <span className="text-brand-gold">महा-अभियान</span> से जुड़ें
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
                        भारत की हर बेटी को सशक्त, समर्थ और 'अधिकारी' बनाने के इस सपने को साकार करें।
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <a href="https://wa.me/9161355675" target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-[#001740] font-bold py-4 px-10 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-xl shadow-brand-gold/20 flex items-center justify-center gap-2 text-lg">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c5.506 0 9.998 4.474 9.998 9.97 0 5.518-4.492 10.028-9.998 10.028-1.748 0-3.415-.436-4.908-1.261l-5.114 1.34 1.365-4.981A9.85 9.85 0 012.014 11.97C2.014 6.474 6.506 2 12.012 2zm0 1.631c-4.606 0-8.367 3.742-8.367 8.339 0 1.764.551 3.425 1.543 4.8l-1.01 3.733 3.84-1.002a8.212 8.212 0 004.094 1.077c4.605 0 8.367-3.743 8.367-8.339 0-4.597-3.762-8.339-8.367-8.339zm3.567 11.173c.196.098 1.168.572 1.348.653.18.082.311.123.442.31.131.187.507.653.621.785.115.13.23.147.426.245.834.408 2.012.164 2.192.164.18 0 .589-.228.704-.49.115-.262.115-.49.082-.539-.033-.049-.115-.082-.311-.18l-1.348-.654c-.164-.082-.377-.18-.54-.082-.59.349-1.066.865-1.574.654-.508-.212-1.637-.604-2.686-1.536-.88-.785-1.39-1.55-1.554-1.83-.164-.28-.016-.407.082-.505.082-.082.196-.23.294-.343.098-.114.131-.196.196-.327.065-.13.033-.245-.016-.343-.049-.098-.442-1.062-.605-1.455-.164-.392-.328-.343-.442-.343-.115 0-.246-.016-.377-.016-.131 0-.344.049-.524.245-.18.196-.688.67-.688 1.634s.704 1.895.803 2.026c.098.131 1.408 2.124 3.393 2.973.541.229.967.36 1.295.458.541.163 1.033.147 1.425.082h.001z"/></svg>
                            Join as a Student
                        </a>
                        <Link to="/contact" className="bg-white/10 text-white border border-white/20 font-bold py-4 px-10 rounded-full hover:bg-white/20 transition-all duration-300 text-lg">
                            Contact Foundation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BetiyanPage;
