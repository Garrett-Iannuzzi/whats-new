import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ title, img, description, url }) => {
  return (
    <article>
      <h3>{title}</h3>
      <img className="art-img" src={img}/>
      <p>{description}</p>
      <button>See Article</button>
    </article>
  )
}

export default NewsArticle;