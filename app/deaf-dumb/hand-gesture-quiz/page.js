import HandGestureQuiz from '../components/HandGestureQuiz';

export default function HandGestureQuizPage() {
  return (
    <div className="p-8">
      {<HandGestureQuiz /> }
      <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
      HandGestureQuiz
      </p>
    </div>
  );
}