import { Link } from 'react-router-dom'
import Page from './Page.jsx'
import { useSelector } from 'react-redux'

function FrontPage() {
    const { articlesList, loading } = useSelector((state) => state.articles)

    if (loading || articlesList.length < 28) {
        console.log("Loading...")
        return <div className="list-page">Loading posts...</div>
    } else {
        console.log("proceeding")
        return (
            <main className="main">
                <Page posts={articlesList.slice(0, 5)} index={0} />
                <Page posts={articlesList.slice(5, 10)} index={1} />
                <Page posts={articlesList.slice(10, 15)} index={2} />
                <Page posts={articlesList.slice(15, 20)} index={3} />
                <div className="relevant">
                    {articlesList.slice(-8).map((post) =>
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