import React from 'react';

const CartCard = ({ name, index }) => {
  return (
    <>
      <h1 className="bg-red-200 p-2 m-2">{`${index} - ${name}`}</h1>
    </>
  );
};

export default CartCard;
