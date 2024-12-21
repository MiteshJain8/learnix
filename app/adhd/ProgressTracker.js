"use client";

import { useState } from 'react';

export default function ProgressTracker() {
  const [progress, setProgress] = useState(0);

  const handleProgress = (amount) => {
    setProgress(progress + amount);
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Progress Tracker</h2>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div className="bg-[var(--highlight)] h-4 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
      </div>
      <button
        onClick={() => handleProgress(10)}
        className="px-6 py-2 text-white bg-[var(--highlight)] rounded-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-110"
      >
        Increase Progress
      </button>
      <p className="mt-4 text-lg">Progress: <span className="font-bold">{progress}%</span></p>
    </div>
  );
}