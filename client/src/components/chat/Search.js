import React from 'react';
import SearchedUser from './SearchedUser';

const Search = () => {
  return(
    <div id='search-container' className='search'>
      <div className='input-container'>
        <input
          placeholder='Поиск...' 
        />
      </div>
      <div className='string-container'>
        Результаты поиска...
      </div>
      <div className='results-container'>
        <SearchedUser />
        <SearchedUser />
        <SearchedUser />
        <SearchedUser />
        <SearchedUser />
        <SearchedUser />

        <SearchedUser />
        <SearchedUser />
        <SearchedUser />

        <SearchedUser />
        <SearchedUser />
        <SearchedUser />
        <SearchedUser />
        <SearchedUser />
        <SearchedUser />

      </div>
    </div>
  )
};

export default Search;
