import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../utils/store';
import CartCard from './CartCard';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex bg-blue-900 text-white items-center flex-wrap">
      <h1>Cart Items - {cartItems.length}</h1>
      <button onClick={() => handleClearCart()} className="bg-red-300 p-2 m-2">
        Clear cart
      </button>
      {cartItems.map((cartItem, i) => (
        <CartCard name={cartItem} key={i} index={i + 1} />
      ))}
    </div>
  );
};

export default Cart;
