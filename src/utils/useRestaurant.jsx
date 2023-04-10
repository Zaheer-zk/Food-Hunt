import { useEffect, useState } from 'react';
import { FETCH_MENU_URL } from '../config';

const useRestaurant = (id) => {
  const [menu, setMenu] = useState({});

  useEffect(() => {
    const getRestaurantInfo = async () => {
      const response = await fetch(FETCH_MENU_URL + id + '&submitAction=ENTER');

      const data = await response.json();
      setMenu(data?.data?.cards[0]?.card?.card?.info);
    };

    getRestaurantInfo();
  }, []);

  return menu;
};

export default useRestaurant;
