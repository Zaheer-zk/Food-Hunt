import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import Card from './Card';
import SearchBar from './SearchBar';
import Shimmer from './Shimmer';

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
      setRestaurantData(data?.data?.cards[2]?.data?.data?.cards);
    };
    fetchMeals();
  }, []);

  return restaurantData.length == 0 ? (
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
          <Card key={shortid.generate()} data={data} />
        ))}
      </div>
    </>
  );
};

export default Body;
