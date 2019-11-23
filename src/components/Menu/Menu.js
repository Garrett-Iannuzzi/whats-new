import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';

const Menu = ({ filterByNewsType, btnTitles }) => {

  const menuBtns = btnTitles.map(title => {
      return (
        <button className='news-type-btn' key={Math.random().toString()} onClick={filterByNewsType}>{title}</button>
      )
  })

  return (
    <nav className='navbar'> 
      <h1>What's <span>NEW</span>s</h1>
      <aside>
        {menuBtns}
      </aside>
    </nav>
  )
}

Menu.propTypes = {
  filterByNewsType: PropTypes.func,
  btnTitles: PropTypes.array
}

export default Menu;