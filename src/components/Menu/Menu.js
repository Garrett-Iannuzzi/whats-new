import React from 'react';
import './Menu.css'

const Menu = ({ filterByNewsType, btnTitles }) => {

  const menuBtns = btnTitles.map(title => {
      return (
        <button className='news-type-btn' key={Math.random().toString()} onClick={filterByNewsType}>{title}</button>
      )
  })

  return (
    <nav className='navbar'> 
      <h1>What's NEWs</h1>
      <aside>
        {menuBtns}
      </aside>
    </nav>
  )
}

export default Menu;