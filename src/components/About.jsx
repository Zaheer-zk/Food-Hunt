import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Profile from './ProfileClass';
import ProfileFunc from './Profile';

const About = () => {
  return (
    <div className="flex text-zinc-700 text-xl bg-slate-100 p-3 justify-center justify-items-center">
      <div>
        <h1>About us </h1>
        <p>
          This is Baba ka dhaba which provide information about nearest
          restaurants
        </p>
        <p className="underline">
          <Link to="profile">My profile - 🧑‍💻</Link>
        </p>
      </div>

      <Outlet />
      {/* <ProfileFunc name="Zaheer" /> */}
      {/* <Profile name="Zaheer" /> */}
    </div>
  );
};

export default About;
