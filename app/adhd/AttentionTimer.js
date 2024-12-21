"use client";

import { useState, useEffect } from 'react';

export default function AttentionTimer() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [breakTime, setBreakTime] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !breakTime) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else if (timeLeft === 0 && !breakTime) {
      setBreakTime(true);
      setTimeLeft(60); // 1 minute break
    } else if (timeLeft > 0 && breakTime) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else if (timeLeft === 0 && breakTime) {
      setBreakTime(false);
      setTimeLeft(300); // Reset to 5 minutes
    }
  }, [timeLeft, breakTime]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Attention Timer</h2>
      <p className="mb-4">{breakTime ? 'Break Time!' : 'Focus Time!'}</p>
      <p className="text-4xl font-bold">{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
    </div>
  );
}