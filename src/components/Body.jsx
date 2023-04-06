import React, { useState, useEffect } from 'react';
import foodData from '../config';
import shortid from 'shortid';
import Card from './Card';
import SearchBar from './SearchBar';
import Shimmer from './Shimmer';

//Body
const Body = () => {
  const [meals, setMeals] = useState([]);
  const [restaurantData, setRestaurantData] = useState(meals);

  useEffect(() => {
    // Fetch the data using api
    const fetchMeals = async () => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?f=s'
      );
      const data = await response.json();
      setMeals(data.meals);
    };

    fetchMeals();
    // console.log(meals);
    setRestaurantData(meals);
    // console.log(restaurantData);

    // console.log('Inside useEffect');
  }, []);

  // console.log(restaurantData);

  // console.log('Before return');

  return restaurantData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* {'Inside Return'} */}
      <div className="search">
        <SearchBar data={meals} setRestaurantData={setRestaurantData} />
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
