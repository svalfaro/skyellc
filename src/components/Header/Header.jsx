import { NAV_LINKS } from '/src/components/Header/headerLinks.js';
import './Header.css';

export default function Header() {
    return (
        <>
            <header>
                <h1 className="title">
                    <span className="title-top">SKYE</span>
                    <span className="title-bottom">Wellness & Aesthetics</span>
                </h1>
                <nav>
                    <div className="nav-links">
                        <ul>
                            {NAV_LINKS.map((navLinks, index) => (
                                <li key={index}>
                                    <a href={`#${navLinks.id}`}>
                                        {navLinks.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
