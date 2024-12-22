'use client';

import Image from 'next/image';
import './globals.css';
import Link from 'next/link';


import {useAuthState} from 'react-firebase-hooks/auth';
import { useEffect, useState} from 'react';
import {auth} from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';

export default function Layout({ children }) {
  //here

  const [user] = useAuthState(auth);
  const router = useRouter();
  const [userSession, setUserSession] = useState(null);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserSession(sessionStorage.getItem('user'));
    }
  }, []);

  useEffect(() => {
    if (user) {
      document.getElementById("name").innerHTML = user.email;
    }
  }, [user]);

  useEffect(() => {
    if (!user && !userSession) {
      router.push('/sign-in');
    }
  }, [user, userSession, router]);

  const handleLogout = () => {
    signOut(auth).then(() => {
        sessionStorage.removeItem('user');
        router.push('/sign-in');
        document.getElementById("name").innerHTML="User"
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };//here


  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    const isDark = savedMode === 'dark' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    document.getElementById("changepic").src = isDark ? "/images/dyscalc_pic/moon.png" : "/images/dyscalc_pic/sun.png";
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
    document.getElementById("changepic").src = newMode ? "/images/dyscalc_pic/moon.png" : "/images/dyscalc_pic/sun.png";
  };

  return (
    <html>
      <body className="bg-background text-foreground transition-colors duration-300">
        <header className="bg-blue-600 text-white py-4">
          <div className="container flex-row md:flex-row md:justify-between mx-auto px-4 flex justify-start h-full md:items-center items-start">
            <h1 className="text-3xl font-bold">Learning App for Disabilities</h1>
            <div className='flex flex-row'>
            <div className='flex  justify-between md:flex-row flex-col'><Link href="/wet" >
              <button className='bg-blue-500 hover:bg-blue-700 h-full text-white font-bold py-2 md:my-0 px-4 my-1 rounded mx-3'>Weather</button></Link>
              <p id="name" className='font-semibold bg-blue-500 rounded my-2 md:my-0 px-4 place-content-center'>User</p>
              <button onClick={handleLogout} className="bg-blue-500  md:my-0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3">Log out
              </button> 
              </div>

              <div className='rotate theme-icon my-1'><button onClick={toggleTheme}><Image id="changepic" src={darkMode ? "/images/dyscalc_pic/moon.png" : "/images/dyscalc_pic/sun.png"} height={40} width={40} alt={"sun"}></Image></button></div>
            </div>
            {/* <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button> */}
          </div>
          
        </header>


        <main className="container mx-auto px-4 py-8">{children}</main>


        <footer className="bg-blue-600 text-white fixed my-0 bottom-0  w-full py-4 mt-8">
          <div className="container mx-auto text-center">
            <p className="text-sm h-1 ">&copy; Made by Team: sMASH.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
