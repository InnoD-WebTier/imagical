import React from 'react'
import Link from 'gatsby-link'
import logo from '../../images/imagi_logo.png'

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-custom">
        <Link to="/">
            <img src={logo} alt="logo" className="header__logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto header__routing-links">
                <li className="header__route">
                    <Link to="/contact" activeClassName="header__link--active" className="header__link">contact</Link>
                </li>
                <li className="header__route">
                    <Link to="/apply" activeClassName="header__link--active" className="header__link">apply</Link>
            </li>
                <li className="header__route">
                    <Link to="/partners" activeClassName="header__link--active" className="header__link">clients & sponsors</Link>
                </li>
                <li className="header__route">
                    <Link to="/team" activeClassName="header__link--active" className="header__link">team</Link>
                </li>
                <li className="header__route">
                    <Link to="/about" activeClassName="header__link--active" className="header__link">about</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header
