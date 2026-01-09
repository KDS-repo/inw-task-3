import Page from './Page.jsx'
import { useGetArticlesQuery } from '../api/articlesAPI.js';
import RelevantArticle from './RelevantArticle.jsx';

function FrontPage() {
    const { data: posts, isLoading, error } = useGetArticlesQuery();

    if (isLoading || posts.length < 28) {
        console.log("Loading...")
        return <div className="front-page">Loading posts...</div>
    } else {
        console.log("proceeding")
        return (
            <main className="front-page">
                <Page posts={posts.slice(0, 5)} index={0} />
                <Page posts={posts.slice(5, 10)} index={1} />
                <Page posts={posts.slice(10, 15)} index={2} />
                <Page posts={posts.slice(15, 20)} index={3} />
                <div className="front-page__relevant">
                    {posts.slice(-8).map((post) =>
                        <RelevantArticle post={post} key={post.id} />
                    )}
                </div>
            </main>
        )
    }
}

export default FrontPage