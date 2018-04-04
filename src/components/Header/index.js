import React from 'react'
import Link from 'gatsby-link'
import logo from '../../images/imagi_logo.png'

const Header = () => (
    <div className="header">
        <div className="leftItems">
            <Link to="/">
                <img src={logo} alt="logo" className="logo" />
            </Link>
        </div>
        <div className="rightItems">
            <ul className="routingLinks">
                <li className="route">
                    <Link to="/contact" activeClassName="activeLink" className="link">contact</Link>
                </li>
                <li className="route">
                    <Link to="/apply" activeClassName="activeLink" className="link">apply</Link>
                </li>
                <li className="route">
                    <Link to="/partners" activeClassName="activeLink" className="link">clients & sponsors</Link>
                </li>
                <li className="route">
                    <Link to="/team" activeClassName="activeLink" className="link">team</Link>
                </li>
                <li className="route">
                    <Link to="/about" activeClassName="activeLink" className="link">about</Link>
                </li>
            </ul>
        </div>
        <div style={{clear: 'both'}}> </div>
    </div>
)

export default Header
