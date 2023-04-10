// Filter the data
export const filterData = (searchKey, restaurantData) => {
  console.log(restaurantData);
  return restaurantData.filter((data) =>
    data?.data?.name?.toLowerCase()?.includes(searchKey.toLowerCase())
  );
};
