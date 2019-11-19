import React from 'react';
import './Menu.css'

const Menu = ({ filterByNewsType }) => {
  return (
    <nav className='navbar'> 
      <h1>What's NEWs</h1>
      <aside>
        <button className='news-type-btn' onClick={filterByNewsType}>Local News</button>
        <button className='news-type-btn' onClick={filterByNewsType}>Tech</button>
        <button className='news-type-btn' onClick={filterByNewsType}>Entertainment</button>
        <button className='news-type-btn' onClick={filterByNewsType}>Science</button>
        <button className='news-type-btn' onClick={filterByNewsType}>Health</button>
      </aside>
    </nav>
  )
}

export default Menu;