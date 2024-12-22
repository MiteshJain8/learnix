import Link from 'next/link';

export default function DeafDumbPage() {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">Deaf/Dumb Learning Page</h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
        Learn basic sign language and communication techniques using visual tools.
      </p>
      <div className="flex justify-center space-x-4">
        <Link href="/deaf-dumb/lesson">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Take Lesson
          </button>
        </Link>
        <Link href="/deaf-dumb/quiz">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Take Quiz
          </button>
        </Link>
        <Link href="/deaf-dumb/hand-gesture-quiz">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Hand Gesture Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}