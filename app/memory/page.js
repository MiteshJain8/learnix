import MemoryGame from './components/MemoryGame';

export default function MemoryPage() {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">Memory Deficits Learning Page</h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
        Improve your memory through this fun and interactive card-matching game. Click on cards to reveal their hidden images and find matching pairs!
      </p>
      <MemoryGame />
    </div>
  );
}
