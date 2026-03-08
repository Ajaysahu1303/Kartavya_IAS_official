import React, { useState, useEffect } from 'react';

function CurrentAffairs() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Fallback data in case the backend/DB is not running (great for portfolio purely)
    const [fallbackData] = useState([
        {
            _id: '1',
            title: 'India-Middle East-Europe Economic Corridor (IMEC)',
            content: 'A massive geo-economic initiative aimed at fostering connectivity and economic integration between Asia, the Arabian Gulf, and Europe.',
            category: 'General Studies 2',
            date: new Date().toISOString(),
            source: 'The Hindu'
        },
        {
            _id: '2',
            title: 'Aditya-L1 Solar Mission Insights',
            content: 'ISRO’s first space-based observatory to study the Sun from a halo orbit around the Sun-Earth Lagrangian point (L1).',
            category: 'General Studies 3',
            date: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
            source: 'Indian Express'
        },
        {
            _id: '3',
            title: 'Women\'s Reservation Bill: Nari Shakti Vandan Adhiniyam',
            content: 'An analysis of the historic bill providing 33% reservation for women in the Lok Sabha and State Legislative Assemblies.',
            category: 'General Studies 2',
            date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
            source: 'PIB'
        }
    ]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/current-affairs');
                const result = await response.json();

                if (response.ok && result.data.length > 0) {
                    setNews(result.data);
                } else {
                    // Fallback to static data if no data yet
                    setNews(fallbackData);
                }
            } catch (err) {
                console.error('Cannot connect to API, using fallback data.');
                setError(true);
                setNews(fallbackData);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [fallbackData]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <section id="current-affairs" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-extrabold text-brand-gold tracking-widest uppercase mb-3">Daily Updates</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-brand-surface mb-6">Current <span className="text-brand-red">Affairs</span> Hub</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Stay ahead in your UPSC preparation with our expertly curated daily news analysis and important editorials.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((item) => (
                            <div key={item._id} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-brand-blue/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="bg-brand-blue/10 text-brand-blue text-xs font-bold px-3 py-1 rounded-full">
                                        {item.category}
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        {formatDate(item.date)}
                                    </span>
                                </div>

                                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">
                                    {item.title}
                                </h4>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {item.content}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold text-xs font-bold">
                                            {item.source.charAt(0)}
                                        </div>
                                        <span className="text-xs font-medium text-gray-500">{item.source}</span>
                                    </div>

                                    <button className="text-brand-red text-sm font-bold hover:text-brand-red-light transition-colors flex items-center gap-1 group/btn">
                                        Read More
                                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-16 text-center">
                    <button className="bg-transparent border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300">
                        View All Current Affairs
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CurrentAffairs;
