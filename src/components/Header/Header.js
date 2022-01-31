import React from 'react';
import './Header.css'
import punkLogo from '../../assets/header/cryptopunk-logo.png'
import searchIcon from '../../assets/header/search.png'
import themeImage from '../../assets/header/theme-switch.png'
function Header() {
    return (
        <div className="header">
            <div className="header__clogo">
                <img src={punkLogo} alt="punklogo" className="punkLogo" />
            </div>
            <div className="header__searchBar">
                <div className="searchIcon">
                    <img src={searchIcon} alt='' />
                </div>
                <input type="text" placeholder="Search, item or user" className="header__searchInput" />
            </div>
            <div className="heder__itemsLink">
                <p>Drop</p>
                <p>MarketPlace</p>
                <p>Create</p>
            </div>
            <div className="header__actions">
                <div className="header__themeSwitch">
                    <img src={themeImage} alt='' />
                </div>
            </div>
            <div className="header__loginButton">GET IN</div>
        </div>
    )
}

export default Header;