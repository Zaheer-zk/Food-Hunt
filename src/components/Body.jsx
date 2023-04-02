import React, { useState } from 'react';
import foodData from '../config';
import shortid from 'shortid';
import Card from './Card';
import SearchBar from './SearchBar';

//Body
const Body = () => {
  const [restaurantData, setRestaurantData] = useState(foodData);

  return (
    <>
      <SearchBar data={foodData} setRestaurantData={setRestaurantData} />
      <div className="card--container">
        {restaurantData.map((data) => (
          <Card key={shortid.generate()} data={data} />
        ))}
      </div>
    </>
  );
};

export default Body;
