import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

const NavLink = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <>
      <ul className="nav">
        <li className="nav__link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__link">
          <Link to="/about">About us</Link>
        </li>
        <li className="nav__link">
          <Link to="/contact">Contact us</Link>
        </li>
        <li className="nav__link">
          <Link to="/instamart">Instamart</Link>
        </li>
        <li className="nav__link">
          Cart <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </li>{' '}
        <li className="nav__link">{isOnline ? '✅' : '🔴'}</li>
        {loggedIn ? (
          <button className="nav__link" onClick={() => setLoggedIn(false)}>
            Logout
          </button>
        ) : (
          <button className="nav__link" onClick={() => setLoggedIn(true)}>
            Login
          </button>
        )}
      </ul>
    </>
  );
};

export default NavLink;
