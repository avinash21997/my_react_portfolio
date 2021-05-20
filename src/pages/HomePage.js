import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage(){
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Avinash.</span>
                </h1>
                <p className="h-sub-text">
                I am a Fullstack Developer and a Competitive Programmer, who loves to transform ideas into reality using code. I'm currently in my pre-final year, pursuing B.Tech in Electronics and Communication Engineering at IIT(ISM) Dhanbad. I like to learn about new technologies, getting indulged into some technology related discusssions or simply play Squash in my free time.
                </p>
                <div className="icons">
                    <Link to="https://www.facebook.com/avinash.k.733" className="icon-holder" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="https://github.com/avinash21997" className="icon-holder" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/avinash-b904a8194/" className="icon-holder" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </Link>
                </div>
            </header>

        </div>
    )
}

export default HomePage;