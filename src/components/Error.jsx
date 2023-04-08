import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h2>Oops!!</h2>
      <p>Something went wrong</p>
      <p>
        Getting statusCode {err.status} : {err.statusText}
      </p>
    </div>
  );
};

export default Error;
