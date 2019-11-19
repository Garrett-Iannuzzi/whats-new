import React from 'react';
import './Menu.css'

const Menu = () => {
  return (
    <nav>
      <h1>What's NEWs</h1>
      <input 
        type='text'
        placeholder='Search News'
      />
      <button>Search</button>
    </nav>
  )
}

export default Menu;