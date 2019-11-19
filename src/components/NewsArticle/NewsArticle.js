import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ title, img, description, url }) => {
  return (
    <article className='article-individual'>
      <h3>{title}</h3>
      <img className='art-img' src={img}/>
      <p>{description}</p>
      <button className='see-article-btn'>See Article</button>
    </article>
  )
}

export default NewsArticle;