import MainArticle from './MainArticle.jsx'
import Top from './Top.jsx'

function Page({ posts, index }) {
    const even = Number(index) % 2 == 0
    return (
        <>
            {even &&
                <div className="page">
                    <MainArticle post={posts[0]} />
                    <Top posts={posts.slice(1)} />
                </div>
            }
            {!even &&
                <div className="page">
                    <Top posts={posts.slice(0, -1)} />
                    <MainArticle post={posts.at(-1)} />
                </div>
            }
        </>
    )
}

export default Page