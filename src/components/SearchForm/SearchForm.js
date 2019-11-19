import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div>
      <input 
        type='text'
        placeholder='Search News'
      />
      <button className='search-btn'>Search</button>
    </div>
  )
}
export default SearchForm;