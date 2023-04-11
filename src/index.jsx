import React, { lazy, Suspense } from 'react';
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
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
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
