import { useParams, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Details() {
    const { id } = useParams()
    const navigate = useNavigate()

    const location = useLocation();
    const post = location.state || {};

    useEffect(() => {
        const randomId = Math.floor(Math.random() * 150) + 1
        fetch(`https://dummyjson.com/posts/${randomId}`)
            .then(res => res.json())
            .then(data => setArticleText(data.body || 'No content available'))
            .catch(() => setArticleText('Failed to load article'))
    }, [])

    return (
        <div className="details-page">
            <button onClick={() => navigate(-1)} className="back-button">← Back to News</button>

            <article className="full-article">
                <h1>{post.title}</h1>
                <img className="main-article__image" src={post.image} />
                <div className="full-article__content">
                    {post.body}
                </div>
            </article>
        </div>
    )
}

export default Details