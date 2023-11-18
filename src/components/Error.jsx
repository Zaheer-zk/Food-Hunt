import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-500 to-yellow-500'>
      <div className='text-center text-white'>
        <h2 className='text-6xl font-extrabold mb-4'>Oops!!</h2>
        <p className='text-2xl mb-2'>Something went wrong...</p>
        <p className='text-md'>
          Getting statusCode {err.status} : {err.statusText}
        </p>
        <a
          href='/'
          className='inline-block mt-4 bg-white text-red-500 px-6 py-3 rounded-md shadow hover:bg-gray-100 transition duration-300'
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default Error;
