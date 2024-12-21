'use client';

import { useState, useEffect } from 'react';

export default function AttentionTimer() {
  const [timeLeft, setTimeLeft] = useState(300); // Default to 5 minutes
  const [breakTime, setBreakTime] = useState(false);
  const [batteryCharge, setBatteryCharge] = useState(0);
  const [focusTime, setFocusTime] = useState(300); // Default to 5 minutes

  useEffect(() => {
    const handleUserActivity = () => {
      setTimeLeft(focusTime); // Reset to selected focus time
      setBatteryCharge(0); // Reset battery charge
      setBreakTime(false); // Reset break time
    };

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('click', handleUserActivity);

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('click', handleUserActivity);
    };
  }, [focusTime]);

  useEffect(() => {
    let timerId;
    if (timeLeft > 0 && !breakTime) {
      timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
        setBatteryCharge((prevCharge) => prevCharge + 1);
      }, 1000);
    } else if (timeLeft === 0 && !breakTime) {
      setBreakTime(true);
      setTimeLeft(60); // 1 minute break
    } else if (timeLeft > 0 && breakTime) {
      timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && breakTime) {
      setBreakTime(false);
      setTimeLeft(focusTime); // Reset to selected focus time
      setBatteryCharge(0); // Reset battery charge
    }
    return () => clearInterval(timerId);
  }, [timeLeft, breakTime, focusTime]);

  const handleFocusTimeChange = (event) => {
    const selectedTime = parseInt(event.target.value, 10);
    setFocusTime(selectedTime);
    setTimeLeft(selectedTime);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Attention Timer</h2>
      <p className="mb-4">{breakTime ? 'Break Time!' : 'Focus Time!'}</p>
      <p className="text-4xl font-bold">{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
      <div className="mt-8">
        <div className="battery-container mx-auto">
          <div className="battery" style={{ height: `${batteryCharge}px` }}></div>
        </div>
        <p className="mt-4">Battery Charge: {batteryCharge}px</p>
        {batteryCharge >= focusTime && !breakTime && (
          <p className="mt-4 text-green-600 font-bold">Hurray! You have helped to charge the battery!</p>
        )}
      </div>
      <div className="mt-8">
        <label htmlFor="focusTime" className="block mb-2 text-lg font-medium text-gray-700 dark:text-gray-300">
          Select Focus Time:
        </label>
        <select
          id="focusTime"
          value={focusTime}
          onChange={handleFocusTimeChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={60}>1 minute</option>
          <option value={300}>5 minutes</option>
          <option value={600}>10 minutes</option>
          <option value={900}>15 minutes</option>
          <option value={1200}>20 minutes</option>
          <option value={1500}>25 minutes</option>
          <option value={1800}>30 minutes</option>
        </select>
      </div>
    </div>
  );
}