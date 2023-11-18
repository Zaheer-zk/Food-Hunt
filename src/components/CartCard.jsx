import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../utils/cartSlice';

const CartCard = ({ name, index }) => {
  const dispatch = useDispatch();
  const handleRemoveCartItem = (name) => dispatch(removeCartItem(name));

  return (
    <div className='flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden m-3'>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2 text-gray-800'>
          Item {index}: {name}
        </div>
        <p className='text-gray-700 text-base'>
          Detailed description or additional information about {name}.
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #tag1
        </span>
        <span className='inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #tag2
        </span>
      </div>
      <div className='px-6 py-4 border-t border-gray-200 flex justify-between items-center'>
        <span className='text-gray-600 text-sm'>Quantity: 1</span>
        <span className='text-gray-600 text-sm'>Price: $XX.XX</span>
        <button
          className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
          onClick={() => handleRemoveCartItem(name)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
