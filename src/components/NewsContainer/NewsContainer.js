import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';
import PropTypes from 'prop-types';

const  NewsContainer = ({ articles }) => {
  console.log(articles)
  const newsArticles = articles.map(article => {
    return (
      <NewsArticle
        key={article.id}
        title={article.headline}
        img={article.img}
        description={article.description}
        url={article.url}
      />
    )
  })

  return (
    <section className="article-section">
      {newsArticles}
    </section>
  )
}

NewsContainer.propTypes = {
  articles: PropTypes.array
}

export default NewsContainer;