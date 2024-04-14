import { NAV_LINKS } from '/src/components/Header/headerLinks.js';
import { useState } from 'react';
import './Header.css';
import '/src/styles/breakpoints.css';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <header>
                <div className="header-title-container">
                    <h1 className="title">
                        <span className="title-top">SKYE</span>
                        <span className="title-bottom">
                            Wellness & Aesthetics
                        </span>
                    </h1>
                </div>
                <nav className="nav-links">
                    <ul>
                        {NAV_LINKS.map((navLinks, index) => (
                            <li key={index}>
                                <a href={`#${navLinks.id}`}>{navLinks.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="burger-menu"
                    onClick={toggleMenu}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </header>
            {/* Conditional rendering of the navigation menu */}
            {showMenu && (
                <nav className="nav-links">
                    <ul>
                        {NAV_LINKS.map((navLinks, index) => (
                            <li key={index}>
                                <a href={`#${navLinks.id}`}>{navLinks.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </>
    );
}
