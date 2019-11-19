import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <aside>
      <button className='news-type-btn'>Local News</button>
      <button className='news-type-btn'>Tech</button>
      <button className='news-type-btn'>Entertainment</button>
      <button className='news-type-btn'>Science</button>
      <button className='news-type-btn'>Health</button>
    </aside>
  )
}
export default SearchForm;