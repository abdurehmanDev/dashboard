import React from 'react';

import './hero.css';

const Hero = ({ handleLogout }) => {
    return (

        <section className="hero">
            <nav className="hero__nav">
                <h1>Performance Overview</h1>
                <button className="hero__button" onClick={handleLogout}>Log out</button>
            </nav>
        </section>
    )
}

export default Hero