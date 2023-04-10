import React, { useState } from 'react';
import { filterData } from '../utils/helper';

const SearchBar = (props) => {
  const [searchKey, setSearchKey] = useState('');

  const handleSearchInput = (e) => {
    setSearchKey(e.target.value);
  };

  const handleSearchButton = (e) => {
    e.preventDefault(); // Prevent form submission behavior

    let data = filterData(searchKey, props.data);

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
