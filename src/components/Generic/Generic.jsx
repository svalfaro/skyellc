import './Generic.css';

export default function Generic() {
    return (
        <>
            <div className="intro-container">
                <div className="img-header-container">
                    <img
                        className="img-header"
                        src="/assets/header.png"
                        alt="an image of lit candle, oils, and towels"
                    />
                    <div className="overlay-text-header">
                        <div className="text-container">
                            <h1 className="site-title">
                                SKYE WELLNESS & AESTHETICS
                            </h1>
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
                                <a href="#payment">
                                    <button className="schedule-btn">
                                        DOWNLOAD APP
                                    </button>
                                </a>
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
