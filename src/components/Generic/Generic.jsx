import './Generic.css';

export default function Generic() {
    return (
        <>
            <div className="intro-container">
                <div className="text-container">
                    <div className="text">
                        PRIORITIZE YOUR
                        <span className="text-span"> WELL-BEING</span>
                    </div>
                    <div className="text-description">
                        natural aesthetic <span>treatments & holistic </span>
                        wellness solutions.
                    </div>
                    <div className="button-container">
                        {/* https://skye-wellness-aesthetics.square.site/ */}
                        <a href="https://book.squareup.com/appointments/ywgktytcdyd80f/location/LKDSQ0FC4DCAH/services/">
                            <button className="schedule-btn">
                                Schedule an Appointment
                            </button>
                        </a>
                    </div>
                </div>

                <div className="img-header-container">
                    <img src="/assets/header.png" />
                </div>
            </div>
        </>
    );
}
