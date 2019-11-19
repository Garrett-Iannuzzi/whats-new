import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const  NewsContainer = ({ articles }) => {
  const newsArticles = articles.map(article => {
    return (
      <NewsArticle
        key={article.id}
        title={article.title}
        img={article.img}
        description={article.description}
        url={article.url}
      />
    )
  })

  return (
    <section className="article">
      {newsArticles}
    </section>
  )

}
export default NewsContainer;