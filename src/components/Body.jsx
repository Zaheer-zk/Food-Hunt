import { useState, useEffect } from 'react';
import shortid from 'shortid';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';
import Card from './Card';
import Shimmer from './Shimmer';
import useOnline from '../utils/useOnline';
import { API_URL } from '../config.js';

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [meals, setMeals] = useState([]);
  const isOnline = useOnline();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(API_URL, { mode: 'cors' });
        const data = await response.json();
        console.log(
          'Main data: ',
          data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setRestaurantData(
          data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setMeals(
          data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchMeals();
  }, []);

  if (!isOnline) {
    return <h1>🛑 Offline, please check your internet connection</h1>;
  }

  return (
    <section className='bg-stone-200 p-2'>
      <div className='search'>
        <SearchBar data={meals} setRestaurantData={setRestaurantData} />
      </div>
      <div className='flex flex-wrap justify-center m-3'>
        {restaurantData.length === 0 ? (
          <Shimmer />
        ) : (
          restaurantData.map((data, i) => (
            <Link to={`/restaurant/${data.info.id}`} key={shortid.generate()}>
              <Card data={data} key={shortid.generate()} />
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default Body;
