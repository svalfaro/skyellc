import './Section.css';
import Generic from '../Generic/Generic';
import Highlight from '../Highlight/Highlight';
import Payment from '../Payment/Payment';
import Service from '../Service/Service';
import Faq from '../FAQ/Faq';
import Footer from '../Footer/Footer';
import Mission from '../Mission/Mission';

const sectionDetails = {
    intro: {
        id: 'intro',
        title: null,
        description: null,
        // 'Innovative aesthetic treatments & holistic wellness solutions.',
        component: Generic,
    },
    highlight: {
        id: 'highlight',
        title: "WE'RE CONSISTENT",
        description:
            'SKYE Wellness & Aesthetics meets your expectations every visit.',
        component: Highlight,
    },
    mission: {
        id: 'mission',
        title: 'OUR MISSION',
        description:
            'Discover SKYE Wellness & Aesthetics: with a focus on individualized care and attention to detail, our ultimate goal is to elevate your sense of well-being and boost confidence.',
        component: Mission,
    },
    payment: {
        id: 'payment',
        title: 'RELAX ON DEMAND',
        description: 'Just a tap away with our app!',
        component: Payment,
    },
    service: {
        id: 'service',
        title: 'YOUR WELLNESS, YOUR CHOICE',
        description: 'Which service will kickstart your transformation?',
        component: Service,
    },
    faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        description:
            "Got questions? We've got you covered! Reach out to us for any additional queries you may have.",
        component: Faq,
    },
    footer: {
        id: 'footer',
        title: null,
        description: null,
        component: Footer,
    },
};

export default function Section({ heading, ...props }) {
    const section = sectionDetails[heading] || {};

    return (
        <section
            id={section.id}
            {...props}
        >
            <h2 className="section-titles">{section.title}</h2>
            <p className="section-descriptions">{section.description}</p>
            <p>{section.component && <section.component />}</p>
        </section>
    );
}
