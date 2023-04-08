import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';

const Restaurant = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState({});

  useEffect(() => {
    const getRestaurantInfo = async () => {
      const response = await fetch(
        'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=' +
          id +
          '&submitAction=ENTER'
      );

      const data = await response.json();
      setMenu(data?.data?.cards[0]?.card?.card?.info);
    };

    getRestaurantInfo();
  }, []);

  console.log(menu);

  return menu.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="menu">
      {/* <h1>Restaurant id : {id} </h1> */}
      <div>
        <h2>{menu.name}</h2>
        <img
          src={IMG_CDN_URL + menu?.cloudinaryImageId}
          alt="Restaurant Image"
        />
      </div>
      <div className="menu__details">
        <h3>{menu.area}</h3>
        <h3>{menu.city}</h3>
        <h3>{menu.locality}</h3>
        <h3>{menu.costForTwoMessage}</h3>
      </div>
    </div>
  );
};

export default Restaurant;
