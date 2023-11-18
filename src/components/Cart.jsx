import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import CartCard from './CartCard';

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className='flex flex-col items-center bg-stone-200 text-gray-700 py-8 min-h-screen'>
      <div className='container mx-auto p-4'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-3xl font-bold'>
            Cart Items - {cartItems.length}
          </h1>
          <button
            onClick={handleClearCart}
            className='bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition duration-200 text-white'
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p className='text-center text-xl'>Your cart is empty!</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {cartItems.map((cartItem, i) => (
              <CartCard name={cartItem} key={i} index={i + 1} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
