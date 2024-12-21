"use client";
import { useState } from 'react';
import Layout from '../../layout';
import Image from 'next/image';

export default function QuizPage() {
  const [question1Answer, setQuestion1Answer] = useState('');
  const [question2Answer, setQuestion2Answer] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer1 = 8; // 5 + 3
    const correctAnswer2 = 6; // 10 - 4

    const isQuestion1Correct = parseInt(question1Answer) === correctAnswer1;
    const isQuestion2Correct = parseInt(question2Answer) === correctAnswer2;

    setResult({
      question1: isQuestion1Correct,
      question2: isQuestion2Correct,
    });
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Quiz</h1>
      <p className="mb-6">Answer the following numerical questions:</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="question1">
            What is the sum of the following?
          </label>
          <div className="flex items-center mb-4">
            <Image src="/images/dyscalc_pic/5.png" alt="5" width={100} height={100} />
            <span className="mx-2 text-xl font-bold">+</span>
            <Image src="/images/dyscalc_pic/3.png" alt="3" width={100} height={100} />
          </div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="question1"
            type="text"
            placeholder="Your answer"
            value={question1Answer}
            onChange={(e) => setQuestion1Answer(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="question2">
            What is the difference of the following?
          </label>
          <div className="flex items-center mb-4">
            <Image src="/images/dyscalc_pic/10.png" alt="10" width={100} height={100} />
            <span className="mx-2 text-xl font-bold">-</span>
            <Image src="/images/dyscalc_pic/4.png" alt="4" width={100} height={100} />
          </div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="question2"
            type="text"
            placeholder="Your answer"
            value={question2Answer}
            onChange={(e) => setQuestion2Answer(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
      {result && (
        <div className="mt-4">
          <p>Question 1: 
            {result.question1 ? (
              <Image src="/images/dyscalc_pic/tick.png" alt="Correct" width={60} height={60} />
            ) : (
              <Image src="/images/dyscalc_pic/cross.png" alt="Incorrect" width={60} height={60} />
            )}
          </p>
          <p>Question 2: 
            {result.question2 ? (
              <Image src="/images/dyscalc_pic/tick.png" alt="Correct" width={60} height={60} />
            ) : (
              <Image src="/images/dyscalc_pic/cross.png" alt="Incorrect" width={60} height={60} />
            )}
          </p>
        </div>
      )}
    </Layout>
  );
}