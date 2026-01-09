import { Link } from "react-router-dom";
import svgs from '../../svg/index.js'
import { useEffect, useState } from "react";
import { useMeMutation } from "../api/authAPI.js";

function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    function toggleMenu() {
        setIsMenuVisible(!isMenuVisible);
    }
    //Save for other buttons since they should close the menu, and it won't happen automatically
    function closeMenu() {
        setIsMenuVisible(false);
    }
    const [uName, setUName] = useState()
    const [me, { isLoading, error }] = useMeMutation();
    useEffect(() => {
        const authToken = localStorage.getItem('token');
        me(authToken).unwrap()
            .then((data) => setUName(data.firstName))
            .catch((error) => {
                error.status === 401 ? console.log("Token Expired") : console.error(error)
            })
    }, [])

    return (
        <header id="menu" className="header" data-menu={isMenuVisible}>
            <button id="toggle" className="header__hamburger-container" onClick={toggleMenu} aria-label="side menu toggle">
                <img className="header__hamburger-icon" src={svgs.burger_menu_svgrepo_com} alt="burger menu symbol" />
            </button>
            <div className="header__name-box">
                <Link to={`/`} onClick={closeMenu} className="header__name">
                    Show Business
                </Link>
            </div>
            <nav className="header__navigation">
                <a className="header__direction">Home</a>
                <a className="header__direction">Explore</a>
                <a className="header__direction">Inspiration</a>
                <a className="header__direction">Contact us</a>
            </nav>
            <div className="header__login-box">
                <Link to="/login" className="header__login">
                    {uName ? uName : 'Log in'}
                </Link>
            </div>
        </header>
    )
}

export default Header