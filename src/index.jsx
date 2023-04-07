import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About.jsx';
import Error from './components/Error.jsx';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
