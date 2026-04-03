import React, { useState } from 'react';

const QuizPlayer = ({ quiz, onBack }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleAnswerClick = (option) => {
        if (isAnswered) return;
        setSelectedOption(option);
        setIsAnswered(true);
        if (option === quiz.questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quiz.questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowScore(true);
        }
    };

    const currentQ = quiz.questions[currentQuestion];

    return (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden p-8">
                <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-4">
                    <h2 className="text-xl font-black text-brand-blue-dark">{quiz.title}</h2>
                    <button onClick={onBack} className="text-gray-400 hover:text-brand-red font-black">✕ Close</button>
                </div>

                {showScore ? (
                    <div className="text-center py-10 animate-fadeIn">
                        <div className="text-6xl mb-6">🏆</div>
                        <h3 className="text-3xl font-black text-gray-900 mb-2">Quiz Completed!</h3>
                        <p className="text-gray-500 font-bold mb-8">You scored {score} out of {quiz.questions.length}</p>
                        <div className="bg-brand-surface p-6 rounded-2xl mb-10 border border-brand-gold/20">
                            <div className="text-4xl font-black text-brand-gold mb-2">{Math.round((score / quiz.questions.length) * 100)}%</div>
                            <p className="text-xs font-black uppercase text-gray-500">Overall Accuracy</p>
                        </div>
                        <button
                            onClick={onBack}
                            className="w-full py-4 bg-brand-blue text-white rounded-xl font-black shadow-lg hover:-translate-y-1 transition-all"
                        >
                            Back to Course
                        </button>
                    </div>
                ) : (
                    <div className="space-y-8 animate-fadeIn">
                        {/* Progress Bar */}
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-brand-gold transition-all duration-500"
                                    style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
                                ></div>
                            </div>
                            <span className="text-sm font-black text-gray-400">{currentQuestion + 1}/{quiz.questions.length}</span>
                        </div>

                        <h3 className="text-xl font-black text-gray-800 leading-tight">
                            {currentQ.questionText}
                        </h3>

                        <div className="space-y-3">
                            {currentQ.options.map((option, index) => {
                                let bgColor = "hover:bg-gray-50";
                                let borderColor = "border-gray-100";

                                if (isAnswered) {
                                    if (option === currentQ.correctAnswer) {
                                        bgColor = "bg-green-100 text-green-800";
                                        borderColor = "border-green-500";
                                    } else if (option === selectedOption) {
                                        bgColor = "bg-red-100 text-red-800";
                                        borderColor = "border-red-500";
                                    } else {
                                        bgColor = "opacity-50";
                                    }
                                } else if (selectedOption === option) {
                                    borderColor = "border-brand-blue bg-brand-blue/5";
                                }

                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerClick(option)}
                                        disabled={isAnswered}
                                        className={`w-full text-left p-4 rounded-xl border-2 font-bold transition-all flex items-center gap-4 ${bgColor} ${borderColor}`}
                                    >
                                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black ${isAnswered && option === currentQ.correctAnswer ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                                            {String.fromCharCode(65 + index)}
                                        </span>
                                        {option}
                                    </button>
                                );
                            })}
                        </div>

                        {isAnswered && (
                            <div className="bg-brand-surface p-6 rounded-2xl border border-blue-100 animate-fadeInUp">
                                <p className="text-xs font-black text-brand-blue uppercase mb-2">Detailed Explanation:</p>
                                <p className="text-sm text-gray-700 font-medium leading-relaxed">
                                    {currentQ.explanation || 'The correct answer is Option ' + (currentQ.options.findIndex(o => o === currentQ.correctAnswer) + 1) + '.'}
                                </p>
                                <button
                                    onClick={handleNext}
                                    className="w-full mt-6 py-4 bg-brand-blue-dark text-white rounded-xl font-bold shadow-lg hover:bg-brand-blue transition-all"
                                >
                                    {currentQuestion + 1 === quiz.questions.length ? "View Results" : "Next Question →"}
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizPlayer;
