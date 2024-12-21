'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const handSigns = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const TOTAL_QUESTIONS = 5;

export default function Quiz() {
    const [score, setScore] = useState(0);
    const [currentSign, setCurrentSign] = useState('');
    const [userAnswer, setUserAnswer] = useState('');
    const [resultMessage, setResultMessage] = useState('');
    const [questionCount, setQuestionCount] = useState(0);
    const [quizComplete, setQuizComplete] = useState(false);

    const generateRandomSign = () => {
        const randomIndex = Math.floor(Math.random() * handSigns.length);
        setCurrentSign(handSigns[randomIndex]);
    };

    useEffect(() => {
        generateRandomSign();
    }, []);

    const handleSubmitAnswer = () => {
        if (userAnswer.toUpperCase() === currentSign) {
            setScore(score + 1);
            setResultMessage('Correct! Well done.');
        } else {
            setResultMessage(`Wrong! The correct answer is ${currentSign}.`);
        }

        if (questionCount + 1 < TOTAL_QUESTIONS) {
            setQuestionCount(questionCount + 1);
            generateRandomSign();
            setUserAnswer('');
        } else {
            setQuizComplete(true);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Identify the Hand Sign</h2>
            {!quizComplete ? (
                <>
                    <img
                        src={`/images/handGestures/${currentSign}.png`}
                        alt="Hand Sign"
                        className="w-24 h-24 object-contain rounded-lg shadow-md mb-4"
                    />
                    <input
                        type="text"
                        placeholder="Enter your answer (A-Z)"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        className="px-4 py-2 border border-gray-800 rounded-lg mb-4 text-gray-950"
                    />
                    <button
                        onClick={handleSubmitAnswer}
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        Submit Answer
                    </button>
                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{resultMessage}</p>
                    <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">Score: {score}</p>
                    <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">Question: {questionCount + 1} / {TOTAL_QUESTIONS}</p>
                </>
            ) : (
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-green-600">Quiz Complete!</h3>
                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Your final score is {score} out of {TOTAL_QUESTIONS}</p>
                </div>
            )}
            <div className="flex justify-center mt-8">
                <Link href="/deaf-dumb/lesson">
                    <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                        Go Back to Lessons
                    </button>
                </Link>
            </div>
        </div>
    );
}