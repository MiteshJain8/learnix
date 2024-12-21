"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';

const FocusGame = dynamic(() => import('./FocusGame'), { ssr: false });
const MemoryChallenge = dynamic(() => import('./MemoryChallenge'), { ssr: false });
const AttentionTimer = dynamic(() => import('./AttentionTimer'), { ssr: false });
const ProgressTracker = dynamic(() => import('./ProgressTracker'), { ssr: false });

const activities = [
  {
    title: "Focus Game",
    description: "A game to improve focus by finding hidden objects.",
    component: FocusGame,
  },
  {
    title: "Memory Challenge",
    description: "A memory game to enhance short-term memory.",
    component: MemoryChallenge,
  },
  {
    title: "Attention Timer",
    description: "A timer to help with focused study sessions.",
    component: AttentionTimer,
  },
  {
    title: "Progress Tracker",
    description: "Track your progress visually.",
    component: ProgressTracker,
  },
];

export default function ADHDPage() {
  const [CurrentActivity, setCurrentActivity] = useState(null);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-8 text-[var(--highlight)]">ADHD Learning Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-[var(--card-bg)] text-[var(--card-text)] shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setCurrentActivity(() => activity.component)}
          >
            <h3 className="text-2xl font-semibold text-[var(--highlight)]">{activity.title}</h3>
            <p className="text-[var(--card-text)] mt-2 mb-4">{activity.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        {CurrentActivity ? (
          <div className="bg-[var(--card-bg)] text-[var(--card-text)] shadow-lg rounded-lg p-6">
            <CurrentActivity />
          </div>
        ) : (
          <p className="text-center text-[var(--card-text)]">Select an activity to start</p>
        )}
      </div>
    </div>
  );
}