import { Link } from "react-router-dom"

function RelevantArticle({ post }) {
    return (
        <article key={post.id} className="relevant-article">
            <Link to={`/article/${post.id}`} key={post.id}>
                <img loading="lazy" className="relevant-article__image" src={post.image} alt="Photo of Ryan Reynolds and Blake Lively on an event" />
                <h1 className="relevant-article__header">{post.title}</h1>
                <p className="relevant-article__summary">{post.body.substring(0, 80)}...</p>
            </Link>
        </article>
    )
}

export default RelevantArticle