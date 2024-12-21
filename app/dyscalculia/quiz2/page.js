"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../layout';
import Image from 'next/image';
import Link from 'next/link';

export default function QuizPage2() {
  const [question1Answer, setQuestion1Answer] = useState('');
  const [question2Answer, setQuestion2Answer] = useState('');
  const [result, setResult] = useState(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer1 = "tan"; 
    const correctAnswer2 = "sine"; 

    const isQuestion1Correct = question1Answer === correctAnswer1;
    const isQuestion2Correct = question2Answer === correctAnswer2;

    setResult({
      question1: isQuestion1Correct,
      question2: isQuestion2Correct,
    });
  };

  return (
    <Layout>
      <div className='flex justify-between'>
        <h1 className="text-3xl font-bold mb-4">Quiz</h1>
        <Link href={"/dyscalculia/quiz"}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>BACK</button></Link>
      </div>
      <p className="mb-6">Answer the following numerical questions:</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="question1">
            What is application of this graph?
          </label>
          <div className="flex items-center mb-4">
            <Image src="/images/dyscalc_pic/tan.png" alt="5" width={350} height={350} />
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
            What is the graph?
          </label>
          <div className="flex items-center mb-4">
            <Image src={"/images/dyscalc_pic/sin.png"} height={350} width={350} alt='sin'></Image>
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
              <Image src="/images/dyscalc_pic/tick.png" alt="Correct" width={50} height={50} />
            ) : (
              <Image src="/images/dyscalc_pic/cross.png" alt="Incorrect" width={50} height={50} />
            )}
          </p>
          <p>Question 2: 
            {result.question2 ? (
              <Image src="/images/dyscalc_pic/tick.png" alt="Correct" width={50} height={50} />
            ) : (
              <Image src="/images/dyscalc_pic/cross.png" alt="Incorrect" width={50} height={50} />
            )}
          </p>
        </div>
      )}
    </Layout>
  );
}