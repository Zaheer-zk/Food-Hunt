import React, { lazy, Suspense, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from 'react-router-dom';
import About from './components/About.jsx';
import Error from './components/Error.jsx';
import Contact from './components/Contact.jsx';
import Restaurant from './components/Restaurant.jsx';
import ProfileFunc from './components/Profile.jsx';
import Profile from './components/ProfileClass.jsx';
import Cart from './components/Cart.jsx';
import Signup from './components/Signup.jsx';
import UserContext from './utils/UserContext.jsx';
import { Provider } from 'react-redux';
import store from './utils/store.jsx';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignUp,
} from '@clerk/clerk-react';

/**
 * Optimization -----
 * Chunking
 * Code splitting
 * Lazy loading
 * Dynamic bundling
 * On demand loading
 * dynamic import
 * Suspense
 * ------------------
 */

// On demand loading/importing
const Instamart = lazy(() => import('./components/Instamart.jsx'));

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: 'zaheerkhan01040@gmail.com',
  });
  return (
    <div className='font-body bg-gray-50'>
      <ClerkProvider publishableKey={clerkPubKey}>
        {/* <SignedIn> */}
        <Provider store={store}>
          <UserContext.Provider value={{ user: user, setUser: setUser }}>
            <Header />
            <Outlet />
            <Footer />
          </UserContext.Provider>
        </Provider>
        {/* </SignedIn> */}
        {/* <SignedOut>
          <RedirectToSignIn />
        </SignedOut> */}
      </ClerkProvider>
    </div>
  );
};

// To create route use createBrowserRouter ----
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:id',
        element: <Restaurant />,
        errorElement: <Error />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/sign-up/*',
        element: (
          <SignUp
            routing='path'
            path='/sign-up'
            className='flex justify-center p-5'
          />
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);

/**
 * ****React-router-dom****
 *  createBrowserRouter
 *  RouterProvider
 *  useRouteError
 *  useParams
 *  Link
 *  lazy
 */
