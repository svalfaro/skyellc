import { CORE_FOOTER } from '/src/components/Footer/footerData.jsx';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-desc">
                <div className="slogan">feel and look good</div>
                <div className="footer-core">
                    {CORE_FOOTER.map((coreFooter, index) => (
                        <dl key={index}>
                            <dt>{coreFooter.heading}</dt>
                            <dd>{coreFooter.description}</dd>
                            <dd>{coreFooter.extra}</dd>
                        </dl>
                    ))}
                </div>
                <div className="footer-img">
                    <a
                        href="https://www.google.com/search?q=skye+wellness+%26+aesthetics+llc&sca_esv=8da9e590c00091b0&sxsrf=ACQVn09Lhxvji4U527gJSUcCa_r-EPW7ug%3A1711082134476&ei=lgr9ZeXWHIDkiLMP4YCc2A8&ved=0ahUKEwjl-bnWhYeFAxUAMmIAHWEAB_sQ4dUDCBA&uact=5&oq=skye+wellness+%26+aesthetics+llc&gs_lp=Egxnd3Mtd2l6LXNlcnAiHnNreWUgd2VsbG5lc3MgJiBhZXN0aGV0aWNzIGxsYzIFECEYoAEyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRifBUjODVDsAljaDHABeACQAQCYAVigAckCqgEBNLgBA8gBAPgBAZgCBaAC3wLCAgsQABiABBiiBBiwA8ICCxAAGIkFGKIEGLADmAMAiAYBkAYCkgcBNaAH0Bo&sclient=gws-wiz-serp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            alt="Google logo badge"
                        >
                            <path
                                fill="#514c43"
                                d="M12 1.61C6.262 1.61 1.61 6.262 1.61 12S6.262 22.39 12 22.39S22.39 17.738 22.39 12S17.738 1.61 12 1.61m3.873 14.694c-.942.868-2.226 1.378-3.76 1.378A5.678 5.678 0 0 1 6.435 12a5.682 5.682 0 0 1 5.68-5.684c1.53 0 2.815.563 3.8 1.48l-1.627 1.63c-.59-.564-1.338-.85-2.171-.85c-1.48 0-2.732 1-3.18 2.343c-.113.341-.178.705-.178 1.081s.065.74.178 1.08c.448 1.344 1.7 2.343 3.178 2.343c.765 0 1.414-.202 1.922-.543a2.612 2.612 0 0 0 1.134-1.716h-3.056v-2.198h5.35c.067.373.102.76.102 1.162c0 1.732-.62 3.186-1.693 4.176"
                            />
                        </svg>
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=100085799988064"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            alt="Facebook logo badge"
                        >
                            <path
                                fill="#514c43"
                                d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999c0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891c1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999"
                            />
                        </svg>
                    </a>

                    <a
                        href="https://www.instagram.com/skye.wellness.aesthetics/"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="Instagram logo badge"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#514c43"
                                d="M13.61 12.243a1.6 1.6 0 1 1-1.56-1.63a1.62 1.62 0 0 1 1.56 1.63"
                            />
                            <path
                                fill="#514c43"
                                d="M14.763 7.233H9.338a2.024 2.024 0 0 0-2.024 2.024v5.547a2.024 2.024 0 0 0 2.024 2.024h5.425a2.024 2.024 0 0 0 2.024-2.024V9.267a2.026 2.026 0 0 0-2.024-2.034m-2.713 7.723a2.703 2.703 0 1 1 2.642-2.703a2.672 2.672 0 0 1-2.642 2.703m2.936-5.405a.496.496 0 0 1-.496-.506a.506.506 0 1 1 1.012 0a.496.496 0 0 1-.557.506z"
                            />
                            <path
                                fill="#514c43"
                                d="M12.05 2a10 10 0 1 0-.1 20a10 10 0 0 0 .1-20m6.073 12.702a3.39 3.39 0 0 1-3.41 3.411H9.389a3.392 3.392 0 0 1-3.411-3.41V9.378a3.39 3.39 0 0 1 3.41-3.411h5.325a3.39 3.39 0 0 1 3.41 3.41z"
                            />
                        </svg>
                    </a>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#514c43"
                            d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m5.939 7.713v.646a.37.37 0 0 1-.38.37a5.364 5.364 0 0 1-2.903-1.108v4.728a3.938 3.938 0 0 1-1.18 2.81a4.011 4.011 0 0 1-2.87 1.17a4.103 4.103 0 0 1-2.862-1.17a3.98 3.98 0 0 1-1.026-3.805c.159-.642.48-1.232.933-1.713a3.58 3.58 0 0 1 2.79-1.313h.82v1.703a.348.348 0 0 1-.39.348a1.918 1.918 0 0 0-1.23 3.631c.27.155.572.246.882.267c.24.01.48-.02.708-.092a1.928 1.928 0 0 0 1.313-1.816V5.754a.359.359 0 0 1 .359-.36h1.415a.359.359 0 0 1 .359.34a3.303 3.303 0 0 0 1.282 2.245a3.25 3.25 0 0 0 1.641.636a.37.37 0 0 1 .338.35z"
                        />
                    </svg>
                </div>

                <div className="credit-label-container">
                    <div className="copyright-label">
                        © 2024 SKYE Wellness & Aesthetics. All rights reserved.
                    </div>
                    <div className="creator-label">
                        Designed by{' '}
                        <a href="mailto:sheilaValfaro@gmail.com">A08</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
