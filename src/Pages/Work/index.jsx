import React, { useEffect, useState } from "react";
import PsychedelicBackground from "../../components/PsychedelicBackground";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel";
import "./style.css";

const Tech = () => {
    const [isMobile, setIsMobile] = useState(false);

    const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        checkMobile();
        
        // Reset height on initial load if mobile
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                const container = document.querySelector('.shadow-background-work');
                if (container) {
                    container.style.height = 'auto';
                    container.style.minHeight = 'auto';
                    container.style.overflow = 'hidden';
                } else {
                    console.log('Container not found');
                }
            }, 100);
        }

        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const renderCards = (cards) => {
        if (isMobile) {
            return (
                <Carousel containerWidth={window.innerWidth}>
                    {cards.map(card => (
                        <Card
                            key={card.id}
                            image={card.image}
                            alt={card.alt}
                            title={card.title}
                            caption={card.caption}
                            link={card.link}
                        />
                    ))}
                </Carousel>
            );
        } else {
            return (
                <div className="main-text">
                    {cards.map(card => (
                        <Card
                            key={card.id}
                            image={card.image}
                            alt={card.alt}
                            title={card.title}
                            caption={card.caption}
                            link={card.link}
                        />
                    ))}
                </div>
            );
        }
    };

    const techCards = [
        {
            id: "1",
            image: "/pics/norse.jpg",
            alt: "Norse Flashcards",
            title: "Norse Flashcards",
            caption: "Learn the old Norse runic alphabet for free. It's available on the App Store and is totally open-sourced.",
            link: "https://apps.apple.com/us/app/norse-flashcards/id6743998805?l=es-MX&platform=iphone"
        },
        {
            id: "2",
            image: "/pics/code.jpg",
            alt: "Circle Scroller",
            title: "Circle Scroller",
            caption: "A free, open-source React module. It's essentially imitating TechCrunch's popup when you read an article and it shows you how far you've read. Use it now with npm i circle-scroller in your React project.",
            link: "https://www.npmjs.com/package/circle-scroll/"
        },
        {
            id: "3",
            image: "/pics/code.jpg",
            alt: "Quick Counter",
            title: "Quick Counter",
            caption: "Wrap any number in this component. When the page loads, it'll count up to that number. You can set the number of seconds, or let it default to 2. It's a neat little visual. Use it now with npm i quick-count in your React project.",
            link: "https://www.npmjs.com/package/quick-count/"
        },
        {
            id: "4",
            image: "/pics/code.jpg",
            alt: "Kaprekar",
            title: "Kaprekar",
            caption: "Kaprekar's constant is a fun (but useless) piece of math. I made a free, open-source Rust crate calculating number of iterations for a given input.",
            link: "https://crates.io/crates/kaprekar"
        },
        {
            id: "5",
            image: "/pics/code.jpg",
            alt: "Dungeon Crawler",
            title: "Dungeon Crawler",
            caption: "keyboard required (AKA desktop only). browser-based game I made back in boot camp while learning jQuery",
            link: "http://dungeon-crawler.freeoda.com/"
        }
    ];

    const copywritingCards = [
        {
            id: "7",
            image: "/pics/chca.png",
            alt: "CHCA Copywriting",
            title: "CHCA Copywriting",
            caption: "June 30: finished a copywriting contract for Cincinnati Hills Christian Academy",
            link: "https://www.chca-oh.org/"
        },
        {
            id: "6",
            image: "/pics/irsf.png",
            alt: "IRSF Website",
            title: "IRSF Website",
            caption: "Subcontracting for Canned Spinach, I wrote the web copy for the IRSF websites redesign (live as of March 2025).",
            link: "https://www.rettsyndrome.org/"
        },
    ];

    return(
        <div className="now">
            <PsychedelicBackground>
                <div className="shadow-background-work">
                    <div className="tech-container">
                        <h1 className="header" id="work">WORK</h1>
                        <div className="readability">
                            <h3 className="sub-header">TECH</h3>
                            {renderCards(techCards)}
                            <h3 className="sub-header">COPYWRITING</h3>
                            {renderCards(copywritingCards)}
                        </div>
                    </div>
                </div>
            </PsychedelicBackground>
        </div>
    )
}

export default Tech;