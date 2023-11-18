import { useEffect, useState } from 'react';
import { FETCH_MENU_URL } from '../config';

const useRestaurant = (id) => {
  const [menu, setMenu] = useState([]); // Initialize menu as an empty array
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    const getRestaurantInfo = async () => {
      try {
        const response = await fetch(
          FETCH_MENU_URL + id + '&submitAction=ENTER'
        );
        const data = await response.json();
        setRestaurant(data?.data?.cards[0]?.card?.card?.info);

        // Check if the menu path is an array before setting it
        const menuData =
          data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        if (Array.isArray(menuData)) {
          setMenu(menuData);
        } else {
          console.error('Menu data is not an array:', menuData);
        }
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };

    getRestaurantInfo();
  }, [id]); // Add id as a dependency

  return [restaurant, menu];
};

export default useRestaurant;
