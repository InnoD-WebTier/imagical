import React from 'react'
import Link from 'gatsby-link'
import logo from '../../images/imagi_logo.png'

const Header = () => (
    <div className="header">
        <div className="header__left-items">
            <Link to="/">
                <img src={logo} alt="logo" className="header__logo" />
            </Link>
        </div>
        <div className="header__right-items">
            <ul className="header__routing-links">
                <li className="header__route">
                    <Link to="/contact" activeClassName="header__link--active" className="header__link">contact</Link>
                </li>
                <li className="header__route">
                    <Link to="/apply" activeClassName="header__link--active" className="header__link">apply</Link>
                </li>
                <li className="header__route">
                    <Link to="/clientsandsponsors" activeClassName="header__link--active" className="header__link">clients & sponsors</Link>
                </li>
                <li className="header__route">
                    <Link to="/team" activeClassName="header__link--active" className="header__link">team</Link>
                </li>
                <li className="header__route">
                    <Link to="/about" activeClassName="header__link--active" className="header__link">about</Link>
                </li>
            </ul>
        </div>
        <div style={{clear: 'both'}}> </div>
    </div>
)

export default Header
