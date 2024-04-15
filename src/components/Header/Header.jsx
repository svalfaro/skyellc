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
                    <input
                        type="checkbox"
                        id="burger-toggle"
                    />
                    <label
                        htmlFor="burger-toggle"
                        className="burger-icon"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <nav className="menu">
                        <ul>
                            <li>
                                <a href={`#${NAV_LINKS[0].id}`}>Service</a>
                            </li>
                            <li>
                                <a href={`#${NAV_LINKS[1].id}`}>Mission</a>
                            </li>
                            <li>
                                <a href={`#${NAV_LINKS[2].id}`}>Appointment</a>
                            </li>
                            <li>
                                <a href={`#${NAV_LINKS[4].id}`}>FAQ</a>
                            </li>
                        </ul>
                    </nav>
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
