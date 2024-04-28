import './Payment.css';
import { CORE_PAYMENT } from './paymentData';

export default function Payment() {
    return (
        <>
            <div className="app-container">
                <div className="img-app-container">
                    <img
                        className="mock-first-image"
                        src="/assets/app-mok.png"
                        alt="A screenshot of skye wellness & aesthetics app account, bottom"
                    />
                    <img
                        className="mock-second-image"
                        src="/assets/app-mock.png"
                        alt="A screenshot of skye wellness & aesthetics app account, top."
                    />
                </div>
                <div className="text-app-container">
                    <p>
                        Ready to elevate your experience with us? Download our
                        app now and unlock a world of convenience and perks!
                        <p>
                            Effortlessly book our services, all at your
                            fingertips. But that's not all – dive into a
                            treasure trove of rewards, exclusive promotions, and
                            our full range of services anytime, anywhere.
                        </p>
                    </p>
                    <p>
                        <b>
                            Score and enjoy $25 off any service with a quick app
                            download.
                        </b>
                    </p>
                    <div className="app-badges">
                        <a
                            href="https://play.google.com/store/search?q=repeatmd&c=apps&hl=en_US&gl=US"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="app-badge-google"
                                src="/assets/google-play-badge.png"
                                alt="android google play store badge"
                            />
                        </a>
                        <a
                            href="https://apps.apple.com/us/app/myrepeat-patient-rewards/id6448703360"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="app-badge-apple"
                                src="/assets/apple-app-badge.svg"
                                alt="apple app store badge"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
