"use client";

import { useState, useEffect } from 'react';

export default function FocusGame() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      setGameOver(true);
    }
  }, [timeLeft]);

  const handleClick = () => {
    if (!gameOver) {
      setScore(score + 1);
    }
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Focus Game</h2>
      <p className="mb-4">Click the button as many times as you can in 30 seconds!</p>
      <button
        onClick={handleClick}
        className={`mt-4 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-transform duration-300 ${gameOver ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-110'}`}
        disabled={gameOver}
      >
        Click Me!
      </button>
      <p className="mt-4 text-lg">Score: <span className="font-bold">{score}</span></p>
      <p className="mt-2 text-lg">Time Left: <span className="font-bold">{timeLeft}s</span></p>
      {gameOver && <p className="mt-2 text-red-500 font-bold">Game Over! Your final score is {score}.</p>}
    </div>
  );
}