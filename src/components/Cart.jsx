import React from 'react';
import { useSelector } from 'react-redux';
import store from '../utils/store';
import CartCard from './CartCard';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex bg-blue-900 text-white items-center flex-wrap">
      <h1>Cart Items - {cartItems.length}</h1>
      {cartItems.map((cartItem, i) => (
        <CartCard name={cartItem} key={i} index={i + 1} />
      ))}
    </div>
  );
};

export default Cart;
