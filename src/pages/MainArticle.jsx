import { Link } from 'react-router-dom'

function MainArticle({ post }) {
    return (
        <article className="main-article">
            {post &&
                <Link to={`/article/${post.id}`} key={post.id}>
                    <img className="main-article__image" src={post.image} alt="Princess Beatrice and Edoardo Mapelli Mozzi in wedding attire coming out of a church" />
                    <h1 className="main-article__header">{post.title}</h1>
                    <p className="main-article__summary">{post.body.substring(0, 200)}...</p>
                </Link>
            }
        </article>
    )
}

export default MainArticle