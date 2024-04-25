import { NAV_LINKS } from '/src/components/Header/headerLinks.js';
import './Header.css';
import '/src/styles/breakpoints.css';

export default function Header() {
    return (
        <>
            <header>
                <div className="img-logo-container">
                    <img
                        className="img-header-logo"
                        src="/assets/skye-circular-logo-light.png"
                        alt="skye wellness & aesthetics logo, a line drawing of a face"
                    />
                </div>
                {/* <div className="header-title-container">
                    <h1 className="title">
                        <span className="title-top">SKYE</span>
                        <span className="title-bottom">
                            Wellness & Aesthetics
                        </span>
                    </h1>
                </div> */}
                <nav className="nav-links">
                    <h2>Main Navigation</h2>
                    <ul>
                        {NAV_LINKS.map((navLinks, index) => (
                            <li key={index}>
                                <a href={`#${navLinks.id}`}>{navLinks.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
}
