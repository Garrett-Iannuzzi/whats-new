import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ title, img, description, url }) => {
  return (
    <article className='article-individual'>
      <h3 className='article-title'>{title}</h3>
      <img className='art-img' src={img} alt='article img'/>
      <p className='article-description'>{description}</p>
      <a href={url}><button className='see-article-btn'>See Article</button></a>
    </article>
  )
}

export default NewsArticle;