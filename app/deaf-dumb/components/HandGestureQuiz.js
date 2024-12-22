'use client';

import { useState, useEffect, useRef } from 'react';
import * as handTrack from 'handtrackjs';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';

const handSigns = ['A', 'B', 'C'];

export default function HandGestureQuiz() {
  const [score, setScore] = useState(0);
  const [currentSign, setCurrentSign] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [isCameraOn, setIsCameraOn] = useState(false);

  const videoRef = useRef(null);

  const generateRandomSign = () => {
    const randomIndex = Math.floor(Math.random() * handSigns.length);
    setCurrentSign(handSigns[randomIndex]);
  };

  useEffect(() => {
    generateRandomSign();
  }, []);

  const startCamera = () => {
    handTrack.startVideo(videoRef.current).then(status => {
      if (status) {
        setIsCameraOn(true);
        runDetection();
      } else {
        console.log("Please enable video");
      }
    });
  };

  const runDetection = async () => {
    const model = await handpose.load();
    const predictions = await model.estimateHands(videoRef.current);

    if (predictions.length > 0) {
      const landmarks = predictions[0].landmarks;
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ features: landmarks }),
      });
      const data = await response.json();
      const gesture = data.prediction;

      if (gesture.toUpperCase() === currentSign) {
        setScore(score + 1);
        setResultMessage('Correct! Well done.');
        generateRandomSign();
      } else {
        setResultMessage(`Wrong! Try again.`);
      }
    }

    if (isCameraOn) {
      requestAnimationFrame(runDetection);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Hand Gesture Quiz</h2>
      <p className="text-lg text-center mb-4">Make the hand gesture for the letter: <span className="font-bold">{currentSign}</span></p>
      <video ref={videoRef} className="w-64 h-48 bg-black rounded-lg mb-4" autoPlay></video>
      {!isCameraOn && (
        <button
          onClick={startCamera}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Start Camera
        </button>
      )}
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{resultMessage}</p>
      <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">Score: {score}</p>
    </div>
  );
}