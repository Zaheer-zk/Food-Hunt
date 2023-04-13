import React, { lazy, Suspense, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About.jsx';
import Error from './components/Error.jsx';
import Contact from './components/Contact.jsx';
import Restaurant from './components/Restaurant.jsx';
import ProfileFunc from './components/Profile.jsx';
import Profile from './components/ProfileClass.jsx';
import Cart from './components/Cart.jsx';
import Signup from './components/Signup.jsx';
import UserContext from './utils/UserContext.jsx';

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

const App = () => {
  const [user, setUser] = useState({
    name: '',
    email: 'zaheerkhan01040@gmail.com',
  });
  return (
    <div className="font-body bg-gray-50">
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
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
        children: [
          {
            path: 'profile', // parentPath/{path}
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:id',
        element: <Restaurant />,
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
        path: '/signup',
        element: <Signup />,
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
