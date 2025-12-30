import { Link } from "react-router-dom";
import svgs from '../svg/index.js'

function Header() {
    return (
        <header id="menu" className="header" data-menu="false">
            <button id="toggle" className="header__hamburger-container" aria-label="side menu toggle">
                <img className="header__hamburger-icon" src={svgs.burger_menu_svgrepo_com} alt="burger menu symbol" />
            </button>
            <div className="header__name-box">
                <a className="header__name">Show Business</a>
            </div>
            <nav className="header__navigation">
                <a className="header__direction">Home</a>
                <a className="header__direction">Explore</a>
                <a className="header__direction">Inspiration</a>
                <a className="header__direction">Contact us</a>
            </nav>
            <div className="header__login-box">
                <Link to="/login" className="header__login">Log in</Link>
            </div>
        </header>
    )
}

export default Header