"use client";

import { useState, useEffect } from 'react';

export default function FocusGame() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds
  const [gameOver, setGameOver] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' });

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      setGameOver(true);
    }
  }, [timeLeft]);

  const handleClick = () => {
    if (!gameOver) {
      setScore((prevScore) => prevScore + 1);
      moveButton();
    }
  };

  const moveButton = () => {
    const box = document.getElementById('game-box');
    const boxWidth = box.clientWidth;
    const boxHeight = box.clientHeight;
    const buttonWidth = 100; // Approximate button width
    const buttonHeight = 50; // Approximate button height

    const newTop = Math.random() * (boxHeight - buttonHeight);
    const newLeft = Math.random() * (boxWidth - buttonWidth);

    setButtonPosition({ top: `${newTop}px`, left: `${newLeft}px` });
  };

  const handleReset = () => {
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    setButtonPosition({ top: '50%', left: '50%' });
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Focus Game</h2>
      <p className="mb-4">Click the button as many times as you can in 30 seconds!</p>
      <div id="game-box" className="relative w-full h-64 border border-gray-300 rounded-lg mx-auto">
        <button
          onClick={handleClick}
          style={{ position: 'absolute', top: buttonPosition.top, left: buttonPosition.left }}
          className={`px-6 py-2 text-white bg-[var(--highlight)] rounded-lg hover:bg-blue-600 transition-transform duration-300 ${gameOver ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-110'}`}
          disabled={gameOver}
        >
          Click Me!
        </button>
      </div>
      <p className="mt-4 text-lg">Score: <span className="font-bold">{score}</span></p>
      <p className="mt-2 text-lg">Time Left: <span className="font-bold text-red-500">{timeLeft}s</span></p>
      {gameOver && (
        <>
          <p className="mt-2 text-red-500 font-bold">Game Over! Your final score is {score}.</p>
          <button
            onClick={handleReset}
            className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-transform duration-300 transform hover:scale-110"
          >
            Reset Game
          </button>
        </>
      )}
    </div>
  );
}