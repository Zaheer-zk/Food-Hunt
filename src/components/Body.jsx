import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import Card from './Card';
import SearchBar from './SearchBar';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

//Body
const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    // Fetch the data using api
    const fetchMeals = async () => {
      const response = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.6093912&lng=75.1397935&page_type=DESKTOP_WEB_LISTING'
      );
      const data = await response.json();
      console.log(data);
      setRestaurantData(data?.data?.cards[0]?.data?.data?.cards);
    };
    fetchMeals();
  }, []);

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🛑 Offline, please check your internet connection</h1>;
  }

  return !restaurantData ? (
    <Shimmer />
  ) : (
    <>
      {/* {'Inside Return'} */}
      <div className="search">
        <SearchBar
          data={restaurantData}
          setRestaurantData={setRestaurantData}
        />
      </div>
      <div className="card--container">
        {restaurantData.map((data) => (
          <Link to={'/restaurant/' + data.data.id} key={shortid.generate()}>
            <Card key={shortid.generate()} data={data} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
