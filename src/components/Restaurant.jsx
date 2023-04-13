import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

const Restaurant = () => {
  const { id } = useParams();

  const menu = useRestaurant(id);

  return menu.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <Link to="/">
        <button className="rounded-full m-3 p-3 bg-red-300">Go back</button>
      </Link>
      <div className="flex flex-row justify-around rounded-lg m-3 bg-white dark:bg-slate-900  px-6 py-8 ring-1 ring-slate-900/5 shadow-xl overflow-clip">
        {/* <h1>Restaurant id : {id} </h1> */}
        <div>
          <img
            src={IMG_CDN_URL + menu?.cloudinaryImageId}
            alt="Restaurant Image"
            className="w-full rounded-xl"
          />
        </div>
        <div className="flex flex-col  items-center justify-center">
          <div>
            <h2 className="text-slate-900 dark:text-white mt-5 text-3xl font-extrabold tracking-tight">
              {menu.name}
            </h2>
          </div>
          <div className="text-slate-500 dark:text-slate-400 mt-2 text-xl">
            <h3>{menu.area}</h3>
            <h3>{menu.city}</h3>
            <h3>{menu.locality}</h3>
            <h3>{menu.costForTwoMessage}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
