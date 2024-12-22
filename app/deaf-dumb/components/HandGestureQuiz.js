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
  const [capturedImages, setCapturedImages] = useState([]);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

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
      } else {
        console.log("Please enable video");
      }
    });
  };

  const closeCamera = () => {
    handTrack.stopVideo(videoRef.current);
    setIsCameraOn(false);
  };

  const captureImage = async () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const imageData = canvasRef.current.toDataURL('image/png');

    setCapturedImages([...capturedImages, { image: imageData, result: 'Waiting for response...' }]);

    const model = await handpose.load();
    const predictions = await model.estimateHands(videoRef.current);

    let result = 'No hand detected';
    if (predictions.length > 0) {
      const landmarks = predictions[0].landmarks;
      try {
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
          result = 'Correct';
        } else {
          result = 'Wrong';
        }
      } catch (error) {
        console.error('Error fetching prediction:', error);
        result = 'Error';
      }
    }

    setCapturedImages(prevImages => {
      const updatedImages = [...prevImages];
      updatedImages[updatedImages.length - 1].result = result;
      return updatedImages;
    });
    setResultMessage(result);
    generateRandomSign(); // Ask a new letter after each capture
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Hand Gesture Quiz</h2>
      <p className="text-lg text-center mb-4 text-white">Make the hand gesture for the letter: <span className="font-bold">{currentSign}</span></p>
      <video ref={videoRef} className="w-48 h-36 bg-black rounded-lg mb-4" autoPlay style={{ width: '480px', height: '360px' }}></video>
      <canvas ref={canvasRef} style={{ display: 'none' }} width="480" height="360"></canvas>
      {!isCameraOn && (
        <button
          onClick={startCamera}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Start Camera
        </button>
      )}
      {isCameraOn && (
        <div className="flex space-x-4 mt-4">
          <button
            onClick={captureImage}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Capture Image
          </button>
          <button
            onClick={closeCamera}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Close Camera
          </button>
        </div>
      )}
      <div className="mt-4 flex flex-wrap justify-center">
        {capturedImages.map((captured, index) => (
          <div key={index} className="m-2">
            <img src={captured.image} alt={`Captured ${index}`} className="w-32 h-24 rounded-lg mb-2" />
            <p className="text-center text-lg text-white">{captured.result}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{resultMessage}</p>
      <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">Score: {score}</p>
    </div>
  );
}