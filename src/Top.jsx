import { Link } from 'react-router-dom'
import svgs from '../svg/index.js'

function Top({ posts }) {
    return (
        <aside className="top">
            <span className="top__header">Top Stories</span>
            <div className="list">
                {posts.map((post, index) =>
                    <Link to={`/article/${post.id}`}  key={post.id}>
                        <article className="article">
                            <div>
                                <div className="article__enumerator">{index + 1}</div>
                            </div>
                            <div className="article__text">
                                <h2 className="article__header">{post.title}</h2>
                                <span className="article__author">David Pierce</span>
                                <br />
                                <span className="article__metrics">
                                    <time className="article__time" dateTime="10:00">10:00 AM</time>
                                    <span className="article__comment-container">
                                        <img className="article__comment" src={svgs.chat} alt="comments" />
                                    </span>
                                    87
                                </span>
                            </div>
                            <div className="article__imagebox">
                                <img className="article__image" src={post.image} alt="Photo of Kim Kardashian and Kanye West" />
                            </div>
                        </article>
                    </Link>
                )}
            </div>
        </aside>
    )
}

export default Top