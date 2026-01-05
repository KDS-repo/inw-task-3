import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

function Details() {
    const location = useLocation();
    const post = location.state || {};

    const article = useSelector((state) => state.articles.currentArticle);

    return (
        <main className="details-page">
            <article className="full-article">
                <h1 className="full-article__header">{article.title}</h1>
                <img className="full-article__image" src={article.image} />
                <div className="full-article__content">
                    {article.body}
                </div>
            </article>
        </main>
    )
}

export default Details