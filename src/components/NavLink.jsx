import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const NavLink = () => {
  const { user } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();

  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  return (
    <>
      <ul className="flex justify-between py-5">
        <li className="flex justify-around px-3 hover:text-white items-center">
          <Link to="/">Home</Link>
        </li>
        <li className="flex justify-around px-3 hover:text-white items-center">
          <Link to="/about">About us</Link>
        </li>
        <li className="flex justify-around px-3 hover:text-white items-center">
          <Link to="/contact">Contact us</Link>
        </li>
        <li className="flex justify-around px-3 hover:text-white items-center">
          <Link to="/instamart">Instamart</Link>
        </li>
        <li className="flex justify-around px-3 hover:text-white items-center">
          <Link to="/cart">
            <i className="fa fa-shopping-cart" aria-hidden="true">
              {'  '}- {cartItem.length}
            </i>
          </Link>
        </li>
        <li className="flex justify-around px-3 items-center font-bold text-red-900">
          <h1>{user.name}</h1>
        </li>
        <li className="flex justify-around px-3 hover:text-white items-center">
          {isOnline ? '✅' : '🔴'}
        </li>
        {loggedIn ? (
          <button
            className="flex justify-around px-3 hover:text-white bg-red-500 p-3 rounded-md shadow-lg"
            onClick={() => setLoggedIn(false)}>
            Logout
          </button>
        ) : (
          <Link to="/signup">
            <button
              className="flex justify-around px-3 hover:text-white  p-3 rounded-md bg-green-400 shadow-lg"
              onClick={() => setLoggedIn(true)}>
              Login
            </button>
          </Link>
        )}
      </ul>
    </>
  );
};

export default NavLink;

/**
 *
 */
