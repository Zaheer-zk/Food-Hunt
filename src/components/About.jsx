import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r bg-stone-200 bg-stone-300 flex justify-center items-center p-5 text-white'>
      <div className='max-w-lg mx-auto bg-zinc-500 rounded-xl shadow-2xl overflow-hidden md:max-w-3xl'>
        <div className='md:flex'>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-indigo-300 font-semibold'>
              About Us
            </div>
            <h1 className='block mt-1 text-xl leading-tight font-bold hover:underline'>
              Food Hunt
            </h1>
            <p className='mt-2'>
              This is Food Hunt which provides information about the nearest
              restaurants dish. Discover the best places to eat, explore local
              cuisines, and enjoy new culinary experiences!
            </p>
            <div className='mt-4'>
              <Link
                to='/profile'
                className='text-indigo-400 hover:text-indigo-300 transition duration-300 ease-in-out'
              >
                My Profile - 🧑‍💻
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default About;
