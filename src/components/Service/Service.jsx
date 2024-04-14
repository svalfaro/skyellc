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
                        alt="facials"
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
                        alt="im vitamins"
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
                        alt="weight management service"
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
                        <h3>
                            FACIAL <b>BENEFITS</b>
                        </h3>
                        <p>
                            SKYE facials and treatments are great choices for
                            healthy, glowing skin without surgery. Target
                            specific concerns like rosacea and acne while
                            promoting hydration, skin regeneration, and overall
                            skin health. Achieve skin tightening, anti-aging
                            effects, and a radiant complexion. Our treatments
                            are inspired by Korean beauty standards, aiming for
                            flawless, translucent skin, minimized pores, and
                            enhanced clarity. Whether you're seeking visible
                            results or a holistic approach to skin rejuvenation,
                            our facials deliver tailored solutions for your
                            skincare needs.
                        </p>
                        <button className="button-28">Book Now</button>
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
                        <h3>WHAT IS INTRAMUSCULAR (IM) INJECTION TREATMENT?</h3>
                        <p>
                            Experience the power of our IM Injection treatment
                            for direct, targeted health benefits. Administered
                            by Christine Villamayor, NP for maximum impact, it
                            delivers essential nutrients directly into your
                            muscles for immediate absorption. Whether you need
                            an energy boost, immune support, appetite control,
                            or glowing skin, our treatment is tailored to your
                            needs. Say goodbye to fatigue and hello to vitality,
                            and unlock a healthier, radiant you with our IM
                            Injection treatment.
                        </p>

                        <h4>WHAT IS B12 (Methylcobalamin)?</h4>
                        <p>Increase Energy Level.</p>

                        <h4>WHAT IS GLUTATHIONE?</h4>
                        <p>
                            Glutathione plays a crucial role in repairing cells
                            damaged by pollution, stress, and other harmful
                            influences. Brighter skin. Body detoxification.
                            Powerful antioxidant.
                        </p>

                        <h4>WHAT IS THE TRI-IMMUNE BOOST?</h4>
                        <p>
                            Zinc + Vitamin C + Glutathione. Ultimate immune
                            system enhancer to help maintain a healthy immune
                            response.
                        </p>

                        <h4>WHAT IS THE LIPOSTAT PLUS?</h4>
                        <p>
                            Suppress Appetite. Enhance Energy Production.
                            Improve overall Metabolism.
                        </p>

                        <h4>
                            What's the difference between Skinny Shots and
                            Sulfur-Free Skinny Shots?
                        </h4>
                        <p>
                            Glutathione plays a crucial role in repairing cells
                            damaged by pollution, stress, and other harmful
                            influences.
                        </p>

                        <h4>WHAT IS THE LIPO MINI MIX?</h4>
                        <p>
                            Improve energy and fat metabolism. Reduce recovery
                            time and promote muscle-building.
                        </p>

                        <button className="button-28">Book Now</button>
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
                        <h3>WEIGHT MANAGEMENT</h3>
                        <p>
                            SKYE's Weight Management Therapy Program boosts your
                            body's human growth hormone (hGH) levels to
                            naturally curb cravings, burn fat, and build muscle
                            safely and effectively. Our kit includes Naltrexone,
                            Sermorelin, Lipo-Trim SL, and a controlled
                            low-calorie diet to maximize weight loss. Christine
                            Villamayor, NP will personally guide you one-on-one,
                            setting clear goals to help you achieve your target
                            health results.
                        </p>
                        <button className="button-28">Book Now</button>
                    </div>
                </div>
            )}
        </>
    );
}
