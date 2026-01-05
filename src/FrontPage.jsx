import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import images from '../img/index.js'
import Page from './Page.jsx'

function FrontPage() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        function fetchPosts() {
            fetch('https://dummyjson.com/posts?limit=28')
                .then((response) => response.json())
                .then((data) => setPosts(data.posts || []))
                .catch((error) => console.log('Failed to fetch posts:', error))
                .finally(() => setLoading(false))
        }
        fetchPosts()
    }, [])

    const imagesArray = Object.values(images)
    const postsWithImages = posts.map((post, index) => ({
        ...post,
        image: imagesArray[index] // images[index]?.url could be useful if images are objects
    }));

    if (loading) {
        return <div className="list-page">Loading posts...</div>
    } else return (
        <main className="main">
            <Page posts={postsWithImages.slice(0, 5)} index={0} />
            <Page posts={postsWithImages.slice(5, 10)} index={1} />
            <Page posts={postsWithImages.slice(10, 15)} index={2} />
            <Page posts={postsWithImages.slice(15, 20)} index={3} />
            <div className="relevant">
                {postsWithImages.slice(-8).map((post) =>
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

export default FrontPage