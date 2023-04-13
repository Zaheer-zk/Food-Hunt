import { useEffect, useState } from 'react';
import { FETCH_MENU_URL } from '../config';

const useRestaurant = (id) => {
  const [menu, setMenu] = useState({});
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    const getRestaurantInfo = async () => {
      const response = await fetch(FETCH_MENU_URL + id + '&submitAction=ENTER');

      const data = await response.json();
      console.log('dtaa', data);
      setRestaurant(data?.data?.cards[0]?.card?.card?.info);
      setMenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    };

    getRestaurantInfo();
  }, []);
  console.log(menu);
  return [restaurant, menu];
};

export default useRestaurant;
