function Page() {
    return (
        <div>
            <link href="./src/index.css" rel="stylesheet"></link>
            <header id="menu" class="header" data-menu="false">
                <button id="toggle" class="header__hamburger-container" aria-label="side menu toggle">
                    <img class="header__hamburger-icon" src="svg/burger-menu-svgrepo-com.svg" alt="burger menu symbol" />
                </button>
                <div class="header__name-box">
                    <a class="header__name">Show Business</a>
                </div>
                <nav class="header__navigation">
                    <a class="header__direction">Home</a>
                    <a class="header__direction">Explore</a>
                    <a class="header__direction">Inspiration</a>
                    <a class="header__direction">Contact us</a>
                </nav>
                <div class="header__login-box">
                    <a class="header__login">Log in</a>
                </div>
            </header>
            <main class="main">
                <div class="page">
                    <article class="main-article">
                        <img class="main-article__image" src="./img/image_892.jpg" alt="Princess Beatrice and Edoardo Mapelli Mozzi in wedding attire coming out of a church" />
                            <h1 class="main-article__header">Princess Beatrice’s Wedding</h1>
                            <p class="main-article__summary">Coverage of Princess Beatrice’s wedding to Edoardo Mapelli Mozzi in July 2020. Coverage of Princess Beatrice’s wedding to Edoardo Mapelli.</p>
                    </article>
                    <aside class="top">
                        <span class="top__header">Top Stories</span>
                        <div class="list">
                            <article class="article">
                                <div>
                                    <div class="article__enumerator">1</div>
                                </div>
                                <div class="article__text">
                                    <h2 class="article__header">Kardashian and Kanye West Divorce</h2>
                                    <span class="article__author">David Pierce</span>
                                    <br />
                                        <span class="article__metrics">
                                            <time class="article__time" datetime="10:00">10:00 AM</time>
                                            <span class="article__comment-container">
                                                <img class="article__comment" src="./svg/chat.svg" alt="comments" />
                                            </span>
                                            87
                                        </span>
                                </div>
                                <div class="article__imagebox">
                                    <img class="article__image" src="./img/image_893.jpg" alt="Photo of Kim Kardashian and Kanye West" />
                                </div>
                            </article>
                            <article class="article">
                                <div>
                                    <div class="article__enumerator">2</div>
                                </div>
                                <div class="article__text">
                                    <h2 class="article__header">Prince Harry and Meghan Markle’s Exit from Royal Duties</h2>
                                    <span class="article__author">David Pierce</span>
                                    <br />
                                        <span class="article__metrics">
                                            <time class="article__time" datetime="10:00">10:00 AM</time>
                                            <span class="article__comment-container">
                                                <img class="article__comment" src="./svg/chat.svg" alt="comments" />
                                            </span>
                                            87
                                        </span>
                                </div>
                                <div class="article__imagebox">
                                    <img class="article__image" src="./img/image_894.jpg" alt="Photo of Prince Harry and Meghan Markle together" />
                                </div>
                            </article>
                            <article class="article">
                                <div>
                                    <div class="article__enumerator">3</div>
                                </div>
                                <div class="article__text">
                                    <h2 class="article__header">Adele’s Weight extremal Loss Transformation</h2>
                                    <span class="article__author">David Pierce</span>
                                    <br />
                                        <span class="article__metrics">
                                            <time class="article__time" datetime="10:00">10:00 AM</time>
                                            <span class="article__comment-container">
                                                <img class="article__comment" src="./svg/chat.svg" alt="comments" />
                                            </span>
                                            87
                                        </span>
                                </div>
                                <div class="article__imagebox">
                                    <img class="article__image" src="./img/image_895.jpg" alt="Photo of Adele in a black dress" />
                                </div>
                            </article>
                            <article class="article">
                                <div>
                                    <div class="article__enumerator">4</div>
                                </div>
                                <div class="article__text">
                                    <h2 class="article__header">Bennifer Reunion (Jennifer Lopez and Ben Affleck)</h2>
                                    <span class="article__author">David Pierce</span>
                                    <br />
                                        <span class="article__metrics">
                                            <time class="article__time" datetime="10:00">10:00 AM</time>
                                            <span class="article__comment-container">
                                                <img class="article__comment" src="./svg/chat.svg" alt="comments" />
                                            </span>
                                            87
                                        </span>
                                </div>
                                <div class="article__imagebox">
                                    <img class="article__image" src="./img/image_896.jpg" alt="Photo of Ben Affleck kissing Jennifer Lopez during a marriage ceremony" />
                                </div>
                            </article>
                        </div>
                    </aside>
                </div>
                <div class="page">
                    <aside class="top">
                        <span class="top__header">Top Stories</span>
                        <div class="list">
                            <article class="article">
                                <div>
                                    <div class="article__enumerator">1</div>
                                </div>
                                <div class="article__text">
                                    <h2 class="article__header">Taylor Swift’s Re-Recordings</h2>
                                    <span class="article__author">David Pierce</span>
                                    <br />
                                        <span class="article__metrics">
                                            <time class="article__time" datetime="10:00">10:00 AM</time>
                                            <span class="article__comment-container">
                                                <img class="article__comment" src="./svg/chat.svg" alt="comments" />
                                            </span>
                                            87
                                        </span>
                                </div>
                                <div class="article__imagebox">
                                    <img loading="lazy" class="article__image" src="./img/image_897.jpg" alt="Cover for Taylor Swift's album 1989" />
                                </div>
                            </article>
                            <article class="article">
                                <div>
                                    <div class="article__enumerator">2</div>
                                </div>
                                <div class="article__text">
                                    <h2 class="article__header">Prince Harry and Meghan Markle’s Oprah Interview Fallout</h2>
                                    <span class="article__author">David Pierce</span>
                                    <br />
                                        <span class="article__metrics">
                                            <time class="article__time" datetime="10:00">10:00 AM</time>
                                            <span class="article__comment-container">
                                                <img class="article__comment" src="./svg/chat.svg" alt="comments" />
                                            </span>
                                            87
                                        </span>
                                </div>
                                <div class="article__imagebox">
                                    <img loading="lazy" class="article__image" src="./img/image_898.jpg" alt="A snapshot of Oprah's show with Prince Harry and Meghan Markle showing the two guests" />
                                </div>
                            </article>
                            <article class="article">
                                <div>
                                    <div class="article__enumerator">3</div>
                                </div>
                                <div class="article__text">
                                    <h2 class="article__header">Kanye West’s Donda Album Release and Public Statements</h2>
                                    <span class="article__author">David Pierce</span>
                                    <br />
                                        <span class="article__metrics">
                                            <time class="article__time" datetime="10:00">10:00 AM</time>
                                            <span class="article__comment-container">
                                                <img class="article__comment" src="./svg/chat.svg" alt="comments" />
                                            </span>
                                            87
                                        </span>
                                </div>
                                <div class="article__imagebox">
                                    <img loading="lazy" class="article__image" src="./img/image_899.jpg" alt="Cover art of Kanye West's album Donda" />
                                </div>
                            </article>
                            <article class="article">
                                <div>
                                    <div class="article__enumerator">4</div>
                                </div>
                                <div class="article__text">
                                    <h2 class="article__header">Britney Spears’ Conservatorship Battle</h2>
                                    <span class="article__author">David Pierce</span>
                                    <br />
                                        <span class="article__metrics">
                                            <time class="article__time" datetime="10:00">10:00 AM</time>
                                            <span class="article__comment-container">
                                                <img class="article__comment" src="./svg/chat.svg" alt="comments" />
                                            </span>
                                            87
                                        </span>
                                </div>
                                <div class="article__imagebox">
                                    <img loading="lazy" class="article__image" src="./img/image_900.jpg" alt="Headshot of Britney Spears in a red dress and a necklace during an event" />
                                </div>
                            </article>
                        </div>
                    </aside>
                    <article class="main-article">
                        <img loading="lazy" class="main-article__image" src="./img/image_901.jpg" alt="Headshot of Prince Philipp in an overcoat smiling politely while it's raining" />
                            <h1 class="main-article__header">Prince Philip’s Passing</h1>
                            <p class="main-article__summary">Reflections and tributes following the death of Prince Philip, Duke of Edinburgh, in April 2021.</p>
                    </article>
                </div>
                <div class="page">
                    <article class="main-article">
                        <img loading="lazy" class="main-article__image" src="./img/image_902.jpg" alt="A snapshot of Lady Gaga in ski gear from the movie House of Gucci" />
                            <h1 class="main-article__header">Lady Gaga in 'House of Gucci'</h1>
                            <p class="main-article__summary">News and reviews surrounding Lady Gaga’s performance in the film "House of Gucci," where she portrays Patrizia Reggiani. Lady Gaga’s performance.</p>
                    </article>
                    <aside class="top">
                        <span class="top__header">Top Stories</span>
                        <div class="list">
                            <article class="article">
                                <div>
                                    <div class="article__enumerator">1</div>
                                </div>
                                <div class="article__text">
                                    <h2 class="article__header">Queen Elizabeth II’s Platinum Jubilee Celebrations</h2>
                                    <span class="article__author">David Pierce</span>
                                    <br />
                                        <span class="article__metrics">
                                            <time class="article__time" datetime="10:00">10:00 AM</time>
                                            <span class="article__comment-container">
                                                <img class="article__comment" src="./svg/chat.svg" alt="comments" />
                                            </span>
                                            87
                                        </span>
                                </div>
                                <div class="article__imagebox">
                                    <img loading="lazy" class="article__image" src="./img/image_903.jpg" alt="Photo of Queen Elizabeth the second in her brand wide hat" />
                                </div>
                            </article>
                            <article class="article">
                                <div>
                                    <div class="article__enumerator">2</div>
                                </div>
                                <div class="article__text">
                                    <h2 class="article__header">Prince William and Kate Middleton’s Public Engagements</h2>
                                    <span class="article__author">David Pierce</span>
                                    <br />
                                        <span class="article__metrics">
                                            <time class="article__time" datetime="10:00">10:00 AM</time>
                                            <span class="article__comment-container">
                                                <img class="article__comment" src="./svg/chat.svg" alt="comments" />
                                            </span>
                                            87
                                        </span>
                                </div>
                                <div class="article__imagebox">
                                    <img loading="lazy" class="article__image" src="./img/image_904.jpg" alt="Photo of Prince William and Kate Middleton's public appearance" />
                                </div>
                            </article>
                            <article class="article">
                                <div>
                                    <div class="article__enumerator">3</div>
                                </div>
                                <div class="article__text">
                                    <h2 class="article__header">Prince Harry and Meghan Markle’s Activities</h2>
                                    <span class="article__author">David Pierce</span>
                                    <br />
                                        <span class="article__metrics">
                                            <time class="article__time" datetime="10:00">10:00 AM</time>
                                            <span class="article__comment-container">
                                                <img class="article__comment" src="./svg/chat.svg" alt="comments" />
                                            </span>
                                            87
                                        </span>
                                </div>
                                <div class="article__imagebox">
                                    <img loading="lazy" class="article__image" src="./img/image_905.jpg" alt="Photo of Prince Harry and Meghan Markle" />
                                </div>
                            </article>
                            <article class="article">
                                <div>
                                    <div class="article__enumerator">4</div>
                                </div>
                                <div class="article__text">
                                    <h2 class="article__header">Royal Family Responses to Controversies</h2>
                                    <span class="article__author">David Pierce</span>
                                    <br />
                                        <span class="article__metrics">
                                            <time class="article__time" datetime="10:00">10:00 AM</time>
                                            <span class="article__comment-container">
                                                <img class="article__comment" src="./svg/chat.svg" alt="comments" />
                                            </span>
                                            87
                                        </span>
                                </div>
                                <div class="article__imagebox">
                                    <img loading="lazy" class="article__image" src="./img/image_906.jpg" alt="Photoshoot of four members of the Royal Family" />
                                </div>
                            </article>
                        </div>
                    </aside>
                </div>
                <div class="page">
                    <aside class="top">
                        <span class="top__header">Top Stories</span>
                        <div class="list">
                            <article class="article">
                                <div>
                                    <div class="article__enumerator">1</div>
                                </div>
                                <div class="article__text">
                                    <h2 class="article__header">The Royal Family’s Social Media Presence</h2>
                                    <span class="article__author">David Pierce</span>
                                    <br />
                                        <span class="article__metrics">
                                            <time class="article__time" datetime="10:00">10:00 AM</time>
                                            <span class="article__comment-container">
                                                <img class="article__comment" src="./svg/chat.svg" alt="comments" />
                                            </span>
                                            87
                                        </span>
                                </div>
                                <div class="article__imagebox">
                                    <img loading="lazy" class="article__image" src="./img/image_907.jpg" alt="Photo of Princes William and Harry with their spouses. Men are in military parade uniform" />
                                </div>
                            </article>
                            <article class="article">
                                <div>
                                    <div class="article__enumerator">2</div>
                                </div>
                                <div class="article__text">
                                    <h2 class="article__header">Zendaya’s Career Achievements</h2>
                                    <span class="article__author">David Pierce</span>
                                    <br />
                                        <span class="article__metrics">
                                            <time class="article__time" datetime="10:00">10:00 AM</time>
                                            <span class="article__comment-container">
                                                <img class="article__comment" src="./svg/chat.svg" alt="comments" />
                                            </span>
                                            87
                                        </span>
                                </div>
                                <div class="article__imagebox">
                                    <img loading="lazy" class="article__image" src="./img/image_908.jpg" alt="Photo of Zendaya in a black jacket and fishnet shirt" />
                                </div>
                            </article>
                            <article class="article">
                                <div>
                                    <div class="article__enumerator">3</div>
                                </div>
                                <div class="article__text">
                                    <h2 class="article__header">Prince William’s Earthshot Prize Initiative</h2>
                                    <span class="article__author">David Pierce</span>
                                    <br />
                                        <span class="article__metrics">
                                            <time class="article__time" datetime="10:00">10:00 AM</time>
                                            <span class="article__comment-container">
                                                <img class="article__comment" src="./svg/chat.svg" alt="comments" />
                                            </span>
                                            87
                                        </span>
                                </div>
                                <div class="article__imagebox">
                                    <img loading="lazy" class="article__image" src="./img/image_909.jpg" alt="Photo of Prince William and his wife at a Boston 2022 event" />
                                </div>
                            </article>
                            <article class="article">
                                <div>
                                    <div class="article__enumerator">4</div>
                                </div>
                                <div class="article__text">
                                    <h2 class="article__header">Chris Pratt’s Film Projects</h2>
                                    <span class="article__author">David Pierce</span>
                                    <br />
                                        <span class="article__metrics">
                                            <time class="article__time" datetime="10:00">10:00 AM</time>
                                            <span class="article__comment-container">
                                                <img class="article__comment" src="./svg/chat.svg" alt="comments" />
                                            </span>
                                            87
                                        </span>
                                </div>
                                <div class="article__imagebox">
                                    <img loading="lazy" class="article__image" src="./img/image_910.jpg" alt="A shot of Chris Pratt in Guardians of the Galaxy" />
                                </div>
                            </article>
                        </div>
                    </aside>
                    <article class="main-article">
                        <img loading="lazy" class="main-article__image" src="./img/image_911.jpg" alt="Photo of Dwayne Johnson in a gym" />
                            <h1 class="main-article__header">'The Rock' Johnson’s Projects</h1>
                            <p class="main-article__summary">Updates on Dwayne Johnson’s upcoming film and television projects, as well as his business ventures and philanthropic activities. Well as his business ventures and philanthropic activities.</p>
                    </article>
                </div>
                <div class="relevant">
                    <article class="compact-article">
                        <img loading="lazy" class="compact-article__image" src="./img/image_912.jpg" alt="Photo of Ryan Reynolds and Blake Lively on an event" />
                            <h1 class="compact-article__header">Ryan Reynolds and Blake Lively’s Philanthropy</h1>
                            <p class="compact-article__summary">Updates on the philanthropic activities of Ryan Reynolds.</p>
                    </article>
                    <article class="compact-article">
                        <img loading="lazy" class="compact-article__image" src="./img/image_913.jpg" alt="Headshot of Prince Andrew in a suit with a serious expression" />
                            <h1 class="compact-article__header">Prince Andrew’s Legal Issues</h1>
                            <p class="compact-article__summary">Ongoing coverage of legal matters involving Prince Andrew.</p>
                    </article>
                    <article class="compact-article">
                        <img loading="lazy" class="compact-article__image" src="./img/image_914.jpg" alt="Photo from Reese Witherspoon's event photoshoot" />
                            <h1 class="compact-article__header">Reese Witherspoon’s Production Ventures</h1>
                            <p class="compact-article__summary">News on Leonardo DiCaprio’s ongoing environmental.</p>
                    </article>
                    <article class="compact-article">
                        <img loading="lazy" class="compact-article__image" src="./img/image_915.jpg" alt="Photo of Queen Elizabeth the second in her signature blue hat" />
                            <h1 class="compact-article__header">Queen Elizabeth II’s Health Updates</h1>
                            <p class="compact-article__summary">Periodic updates on the health of Queen Elizabeth II.</p>
                    </article>
                    <article class="compact-article">
                        <img loading="lazy" class="compact-article__image" src="./img/image_916.jpg" alt="Photo of Prince Andrew's book on an exhibition shelf" />
                            <h1 class="compact-article__header">Prince Harry’s Memoir Announcement</h1>
                            <p class="compact-article__summary">Reports on Prince Harry’s announcement of a forthcoming.</p>
                    </article>
                    <article class="compact-article">
                        <img loading="lazy" class="compact-article__image" src="./img/image_917.jpg" alt="Headshot of Leonardo DiCaprio in a casual jacket" />
                            <h1 class="compact-article__header">Leonardo DiCaprio’s Environmental Advocacy</h1>
                            <p class="compact-article__summary">News on Leonardo DiCaprio’s ongoing environmental advocacy.</p>
                    </article>
                    <article class="compact-article">
                        <img loading="lazy" class="compact-article__image" src="./img/image_918.jpg" alt="Headshot of Princess Eugenie and her spouse together, with wide smiles" />
                            <h1 class="compact-article__header">Princess Eugenie’s Pregnancy Announcement</h1>
                            <p class="compact-article__summary">News about Princess Eugenie, daughter of Prince Andrew.</p>
                    </article>
                    <article class="compact-article">
                        <img loading="lazy" class="compact-article__image" src="./img/image_919.jpg" alt="Photo of Emma Stone in her Cruella costume" />
                            <h1 class="compact-article__header">Emma Stone’s Role in "Cruella"</h1>
                            <p class="compact-article__summary">Coverage of Emma Stone’s role as the iconic Disney villain.</p>
                    </article>
                </div>
            </main>
            <footer class="footer">
                <p class="footer__logo">Logo</p>
                <br />
                    <p class="footer__links">Contact / Tip us / Community guidelines / About / Etnics statement</p>
            </footer>
        </div>
    )
}

export default Page