import { useState } from 'react';

export default function FocusGame() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setScore(score + 1);
    setMessage('Great job! Keep going!');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Focus Game</h2>
      <p>Click the button as many times as you can in 30 seconds!</p>
      <button
        onClick={handleClick}
        className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Click Me!
      </button>
      <p className="mt-4 text-lg">Score: {score}</p>
      <p className="mt-2 text-green-500">{message}</p>
    </div>
  );
}