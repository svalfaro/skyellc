import './Generic.css';

export default function Generic() {
    return (
        <>
            <div className="intro-container">
                <div className="img-header-container">
                    <img
                        className="img-header"
                        src="/assets/header.png"
                    />
                    <div className="overlay-text-header">
                        <div className="text-container">
                            <div className="site-title">
                                SKYE WELLNESS & AESTHETICS
                            </div>
                            <div className="text">
                                PRIORITIZE YOUR
                                <span className="text-span"> WELL-BEING</span>
                            </div>
                            <div className="text-description">
                                natural aesthetic{' '}
                                <span>treatments & holistic </span>
                                wellness solutions.
                            </div>
                            <div className="button-container">
                                <a
                                    target="_blank"
                                    href="https://skye-wellness-aesthetics.square.site/"
                                >
                                    <button className="schedule-btn">
                                        SHOP NOW
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
