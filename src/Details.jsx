import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Details() {
  const params = useParams()
  const artList = useSelector((state) => state.articles.articlesList)
  const article = artList.find(post => post.id === +params.id);
  
  return (
    <main className="details-page">
      {article &&
      <article className="full-article">
        <h1 className="full-article__header">{article.title}</h1>
        <img className="full-article__image" src={article.image} />
        <div className="full-article__content">
          {article.body}
        </div>
      </article>}
    </main>
  )
}

export default Details