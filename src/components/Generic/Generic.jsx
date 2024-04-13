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
                    <div className="header-logo">
                        <img src="/assets/skye-logo-bcg.png" />
                    </div>
                    <div className="overlay-text-header">
                        <div className="text-container">
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
                                <a href="https://book.squareup.com/appointments/ywgktytcdyd80f/location/LKDSQ0FC4DCAH/services/">
                                    <button className="schedule-btn">
                                        BOOK NOW
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
