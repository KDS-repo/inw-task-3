import MainArticle from './MainArticle.jsx'
import TopArticle from './TopArticle.jsx'

function Page({ posts, index }) {
    const even = Number(index) % 2 == 0
    return (
        <>
            {even &&
                <div className="page">
                    <MainArticle post={posts[0]} />
                    <aside className="page__top">
                        <span className="page__top-header">Top Stories</span>
                        <div className="page__top-list">
                            {posts.slice(1).map((post, index) =>
                                <TopArticle post={post} index={index} key={post.id} />
                            )}
                        </div>
                    </aside>
                </div>
            }
            {!even &&
                <div className="page">
                    <aside className="page__top">
                        <span className="page__top-header">Top Stories</span>
                        <div className="page__top-list">
                            {posts.slice(0, -1).map((post, index) =>
                                <TopArticle post={post} index={index} key={post.id} />
                            )}
                        </div>
                    </aside>
                    <MainArticle post={posts.at(-1)} />
                </div>
            }
        </>
    )
}

export default Page