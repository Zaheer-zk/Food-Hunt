import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

const Restaurant = () => {
  const { id } = useParams();
  const [restaurant, menu] = useRestaurant(id);

  if (restaurant.length === 0) {
    return <Shimmer />;
  }

  const { name, area, city, locality, costForTwoMessage, cloudinaryImageId } =
    restaurant;

  return (
    <>
      <Link to="/">
        <button className="rounded-full m-3 p-3 bg-red-300">Go back</button>
      </Link>
      <div className="flex flex-row justify-around rounded-lg m-3 bg-white dark:bg-slate-900 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl overflow-clip">
        <div>
          <img
            src={IMG_CDN_URL + cloudinaryImageId}
            alt="Restaurant Image"
            className="w-full rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <h2 className="text-slate-900 dark:text-white mt-5 text-3xl font-extrabold tracking-tight">
              {name}
            </h2>
          </div>
          <div className="text-slate-500 dark:text-slate-400 mt-2 text-xl">
            <h3>{area}</h3>
            <h3>{city}</h3>
            <h3>{locality}</h3>
            <h3>{costForTwoMessage}</h3>
          </div>
        </div>
        <div className="text-slate-500 dark:text-slate-400 mt-2 text-xl">
          <ul>
            <li>{menu[1]?.card?.card?.title}</li>
            <li>{menu[2]?.card?.card?.title}</li>
            <li>{menu[3]?.card?.card?.title}</li>
            <li>{menu[4]?.card?.card?.title}</li>
            <li>{menu[5]?.card?.card?.title}</li>
            <li>{menu[6]?.card?.card?.title}</li>
            <li>{menu[7]?.card?.card?.title}</li>
            <li>{menu[8]?.card?.card?.title}</li>
            <li>{menu[9]?.card?.card?.title}</li>
            <li>{menu[10]?.card?.card?.title}</li>
            <li>{menu[11]?.card?.card?.title}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
