import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1 className="font-extrabold">Contact us</h1>
      <button className="rounded bg-gray-300 p-3 text-white">
        <a href="mailto:zaheerkhan01040@gmail.com">Send email</a>
      </button>
    </div>
  );
};

export default Contact;
