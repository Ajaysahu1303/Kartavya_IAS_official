import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const categoryMeta = {
    'History': { icon: '🏛️', color: 'from-amber-500 to-orange-600' },
    'Geography': { icon: '🌍', color: 'from-green-500 to-emerald-600' },
    'Polity': { icon: '⚖️', color: 'from-blue-500 to-indigo-600' },
    'Economy': { icon: '📊', color: 'from-violet-500 to-purple-600' },
    'Science & Tech': { icon: '🔬', color: 'from-cyan-500 to-teal-600' },
    'Environment': { icon: '🌱', color: 'from-lime-500 to-green-600' },
    'Current Affairs': { icon: '📰', color: 'from-red-500 to-rose-600' },
    'Ethics': { icon: '🧭', color: 'from-sky-500 to-blue-600' },
    'CSAT': { icon: '✍️', color: 'from-fuchsia-500 to-pink-600' },
    'All': { icon: '🧮', color: 'from-yellow-500 to-amber-600' },
};

// All possible categories even if no videos yet
const allCategories = Object.keys(categoryMeta);

const QuizPage = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [quizStarted, setQuizStarted] = useState(false);

    const categories = [
        'History', 'Geography', 'Polity', 'Economy',
        'Science & Tech', 'Environment', 'Current Affairs',
        'Ethics', 'CSAT', 'All'
    ];

    const fetchQuizzes = async (cat) => {
        setLoading(true);
        try {
            const res = await fetch(`${API_BASE}/api/demo-quizzes?category=${encodeURIComponent(cat)}`);
            const data = await res.json();
            if (data.success) {
                setQuizzes(data.data);
            }
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const startQuiz = (cat) => {
        setSelectedCategory(cat);
        fetchQuizzes(cat);
        setQuizStarted(true);
        setCurrentQuizIndex(0);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setScore(0);
    };

    const handleAnswerClick = (index) => {
        if (isAnswered) return;
        setSelectedAnswer(index);
        setIsAnswered(true);
        if (index === quizzes[currentQuizIndex].correctOption) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        setCurrentQuizIndex(currentQuizIndex + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
    };

    const resetQuiz = () => {
        setQuizStarted(false);
        setSelectedCategory(null);
        setQuizzes([]);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Nav Header */}
            <div className="bg-[#001740] py-4 px-6 text-white shadow-lg">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="text-sm font-bold flex items-center gap-2 hover:text-brand-gold transition-colors">
                        ← Back to Home
                    </Link>
                    <h1 className="font-black text-xl tracking-tight">KARTAVYA <span className="text-brand-gold">MCQ PORTAL</span></h1>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-blue-50">
                {!quizStarted ? (
                    <div className="max-w-4xl w-full">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-1.5 bg-brand-red text-white text-[10px] font-black uppercase rounded-full mb-4 shadow-lg shadow-brand-red/30">Practice Daily</span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue">Battlefield</span></h2>
                            <p className="text-gray-500 font-medium max-w-xl mx-auto">Select a subject to start your practice session. Each set contains the latest patterns of UPSC questions.</p>
                        </div>

                        {/* Category Grid */}
                        {!selectedCategory && (
                            <div className="max-w-6xl mx-auto px-6 pb-20">
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                                    {allCategories.map((cat) => {
                                        const meta = categoryMeta[cat];
                                        return (
                                            <button
                                                key={cat}
                                                onClick={() => startQuiz(cat)}
                                                className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden"
                                            >
                                                <div className={`absolute inset-0 bg-gradient-to-br ${meta.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                                <div className="relative z-10">
                                                    <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform duration-300">{meta.icon}</span>
                                                    <h4 className="font-bold text-gray-800 group-hover:text-white transition-colors text-sm">{cat}</h4>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                ) : loading ? (
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Preparing your quiz...</p>
                    </div>
                ) : quizzes.length === 0 ? (
                    <div className="max-w-md w-full text-center bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
                        <span className="text-6xl mb-6 block">🧩</span>
                        <h3 className="text-2xl font-black text-gray-800 mb-2">Coming Soon!</h3>
                        <p className="text-gray-500 font-medium mb-8">We are still uploading the latest questions for {selectedCategory}.</p>
                        <button onClick={resetQuiz} className="w-full py-4 bg-brand-blue text-white rounded-2xl font-black shadow-lg">Try Another Subject</button>
                    </div>
                ) : currentQuizIndex >= quizzes.length ? (
                    <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 text-center animate-fadeIn">
                        <div className="w-24 h-24 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">🏆</div>
                        <h3 className="text-3xl font-black text-gray-900 mb-2">Quiz Finished!</h3>
                        <p className="text-gray-500 font-bold mb-6 italic">Subject: {selectedCategory}</p>

                        <div className="flex justify-center items-center gap-2 mb-8 bg-gray-50 p-6 rounded-2xl">
                            <span className="text-5xl font-black text-brand-blue">{score}</span>
                            <span className="text-2xl font-bold text-gray-300">/</span>
                            <span className="text-2xl font-black text-gray-400">{quizzes.length}</span>
                        </div>

                        <div className="flex gap-4">
                            <button onClick={resetQuiz} className="flex-1 py-4 bg-brand-blue text-white rounded-2xl font-black shadow-lg hover:-translate-y-1 transition-all">Topics</button>
                            <button onClick={() => startQuiz(selectedCategory)} className="flex-1 py-4 border-2 border-brand-blue text-brand-blue rounded-2xl font-black hover:bg-brand-blue hover:text-white transition-all">Retake</button>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-3xl w-full">
                        <div className="mb-8 flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase rounded-lg">{selectedCategory}</span>
                                <span className="text-xs text-gray-400 font-bold">Progress: {currentQuizIndex + 1} / {quizzes.length}</span>
                            </div>
                            <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-brand-blue transition-all duration-500"
                                    style={{ width: `${((currentQuizIndex + 1) / quizzes.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                <span className="text-8xl font-black">?</span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed mb-10">
                                {quizzes[currentQuizIndex].question}
                            </h3>

                            <div className="grid gap-4">
                                {quizzes[currentQuizIndex].options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        disabled={isAnswered}
                                        onClick={() => handleAnswerClick(idx)}
                                        className={`w-full p-5 rounded-2xl text-left font-bold transition-all relative flex items-center justify-between group ${isAnswered
                                            ? idx === quizzes[currentQuizIndex].correctOption
                                                ? 'bg-green-500 text-white shadow-lg shadow-green-200'
                                                : selectedAnswer === idx
                                                    ? 'bg-red-500 text-white shadow-lg shadow-red-200'
                                                    : 'bg-gray-50 text-gray-400 border border-gray-100'
                                            : 'bg-gray-50 hover:bg-brand-blue hover:text-white border border-gray-100 hover:shadow-xl hover:-translate-x-2'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs ${isAnswered && idx === quizzes[currentQuizIndex].correctOption ? 'bg-white/20' : 'bg-white shadow-sm text-gray-500'
                                                }`}>
                                                {String.fromCharCode(65 + idx)}
                                            </span>
                                            {option}
                                        </div>
                                        {isAnswered && idx === quizzes[currentQuizIndex].correctOption && (
                                            <span className="text-xs uppercase font-black">✓ Correct</span>
                                        )}
                                        {isAnswered && selectedAnswer === idx && idx !== quizzes[currentQuizIndex].correctOption && (
                                            <span className="text-xs uppercase font-black">✗ Incorrect</span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {isAnswered && (
                                <div className="mt-10 animate-slideUp">
                                    {quizzes[currentQuizIndex].explanation && (
                                        <div className="bg-blue-50 p-6 rounded-2xl mb-8 border border-blue-100">
                                            <h5 className="text-sm font-black text-brand-blue uppercase mb-2">Explanation:</h5>
                                            <p className="text-sm text-gray-700 font-medium leading-relaxed">{quizzes[currentQuizIndex].explanation}</p>
                                        </div>
                                    )}
                                    <button
                                        onClick={nextQuestion}
                                        className="w-full py-5 bg-[#001740] text-white rounded-2xl font-black shadow-2xl hover:bg-brand-blue transition-colors flex items-center justify-center gap-2 group"
                                    >
                                        {currentQuizIndex === quizzes.length - 1 ? 'See Results 🏅' : 'Next Question'}
                                        <span className="group-hover:translate-x-2 transition-transform">→</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Simple Footer */}
            <div className="py-6 px-6 bg-white border-t border-gray-100">
                <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">© 2026 Kartavya IAS Academy - Knowledge is Power</p>
            </div>
        </div>
    );
};

export default QuizPage;
