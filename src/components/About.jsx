import React from 'react';
import { Outlet } from 'react-router-dom';
import Profile from './ProfileClass';
import ProfileFunc from './Profile';

const About = () => {
  return (
    <div className="profile">
      <h1>About us </h1>
      {/* <p>This is a baba ka dhaba website</p> */}
      <Outlet />
      {/* <ProfileFunc name="Zaheer" /> */}
      <Profile name="Zaheer" />
    </div>
  );
};

export default About;
