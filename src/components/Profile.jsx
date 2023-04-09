import React, { useState } from 'react';

const Profile = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <h2>Profile</h2>
      <h3>Name: {name}</h3>
      <h3>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
      <button
        onClick={(e) => {
          setCount(count + 1);
          setCount2(count + 1);
        }}>
        +
      </button>
    </>
  );
};

export default Profile;
