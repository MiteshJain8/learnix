'use client';

import { useState } from 'react';
import Link from 'next/link';

const handSigns = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

export default function Lesson() {
  const [showLesson, setShowLesson] = useState(false);

  const handleTakeLesson = () => {
    setShowLesson(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      {!showLesson && (
        <button
          onClick={handleTakeLesson}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Take Lesson
        </button>
      )}
      {showLesson && (
        <div className="w-full max-w-4xl p-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Learn the Alphabet</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {handSigns.map((sign) => (
              <div key={sign} className="flex flex-col items-center">
                <img
                  src={`/images/handGestures/${sign}.png`}
                  alt={`${sign} Hand Sign`}
                  className="w-24 h-24 object-cover rounded-lg shadow-md"
                />
                <p className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-300">{sign}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/deaf-dumb/quiz">
              <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                Take Quiz
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}