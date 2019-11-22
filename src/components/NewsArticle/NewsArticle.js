import React from 'react';
import './NewsArticle.css';
import PropTypes from 'prop-types';

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

NewsArticle.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.number
}


export default NewsArticle;