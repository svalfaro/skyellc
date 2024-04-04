import './App.css';
import Header from './components/Header/Header.jsx';
import Section from './components/Section/Section.jsx';

function App() {
    return (
        <>
            <Header />
            <main>
                <Section heading="intro" />
                <Section
                    heading="service"
                    className="service-container"
                />
                <Section
                    heading="mission"
                    className="mission-container"
                />
                <Section
                    heading="highlight"
                    className="highlight-container"
                />
                <Section
                    heading="payment"
                    className="payment-container"
                />
                <Section
                    heading="faq"
                    className="faq-container"
                />
            </main>
            <Section
                heading="footer"
                className="footer-container"
            />
        </>
    );
}

export default App;
