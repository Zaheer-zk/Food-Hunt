import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-indigo-600'>
      <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4'>
        <h1 className='font-extrabold text-4xl text-gray-800'>Contact Us</h1>
        <p className='text-gray-600 text-center'>
          Have any questions or need to get more information about the product?
          Either way, you're in the right spot.
        </p>
        <button className='rounded bg-indigo-500 p-3 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400'>
          <a
            href='mailto:zaheerkhan01040@gmail.com'
            className='no-underline text-white'
          >
            Send Email
          </a>
        </button>
        <div className='flex justify-center space-x-3'>
          <a
            href='https://www.facebook.com'
            className='text-blue-600 hover:text-blue-800'
          >
            <i className='fab fa-facebook-f'></i>
          </a>
          <a
            href='https://www.twitter.com'
            className='text-blue-400 hover:text-blue-600'
          >
            <i className='fab fa-twitter'></i>
          </a>
          <a
            href='https://www.instagram.com'
            className='text-pink-600 hover:text-pink-800'
          >
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
