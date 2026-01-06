import { Link } from 'react-router-dom'
import Page from './Page.jsx'
import { useGetArticlesQuery } from './redux/reduxAPI.js';

function FrontPage() {
    const { data: posts, isLoading, error } = useGetArticlesQuery();

    if (isLoading || posts.length < 28) {
        console.log("Loading...")
        return <div className="list-page">Loading posts...</div>
    } else {
        console.log("proceeding")
        return (
            <main className="main">
                <Page posts={posts.slice(0, 5)} index={0} />
                <Page posts={posts.slice(5, 10)} index={1} />
                <Page posts={posts.slice(10, 15)} index={2} />
                <Page posts={posts.slice(15, 20)} index={3} />
                <div className="relevant">
                    {posts.slice(-8).map((post) =>
                        <article key={post.id} className="compact-article">
                            <Link to={`/article/${post.id}`} state={post} key={post.id}>
                                <img loading="lazy" className="compact-article__image" src={post.image} alt="Photo of Ryan Reynolds and Blake Lively on an event" />
                                <h1 className="compact-article__header">{post.title}</h1>
                                <p className="compact-article__summary">{post.body.substring(0, 80)}...</p>
                            </Link>
                        </article>
                    )}
                </div>
            </main>
        )
    }
}

export default FrontPage