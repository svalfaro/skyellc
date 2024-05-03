import { CORE_HIGHLIGHT } from './highlightData';
import './Highlight.css';

export default function Highlight() {
    return (
        <>
            <div className="individual-highlights">
                {CORE_HIGHLIGHT.map((coreHighlight, index) => (
                    <section key={index}>
                        <img
                            className="highlight-img"
                            loading="lazy"
                            src={coreHighlight.img}
                            alt="line drawing of vials, a bulb, and chart"
                        />
                        <h2 className="highlight-header">
                            {coreHighlight.title}
                        </h2>
                        <p className="highlight-description">
                            {coreHighlight.description}
                        </p>
                    </section>
                ))}
            </div>
        </>
    );
}
