// import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// import useOnline from '../utils/useOnline';
// import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
// import { useUser } from '@clerk/clerk-react';

const NavLink = () => {
  // const { user } = useContext(UserContext);
  // const [loggedIn, setLoggedIn] = useState(false);
  // const isOnline = useOnline();

  // const { isLoaded, isSignedIn, user } = useUser();

  const cartItemsCount = useSelector((store) => store.cart.items.length);

  // if (!isLoaded || !isSignedIn) {
  //   return null;
  // }

  return (
    <nav className='text-lg flex justify-between items-center'>
      <ul className='flex flex-wrap justify-center gap-4 md:gap-8'>
        <li>
          <Link
            to='/'
            className='hover:text-indigo-500 transition-colors duration-300'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            className='hover:text-indigo-500 transition-colors duration-300'
          >
            About us
          </Link>
        </li>
        {/* ... Other links */}
        <li>
          <Link
            to='/cart'
            className='hover:text-indigo-500 transition-colors duration-300'
          >
            Cart ({cartItemsCount})
          </Link>
        </li>
        {/* <li className='font-medium text-slate-800'>{user.firstName}</li> */}
        {/* <li className='font-medium'>{isOnline ? 'Online' : 'Offline'}</li> */}
        {/* {loggedIn ? ( */}
        {/* ) : ( */}
        <li>
          <SignedOut>
            <Link to='/sign-up'>
              <button className='bg-blue-400 hover:bg-blue-500 text-white py-2 px-3 rounded transition-colors duration-300'>
                Login
              </button>
            </Link>
          </SignedOut>
        </li>
        {/* )} */}
      </ul>
      <UserButton />
    </nav>
  );
};

export default NavLink;
