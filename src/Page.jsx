import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import images from '../img/index.js'
import svgs from '../svg/index.js'

function Page() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        function fetchPosts() {
            fetch('https://dummyjson.com/posts?limit=12')
                .then((response) => response.json())
                .then((data) => setPosts(data.posts || []))
                .catch((error) => console.log('Failed to fetch posts:', error))
                .finally(setLoading(false))
        }
        fetchPosts()
    }, [])

    const imagesArray = Object.values(images).slice(-8)
    const postsWithImages = posts.map((post, index) => ({
        ...post,
        image: imagesArray[index] // or images[index]?.url if images are objects
    }));

    if (loading) {
        return <div className="list-page">Loading posts...</div>
    } else return (
        <main className="main">
            <div className="page">
                <article className="main-article">
                    <Link to="/article/1">
                        <img className="main-article__image" src={images.image_892} alt="Princess Beatrice and Edoardo Mapelli Mozzi in wedding attire coming out of a church" />
                        <h1 className="main-article__header">Princess Beatrice’s Wedding</h1>
                        <p className="main-article__summary">Coverage of Princess Beatrice’s wedding to Edoardo Mapelli Mozzi in July 2020. Coverage of Princess Beatrice’s wedding to Edoardo Mapelli.</p>
                    </Link>
                </article>
                <aside className="top">
                    <span className="top__header">Top Stories</span>
                    <div className="list">
                        <Link to="/article/2">
                            <article className="article">
                                <div>
                                    <div className="article__enumerator">1</div>
                                </div>
                                <div className="article__text">
                                    <h2 className="article__header">Kardashian and Kanye West Divorce</h2>
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
                                    <img className="article__image" src={images.image_893} alt="Photo of Kim Kardashian and Kanye West" />
                                </div>
                            </article>
                        </Link>
                        <Link to="/article/3">
                            <article className="article">
                                <div>
                                    <div className="article__enumerator">2</div>
                                </div>
                                <div className="article__text">
                                    <h2 className="article__header">Prince Harry and Meghan Markle’s Exit from Royal Duties</h2>
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
                                    <img className="article__image" src={images.image_894} alt="Photo of Prince Harry and Meghan Markle together" />
                                </div>
                            </article>
                        </Link>
                        <Link to="/article/4">
                            <article className="article">
                                <div>
                                    <div className="article__enumerator">3</div>
                                </div>
                                <div className="article__text">
                                    <h2 className="article__header">Adele’s Weight extremal Loss Transformation</h2>
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
                                    <img className="article__image" src={images.image_895} alt="Photo of Adele in a black dress" />
                                </div>
                            </article>
                        </Link>
                        <Link to="/article/5">
                            <article className="article">
                                <div>
                                    <div className="article__enumerator">4</div>
                                </div>
                                <div className="article__text">
                                    <h2 className="article__header">Bennifer Reunion (Jennifer Lopez and Ben Affleck)</h2>
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
                                    <img className="article__image" src={images.image_896} alt="Photo of Ben Affleck kissing Jennifer Lopez during a marriage ceremony" />
                                </div>
                            </article>
                        </Link>
                    </div>
                </aside>
            </div>
            <div className="page">
                <aside className="top">
                    <span className="top__header">Top Stories</span>
                    <div className="list">
                        <Link to="/article/6">
                            <article className="article">
                                <div>
                                    <div className="article__enumerator">1</div>
                                </div>
                                <div className="article__text">
                                    <h2 className="article__header">Taylor Swift’s Re-Recordings</h2>
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
                                    <img loading="lazy" className="article__image" src={images.image_897} alt="Cover for Taylor Swift's album 1989" />
                                </div>
                            </article>
                        </Link>
                        <Link to="/article/7">
                            <article className="article">
                                <div>
                                    <div className="article__enumerator">2</div>
                                </div>
                                <div className="article__text">
                                    <h2 className="article__header">Prince Harry and Meghan Markle’s Oprah Interview Fallout</h2>
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
                                    <img loading="lazy" className="article__image" src={images.image_898} alt="A snapshot of Oprah's show with Prince Harry and Meghan Markle showing the two guests" />
                                </div>
                            </article>
                        </Link>
                        <Link to="/article/8">
                            <article className="article">
                                <div>
                                    <div className="article__enumerator">3</div>
                                </div>
                                <div className="article__text">
                                    <h2 className="article__header">Kanye West’s Donda Album Release and Public Statements</h2>
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
                                    <img loading="lazy" className="article__image" src={images.image_899} alt="Cover art of Kanye West's album Donda" />
                                </div>
                            </article>
                        </Link>
                        <Link to="/article/9">
                            <article className="article">
                                <div>
                                    <div className="article__enumerator">4</div>
                                </div>
                                <div className="article__text">
                                    <h2 className="article__header">Britney Spears’ Conservatorship Battle</h2>
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
                                    <img loading="lazy" className="article__image" src={images.image_900} alt="Headshot of Britney Spears in a red dress and a necklace during an event" />
                                </div>
                            </article>
                        </Link>
                    </div>
                </aside>
                <article className="main-article">
                    <Link to="/article/10">
                        <img loading="lazy" className="main-article__image" src={images.image_901} alt="Headshot of Prince Philipp in an overcoat smiling politely while it's raining" />
                        <h1 className="main-article__header">Prince Philip’s Passing</h1>
                        <p className="main-article__summary">Reflections and tributes following the death of Prince Philip, Duke of Edinburgh, in April 2021.</p>
                    </Link>
                </article>
            </div>
            <div className="page">
                <article className="main-article">
                    <Link to="/article/11">
                        <img loading="lazy" className="main-article__image" src={images.image_902} alt="A snapshot of Lady Gaga in ski gear from the movie House of Gucci" />
                        <h1 className="main-article__header">Lady Gaga in 'House of Gucci'</h1>
                        <p className="main-article__summary">News and reviews surrounding Lady Gaga’s performance in the film "House of Gucci," where she portrays Patrizia Reggiani. Lady Gaga’s performance.</p>
                    </Link>
                </article>
                <aside className="top">
                    <span className="top__header">Top Stories</span>
                    <div className="list">
                        <Link to="/article/12">
                            <article className="article">
                                <div>
                                    <div className="article__enumerator">1</div>
                                </div>
                                <div className="article__text">
                                    <h2 className="article__header">Queen Elizabeth II’s Platinum Jubilee Celebrations</h2>
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
                                    <img loading="lazy" className="article__image" src={images.image_903} alt="Photo of Queen Elizabeth the second in her brand wide hat" />
                                </div>
                            </article>
                        </Link>
                        <Link to="/article/13">
                            <article className="article">
                                <div>
                                    <div className="article__enumerator">2</div>
                                </div>
                                <div className="article__text">
                                    <h2 className="article__header">Prince William and Kate Middleton’s Public Engagements</h2>
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
                                    <img loading="lazy" className="article__image" src={images.image_904} alt="Photo of Prince William and Kate Middleton's public appearance" />
                                </div>
                            </article>
                        </Link>
                        <Link to="/article/14">
                            <article className="article">
                                <div>
                                    <div className="article__enumerator">3</div>
                                </div>
                                <div className="article__text">
                                    <h2 className="article__header">Prince Harry and Meghan Markle’s Activities</h2>
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
                                    <img loading="lazy" className="article__image" src={images.image_905} alt="Photo of Prince Harry and Meghan Markle" />
                                </div>
                            </article>
                        </Link>
                        <Link to="/article/15">
                            <article className="article">
                                <div>
                                    <div className="article__enumerator">4</div>
                                </div>
                                <div className="article__text">
                                    <h2 className="article__header">Royal Family Responses to Controversies</h2>
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
                                    <img loading="lazy" className="article__image" src={images.image_906} alt="Photoshoot of four members of the Royal Family" />
                                </div>
                            </article>
                        </Link>
                    </div>
                </aside>
            </div>
            <div className="page">
                <aside className="top">
                    <span className="top__header">Top Stories</span>
                    <div className="list">
                        <Link to="/article/16">
                            <article className="article">
                                <div>
                                    <div className="article__enumerator">1</div>
                                </div>
                                <div className="article__text">
                                    <h2 className="article__header">The Royal Family’s Social Media Presence</h2>
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
                                    <img loading="lazy" className="article__image" src={images.image_907} alt="Photo of Princes William and Harry with their spouses. Men are in military parade uniform" />
                                </div>
                            </article>
                        </Link>
                        <Link to="/article/17">
                            <article className="article">
                                <div>
                                    <div className="article__enumerator">2</div>
                                </div>
                                <div className="article__text">
                                    <h2 className="article__header">Zendaya’s Career Achievements</h2>
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
                                    <img loading="lazy" className="article__image" src={images.image_908} alt="Photo of Zendaya in a black jacket and fishnet shirt" />
                                </div>
                            </article>
                        </Link>
                        <Link to="/article/18">
                            <article className="article">
                                <div>
                                    <div className="article__enumerator">3</div>
                                </div>
                                <div className="article__text">
                                    <h2 className="article__header">Prince William’s Earthshot Prize Initiative</h2>
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
                                    <img loading="lazy" className="article__image" src={images.image_909} alt="Photo of Prince William and his wife at a Boston 2022 event" />
                                </div>
                            </article>
                        </Link>
                        <Link to="/article/19">
                            <article className="article">
                                <div>
                                    <div className="article__enumerator">4</div>
                                </div>
                                <div className="article__text">
                                    <h2 className="article__header">Chris Pratt’s Film Projects</h2>
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
                                    <img loading="lazy" className="article__image" src={images.image_910} alt="A shot of Chris Pratt in Guardians of the Galaxy" />
                                </div>
                            </article>
                        </Link>
                    </div>
                </aside>
                <article className="main-article">
                    <Link to="/article/20">
                        <img loading="lazy" className="main-article__image" src={images.image_911} alt="Photo of Dwayne Johnson in a gym" />
                        <h1 className="main-article__header">'The Rock' Johnson’s Projects</h1>
                        <p className="main-article__summary">Updates on Dwayne Johnson’s upcoming film and television projects, as well as his business ventures and philanthropic activities. Well as his business ventures and philanthropic activities.</p>
                    </Link>
                </article>
            </div>
            <div className="relevant">
                {postsWithImages.slice(0, 8).map((post) =>
                    <article key={post.id} className="compact-article">
                        <Link to={"/article/${post.id}"}>
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

export default Page