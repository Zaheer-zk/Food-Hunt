import { useState } from 'react';

const NavLink = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <ul className="nav">
        <li className="nav__link" href="#">
          Home
        </li>
        <li className="nav__link" href="#">
          About us
        </li>
        <li className="nav__link" href="#">
          Contact us
        </li>
        <li className="nav__link" href="#">
          Cart <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </li>
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
