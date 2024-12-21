import { useState } from 'react';
import FocusGame from './FocusGame';
import MemoryChallenge from './MemoryChallenge';
import AttentionTimer from './AttentionTimer';

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
];

export default function ADHDPage() {
  const [currentActivity, setCurrentActivity] = useState(null);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">ADHD Learning Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setCurrentActivity(activity.component)}
          >
            <h3 className="text-2xl font-semibold text-blue-500">{activity.title}</h3>
            <p className="text-gray-600 mt-2 mb-4">{activity.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        {currentActivity ? (
          <div className="bg-white shadow-lg rounded-lg p-6">
            {currentActivity && <currentActivity />}
          </div>
        ) : (
          <p className="text-center text-gray-600">Select an activity to start</p>
        )}
      </div>
    </div>
  );
}