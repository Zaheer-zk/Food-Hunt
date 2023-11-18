import React, { useContext, useState } from 'react';
import { filterData } from '../utils/helper';
import UserContext from '../utils/UserContext';

const SearchBar = (props) => {
  const [searchKey, setSearchKey] = useState('');
  const { user, setUser } = useContext(UserContext);

  const handleSearchInput = (e) => {
    setSearchKey(e.target.value);
  };

  const handleSearchButton = (e) => {
    e.preventDefault(); // Prevent form submission behavior
    const filteredData = filterData(searchKey, props.data);
    props.setRestaurantData(filteredData);
  };

  return (
    <div className='flex justify-center items-center mt-3'>
      <form className='flex w-full max-w-xl relative'>
        <input
          type='text'
          name='search-input'
          id='search-input'
          className='w-full p-3 shadow-md outline-none rounded-3xl focus:ring-2 focus:ring-violet-500 transition-all'
          placeholder='Search item here...'
          onChange={handleSearchInput}
          value={searchKey}
        />
        <button
          type='submit'
          className='absolute right-0 px-6 h-full bg-slate-400 text-white rounded-r-3xl hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all'
          onClick={handleSearchButton}
        >
          <i className='fas fa-search'></i> Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
