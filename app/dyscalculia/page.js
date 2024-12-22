"use client";
import Link from 'next/link';

export default function DyscalculiaPage() {

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to the Dyscalculia Learning App</h1>
      <p className="mb-6">Learn math concepts through visuals and pictures.</p>
      <Link href="/dyscalculia/quiz">
      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Start Learning
      </button></Link>
    </div>
  );
}