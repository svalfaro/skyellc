import './Service.css';
import '/src/styles/breakpoints.css';
import React, { useState } from 'react';

export default function Service() {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    // Function to toggle modal visibility
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const toggleModal2 = () => {
        setShowModal2(!showModal2);
    };

    const toggleModal3 = () => {
        setShowModal3(!showModal3);
    };

    return (
        <>
            <div className="service-div">
                <div
                    className="service-box"
                    onClick={toggleModal}
                >
                    <img
                        src="/assets/serviceOne.png"
                        alt="an extractor on a woman's face with 'rejuvenation' overlay"
                    />
                    <div className="overlay-text">
                        <p>REJUVENATION</p>
                    </div>
                </div>
                <div
                    className="service-box"
                    onClick={toggleModal2}
                >
                    <img
                        src="/assets/second-im-img.png"
                        alt="a syringe with vitamin vial with 'im vitamin' overlay"
                    />
                    <div className="overlay-text">
                        <p>IM VITAMINS</p>
                    </div>
                </div>
                <div
                    className="service-box"
                    onClick={toggleModal3}
                >
                    <img
                        src="/assets/serviceThird.png"
                        alt="a scale with a pair of feet mid-step with 'weight management' overlay"
                    />
                    <div className="overlay-text">
                        <p>WEIGHT MANAGEMENT</p>
                    </div>
                </div>
            </div>

            {/* Modal component */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        {/* Add modal content here */}

                        <span
                            className="close"
                            onClick={toggleModal}
                        >
                            ×
                        </span>
                        <img
                            className="modal-logo-img"
                            src="/assets/skye-circular-logo.png"
                            alt="skye wellness & aesthetics official logo"
                        />
                        <div nameClass="modal-content-container">
                            <h4>FACIAL BENEFITS</h4>
                            <p>
                                SKYE facials and treatments are great choices
                                for healthy, glowing skin without surgery.
                                Target specific concerns like rosacea and acne
                                while promoting hydration, skin regeneration,
                                and overall skin health. Achieve skin
                                tightening, anti-aging effects, and a radiant
                                complexion. Our treatments are inspired by
                                Korean beauty standards, aiming for flawless,
                                translucent skin, minimized pores, and enhanced
                                clarity. Whether you're seeking visible results
                                or a holistic approach to skin rejuvenation, our
                                facials deliver tailored solutions for your
                                skincare needs.
                            </p>
                            <a
                                href="https://book.squareup.com/appointments/ywgktytcdyd80f/location/LKDSQ0FC4DCAH/services"
                                target="_blank"
                            >
                                <button className="button-28">
                                    LEARN MORE
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {showModal2 && (
                <div className="modal">
                    <div className="modal-content">
                        <span
                            className="close"
                            onClick={toggleModal2}
                        >
                            ×
                        </span>
                        <img
                            className="modal-logo-img"
                            src="/assets/skye-circular-logo.png"
                            alt="skye wellness & aesthetics official logo"
                        />
                        <div nameClass="modal-content-container">
                            <h4>
                                WHAT IS INTRAMUSCULAR (IM) INJECTION TREATMENT?
                            </h4>
                            <p>
                                Experience the power of our IM Injection
                                treatment for direct, targeted health benefits.
                                Administered by Christine Villamayor, NP for
                                maximum impact, it delivers essential nutrients
                                directly into your muscles for immediate
                                absorption. Whether you need an energy boost,
                                immune support, appetite control, or glowing
                                skin, our treatment is tailored to your needs.
                                Say goodbye to fatigue and hello to vitality,
                                and unlock a healthier, radiant you with our IM
                                Injection treatment.
                            </p>
                            <a
                                href="https://book.squareup.com/appointments/ywgktytcdyd80f/location/LKDSQ0FC4DCAH/services/JE45D2Y6W5N5ZODUIUVJ2JKD"
                                target="_blank"
                            >
                                <button className="button-28">
                                    LEARN MORE
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {showModal3 && (
                <div className="modal">
                    <div className="modal-content">
                        <span
                            className="close"
                            onClick={toggleModal3}
                        >
                            ×
                        </span>
                        <img
                            className="modal-logo-img"
                            src="/assets/skye-circular-logo.png"
                            alt="skye wellness & aesthetics official logo"
                        />
                        <div nameClass="modal-content-container">
                            <h4>WEIGHT MANAGEMENT</h4>
                            <p>
                                SKYE's Weight Management Therapy Program boosts
                                your body's human growth hormone (hGH) levels to
                                naturally curb cravings, burn fat, and build
                                muscle safely and effectively. Our kit includes
                                Naltrexone, Sermorelin, Lipo-Trim SL, and a
                                controlled low-calorie diet to maximize weight
                                loss. Christine Villamayor, NP will personally
                                guide you one-on-one, setting clear goals to
                                help you achieve your target health results.
                            </p>
                            <a
                                href="https://book.squareup.com/appointments/ywgktytcdyd80f/location/LKDSQ0FC4DCAH/services"
                                target="_blank"
                            >
                                <button className="button-28">
                                    LEARN MORE
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
