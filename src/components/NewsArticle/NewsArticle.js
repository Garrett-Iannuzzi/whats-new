import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ title, img, description, url }) => {
  return (
    <article>
      <h3>{title}</h3>
      <image>{img}</image>
      <p>{description}</p>
      <button>See Article</button>
    </article>
  )
}

export default NewsArticle;