import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setCurrentArticle } from './redux/articleSlice';
import { useNavigate } from 'react-router-dom';

function MainArticle({ post }) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleArticleClick = (e, article) => {
        e.preventDefault()
        dispatch(setCurrentArticle(article))
        navigate(`/article/${article.id}`)
        console.log("hi")
    }

    return (
        <article className="main-article">
            <Link to={`/article/${post.id}`}
                key={post.id}
                state={post}
                onClick={(e) => handleArticleClick(e, post)}
            >
                <img className="main-article__image" src={post.image} alt="Princess Beatrice and Edoardo Mapelli Mozzi in wedding attire coming out of a church" />
                <h1 className="main-article__header">{post.title}</h1>
                <p className="main-article__summary">{post.body.substring(0, 200)}...</p>
            </Link>
        </article>
    )
}

export default MainArticle