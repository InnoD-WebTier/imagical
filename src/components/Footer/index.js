import React from 'react';
import linkedin from '../../images/linkedin.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';

const Footer = () => (
    <div className="footer">
        <a href="https://linkedin.com/groups/imagiCal-Connection-AAF-Berkeley-Chapter-1851915/about" className="footer__link">
            <img className="footer__icon" src={linkedin} alt="social media icon" />
        </a>
        <a href="https://www.facebook.com/berkeleyaaf" className="footer__link">
            <img className="footer__icon" src={facebook} alt="social media icon" />
        </a>
        <a href="https://twitter.com/imagitweet" className="footer__link">
            <img className="footer__icon" src={twitter} alt="social media icon" />
        </a>
    </div>
)

export default Footer
