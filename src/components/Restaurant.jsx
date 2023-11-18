import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const Restaurant = () => {
  const { id } = useParams();
  const [restaurant, menu] = useRestaurant(id);

  if (restaurant.length === 0) {
    return <Shimmer />;
  }

  const { name, area, city, locality, costForTwoMessage, cloudinaryImageId } =
    restaurant;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <>
      <Link to='/'>
        <button className='rounded-full m-3 p-3 bg-gray-200 hover:bg-gray-300 text-gray-800 transition duration-300 ease-in-out'>
          Go back
        </button>
      </Link>
      <div className='flex flex-col md:flex-row justify-around items-center rounded-lg m-3 bg-stone-200 px-6 py-8 ring-1 ring-gray-300/10 shadow-lg'>
        {' '}
        <div>
          <img
            src={IMG_CDN_URL + cloudinaryImageId}
            alt='Restaurant Image'
            className='md:max-w-lg rounded-lg'
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='mt-4 md:mt-0 md:ml-6'>
            <h2 className='text-3xl font-extrabold text-gray-900'>{name}</h2>
            <p className='text-md text-gray-600'>
              {area}, {locality}, {city}
            </p>
            <p className='text-md text-gray-600'>{costForTwoMessage}</p>
          </div>
        </div>
        <div className='mt-4 md:mt-0'>
          <h4 className='text-2xl font-bold text-gray-800'>Menu</h4>
          <ul>
            <li>
              {menu[2]?.card?.card?.title}{' '}
              <button
                className='px-2 m-5  bg-red-100 rounded-lg hover:bg-blue-300 shadow-white'
                onClick={() => handleAddItem(menu[2]?.card?.card?.title)}
              >
                +
              </button>
            </li>
            <li>
              {menu[3]?.card?.card?.title}{' '}
              <button
                className='px-2 m-5  bg-red-100 rounded-lg hover:bg-blue-300 shadow-white'
                onClick={() => handleAddItem(menu[3]?.card?.card?.title)}
              >
                +
              </button>
            </li>
            <li>
              {menu[4]?.card?.card?.title}{' '}
              <button
                className='px-2 m-5  bg-red-100 rounded-lg hover:bg-blue-300 shadow-white'
                onClick={() => handleAddItem(menu[4]?.card?.card?.title)}
              >
                +
              </button>
            </li>
            <li>
              {menu[5]?.card?.card?.title}{' '}
              <button
                className='px-2 m-5  bg-red-100 rounded-lg hover:bg-blue-300 shadow-white'
                onClick={() => handleAddItem(menu[5]?.card?.card?.title)}
              >
                +
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
