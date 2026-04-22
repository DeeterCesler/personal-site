import React, { useEffect, useState } from "react";
import WaveCanvas from "../../components/WaveCanvas";
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
            id: "6",
            image: "/pics/narratize.png",
            alt: "Narratize",
            title: "Web Application: Narratize",
            caption: "Completed contract: supported Narratize.com, a platform for internal collaboration, documentation, and knowledge sharing."
        },
        {
            id: "69",
            image: "/pics/ana1.png",
            alt: "Anime Expo Game",
            title: "Conference Game: Anime Expo Game",
            caption:
                "Developed a game for ANA Airline's booth, played at Anime Expo LA and NYC Comic Con.",
        },
        {
            id: "1",
            image: "/pics/norse.jpg",
            alt: "Norse Flashcards",
            title: "iOS App: Norse Flashcards",
            caption: "Learn the old Norse runic alphabet for free. It's available on the App Store and is totally open-sourced.",
            link: "https://apps.apple.com/us/app/norse-flashcards/id6743998805?l=es-MX&platform=iphone"
        },
        {
            id: "67",
            image: "/pics/swater.png",
            alt: "smartwater",
            title: "Conference Game: Smartwater Match",
            caption:
                "Developed a game for the Smartwater conference booth.",
        },
        {
            id: "68",
            image: "/pics/cas2.gif",
            alt: "Cascade",
            title: "Conference Game: Cascade Match",
            caption:
                "Developed a game for the Cascade conference booth.",
        },
    ];

    const copywritingCards = [
        {
            id: "7",
            image: "/pics/chca.png",
            alt: "CHCA Copywriting",
            title: "Web copy: CHCA Website",
            caption: "Working with Canned Spinach, I wrote the web copy for Cincinnati Hills Christian Academy website redesign.",
            link: "https://www.chca-oh.org/"
        },
        {
            id: "6",
            image: "/pics/irsf.png",
            alt: "IRSF Website",
            title: "Web copy: IRSF Website",
            caption: "Working with Canned Spinach, I wrote the web copy for the IRSF website redesign (live as of March 2025).",
            link: "https://www.rettsyndrome.org/"
        },
    ];

    return(
        <div className="now">
            <WaveCanvas />
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
        </div>
    )
}

export default Tech;