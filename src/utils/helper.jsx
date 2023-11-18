// Filter the data
export const filterData = (searchKey, restaurantData) => {
  console.log('filterData: ', restaurantData);
  return restaurantData.filter((data) =>
    data?.info?.name?.toLowerCase()?.includes(searchKey.toLowerCase())
  );
};
