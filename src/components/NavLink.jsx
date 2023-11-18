// import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// import useOnline from '../utils/useOnline';
// import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
// import { useUser } from '@clerk/clerk-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../components/ui/sheet.jsx';

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
      <ul className='hidden lg:flex flex-wrap justify-center gap-4 md:gap-8'>
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
      <Sheet>
        <SheetTrigger className='lg:hidden pl-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 24 24'
            className='hamburger-icon'
          >
            <path d='M3,12H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z' />
            <path d='M3,6H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,6Z' />
            <path d='M21,16H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z' />
          </svg>
        </SheetTrigger>
        <SheetContent>
          <ul className='flex flex-wrap flex-col justify-center gap-4 md:gap-8 text-teal-50'>
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
            <li>
              <Link
                to='/cart'
                className='hover:text-indigo-500 transition-colors duration-300'
              >
                Cart ({cartItemsCount})
              </Link>
            </li>
            <li>
              <SignedOut>
                <Link to='/sign-up'>
                  <button className='bg-blue-400 hover:bg-blue-500 text-white py-2 px-3 rounded transition-colors duration-300'>
                    Login
                  </button>
                </Link>
              </SignedOut>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default NavLink;
