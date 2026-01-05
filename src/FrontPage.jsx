import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import images from '../img/index.js'
import Page from './Page.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setArticlesList } from './redux/articleSlice.js'

function FrontPage() {
    const dispatch = useDispatch()
    const { articlesList, loading } = useSelector((state) => state.articles)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        dispatch(setLoading(true))
        console.log("loading 1 is:", loading)
        function fetchPosts() {
            fetch('https://dummyjson.com/posts?limit=28')
                .then((response) => response.json())
                .then((data) => {
                    //setPosts(data.posts || [])
                    const imagesArray = Object.values(images)
                    const postsWithImages = data.posts.map((post, index) => ({
                        ...post,
                        image: imagesArray[index] // images[index]?.url could be useful if images are objects
                    }));
                    dispatch(setArticlesList(postsWithImages))
                })
                .catch((error) => console.log('Failed to fetch posts:', error))
                .finally(() => dispatch(setLoading(false)))
        }
        fetchPosts()
    }, [dispatch])
    console.log("loading 2 is:", loading)

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