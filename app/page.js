"use client";
import Link from 'next/link';

// import {useAuthState} from 'react-firebase-hooks/auth';
// import { useEffect, useState} from 'react';
// import {auth} from '@/app/firebase/config';
// import { useRouter } from 'next/navigation';
// import { signOut } from 'firebase/auth';

export default function HomePage() {

  // const [user] = useAuthState(auth);
  // const router = useRouter();
  // const [userSession, setUserSession] = useState(null);


  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setUserSession(sessionStorage.getItem('user'));
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!user && !userSession) {
  //     router.push('/sign-in');
  //   }
  // }, [user, userSession, router]);

  // const handleLogout = () => {
  //   signOut(auth).then(() => {
  //       sessionStorage.removeItem('user');
  //       router.push('/sign-in');
  //     })
  //     .catch((error) => {
  //       console.error('Error signing out: ', error);
  //     });
  // };


  const disabilities = [
    {
      name: "Dyscalculia",
      description: "Learn and practice math concepts with interactive puzzles and games.",
      route: "/dyscalculia",
    },
    {
      name: "ADHD",
      description: "Engage in short, focused activities designed to maintain attention.",
      route: "/adhd",
    },
    {
      name: "Memory Deficits",
      description: "Improve memory through repetition-based games and tasks.",
      route: "/memory",
    },
    {
      name: "Deaf/Dumb",
      description: "Learn communication with visual cues and sign language basics.",
      route: "/deaf-dumb",
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Select a Learning Experience</h2>

      {/* <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Log out
      </button> */}

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {disabilities.map((disability, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-500">{disability.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4">{disability.description}</p>
            <Link
              href={disability.route}
              className="inline-block px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
