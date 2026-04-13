import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const categories = [
    'History', 'Geography', 'Polity', 'economics',
    'Science & Tech', 'Environment', 'Current Affairs',
    'Ethics', 'Essay', 'CSAT'
];

const categoryIcons = {
    'History': '🏛️', 'Geography': '🌍', 'Polity': '⚖️', 'economics': '📊',
    'Science & Tech': '🔬', 'Environment': '🌱', 'Current Affairs': '📰',
    'Ethics': '🧭', 'Essay': '✍️', 'CSAT': '🧮'
};

const DemoPdfsPage = () => {
    const [materials, setMaterials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const fetchMaterials = async (cat) => {
        setLoading(true);
        try {
            const res = await fetch(`${API_BASE}/api/demo-materials?category=${encodeURIComponent(cat)}`);
            const data = await res.json();
            if (data.success) {
                setMaterials(data.data);
            }
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const startCategory = (cat) => {
        setSelectedCategory(cat);
        fetchMaterials(cat);
    };

    const resetCategory = () => {
        setSelectedCategory(null);
        setMaterials([]);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-[#001740] py-4 px-6 text-white shadow-lg">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="text-sm font-bold flex items-center gap-2 hover:text-brand-gold transition-colors">
                        ← Back to Home
                    </Link>
                    <h1 className="font-black text-xl tracking-tight">KARTAVYA <span className="text-brand-gold">FREE PDFs</span></h1>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-start p-6 pt-12 bg-gradient-to-br from-gray-50 to-blue-50">
                {!selectedCategory ? (
                    <div className="max-w-5xl w-full">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-1.5 bg-brand-red text-white text-[10px] font-black uppercase rounded-full mb-4 shadow-lg shadow-brand-red/30">Free Notes</span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue">Subject</span></h2>
                            <p className="text-gray-500 font-medium max-w-xl mx-auto">Select a subject to download free demonstration PDFs and study materials provided by our expert faculty.</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => startCategory(cat)}
                                    className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all text-center overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                                            <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{categoryIcons[cat] || '📄'}</span>
                                        </div>
                                        <h4 className="font-black text-xs text-gray-800 uppercase tracking-widest group-hover:text-white transition-colors">{cat}</h4>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="max-w-5xl w-full">
                        <div className="flex items-center gap-4 mb-8">
                            <button
                                onClick={resetCategory}
                                className="bg-white border border-gray-200 text-gray-700 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                All Subjects
                            </button>
                            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                                <span className="text-4xl mr-2">{categoryIcons[selectedCategory] || '📄'}</span>
                                {selectedCategory} Materials
                            </h2>
                        </div>

                        {loading ? (
                            <div className="text-center py-20">
                                <div className="inline-block w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
                                <p className="mt-4 text-gray-500 font-medium">Loading materials...</p>
                            </div>
                        ) : materials.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                                <span className="text-6xl block mb-4">📄</span>
                                <h3 className="text-2xl font-bold text-gray-700 mb-2">Coming Soon!</h3>
                                <p className="text-gray-500 font-medium">Demo materials for {selectedCategory} will be added shortly.</p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {materials.map((m) => (
                                    <div key={m._id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group flex flex-col">
                                        <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-2xl mb-4">
                                            📕
                                        </div>
                                        <h3 className="text-lg font-black text-gray-800 line-clamp-2 mb-2">{m.title}</h3>
                                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-500 text-[10px] uppercase font-bold w-fit rounded-md mb-4">{m.category}</span>
                                        <div className="mt-auto pt-6 border-t border-gray-50">
                                            <a
                                                href={(m.fileUrl || '').startsWith('http') ? m.fileUrl : `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${m.fileUrl || ''}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full py-3 bg-brand-blue/10 text-brand-blue font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-blue hover:text-white transition-all text-sm"
                                            >
                                                View PDF 👁️
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="py-6 px-6 bg-white border-t border-gray-100 mt-auto">
                <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">© {new Date().getFullYear()} Kartavya IAS Academy</p>
            </div>
        </div>
    );
};

export default DemoPdfsPage;
