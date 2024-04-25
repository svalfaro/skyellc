import './Faq.css';

export default function Faq() {
    return (
        <div className="faq-box">
            <details>
                <summary>Do I need to make an appointment?</summary>
                <p>
                    Yes. No walk-ins. Setting up an appointment allows us to
                    tailor your visit specifically to your needs.{' '}
                </p>
            </details>
            <details>
                <summary>What should I expect during my first visit?</summary>
                <p>
                    Your first visit with us is as unique as you are. Depending
                    on the service you've booked, you might experience a
                    personalized consultation, a relaxing treatment, or a
                    rejuvenating session. To ensure we're fully prepared for
                    your visit and to avoid any hiccups, don't forget to reach
                    out to us beforehand.{' '}
                </p>
            </details>
            {/* <details>
                <summary>
                    Do I need to follow any aftercare instructions after a
                    service?
                </summary>
                <p>
                    Just like each treatment is tailored to your needs, so is
                    the aftercare! While some services won't require special
                    attention afterward, others, like our HydraSKYE Facial, may
                    benefit from extra care. Click{' '}
                    <a
                        href="./src/assets/HydraSKYE Facial Aftercare.pdf"
                        aria-label="Download PDF file for facial aftercare"
                        target="_blank"
                    >
                        HERE
                    </a>{' '}
                    to download HydraSKYE Facial aftercare instructions.{' '}
                </p>
            </details> */}
            <details>
                <summary>What are your operating hours?</summary>
                <p>
                    Currently, SKYE is limited to weekends -- operating from{' '}
                    <time datetime="08:00">8:00</time>am to{' '}
                    <time datetime="13:00">1:00</time>pm.
                </p>
            </details>
            <details>
                <summary>Does SKYE offer discount or promotions?</summary>
                <p>
                    Absolutely! Snag the best deals, exclusive promotions, and
                    earn rewards by booking through our app. It's the ultimate
                    win-win!{' '}
                </p>
            </details>
            <details>
                <summary>Do you accept health insurance?</summary>
                <p>
                    No. SKYE does not accept insurance at this time. However, we
                    do accept major credit cards and cash for payment.
                </p>
            </details>
            <details>
                <summary>What if I can't pay fully?</summary>
                <p>
                    No problem! SKYE offers Affirm to purchase now and pay
                    later.
                </p>
            </details>
        </div>
    );
}
