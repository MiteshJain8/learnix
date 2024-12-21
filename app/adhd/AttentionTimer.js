import { useState, useEffect } from 'react';

export default function AttentionTimer() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Attention Timer</h2>
      <p>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
    </div>
  );
}