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
  const [meals, setMeals] = useState(restaurantData);
  const isOnline = useOnline();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log('data', data);
        setRestaurantData(data?.data?.cards[0]?.data?.data?.cards || []);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    setMeals(restaurantData);
    fetchMeals();
  }, []);

  if (!isOnline) {
    return <h1>🛑 Offline, please check your internet connection</h1>;
  }

  return (
    <>
      <div className="search">
        <SearchBar data={meals} setRestaurantData={setRestaurantData} />
      </div>
      <div className="flex flex-wrap justify-center m-3">
        {restaurantData.length === 0 ? (
          <Shimmer />
        ) : (
          restaurantData.map((data) => (
            <Link to={`/restaurant/${data.data.id}`} key={shortid.generate()}>
              <Card data={data} key={shortid.generate()} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
