import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <div className="subHeader__content">
                    <Link className="header__title" to="/">
                        <h1>Nestor Ramirez</h1>
                    </Link>
                </div>
                <div className="subHeader__content">
                    <Link className="header__title" to="/resume">
                        <h3>Resume</h3>
                    </Link>
                    <Link className="header__title" to="/portfolio">
                        <h3>Portfolio</h3>
                    </Link>
                    <Link className="header__title" to="/contact">
                        <h3>Contact</h3>
                    </Link>
                </div>
            </div>
        </div>
    </header>
);

export default Header;