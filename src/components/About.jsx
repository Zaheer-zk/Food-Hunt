import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Profile from './ProfileClass';
import ProfileFunc from './Profile';

const About = () => {
  return (
    <div className="profile">
      <div>
        <h1>About us </h1>
        <p>
          This is Baba ka dhaba which provide information about nearest
          restaurants
        </p>
        <p>
          <Link to="profile">My profile</Link>
        </p>
      </div>

      <Outlet />
      {/* <ProfileFunc name="Zaheer" /> */}
      {/* <Profile name="Zaheer" /> */}
    </div>
  );
};

export default About;
