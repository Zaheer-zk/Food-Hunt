import React, { useState } from 'react';

const SearchBar = (props) => {
  const [searchKey, setSearchKey] = useState('');

  const handleSearchInput = (e) => {
    setSearchKey(e.target.value);
  };

  // Filter the data
  const filterData = (searchKey, restaurantData) => {
    return restaurantData.filter((data) =>
      data?.strMeal?.toLowerCase()?.includes(searchKey.toLowerCase())
    );
  };

  const handleSearchButton = (e) => {
    e.preventDefault(); // Prevent form submission behavior

    const data = filterData(searchKey, props.data);

    // data.length === 0 ? ['There is no such food'] : data;

    // Set filtered data
    props.setRestaurantData(data);
  };

  return (
    <div className="search__bar">
      <form action="">
        <input
          type="text"
          name="search-input"
          id="search-input"
          className="search__input"
          placeholder="Search food here..."
          onChange={handleSearchInput}
          value={searchKey}
        />
        <button
          type="submit"
          className="search__button"
          onClick={handleSearchButton}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
