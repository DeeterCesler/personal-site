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

        let timer;
        if (window.innerWidth <= 768) {
            timer = setTimeout(() => {
                const container = document.querySelector('.shadow-background-work');
                if (container) {
                    container.style.height = 'auto';
                    container.style.minHeight = 'auto';
                    container.style.overflow = 'hidden';
                }
            }, 100);
        }

        window.addEventListener('resize', checkMobile);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', checkMobile);
        };
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
                            cta={card.cta}
                            link2={card.link2}
                            cta2={card.cta2}
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
                            cta={card.cta}
                            link2={card.link2}
                            cta2={card.cta2}
                        />
                    ))}
                </div>
            );
        }
    };

    const techCards = [
        {
            id: "8",
            image: "/pics/harmonize.png",
            alt: "Harmonize Trainer",
            title: "iOS App: Harmonize Trainer",
            caption: "A vocal harmony trainer. It plays you a note, you sing the harmony, and a live pitch meter gives you real-time feedback. Available on the App Store.",
            link: "https://apps.apple.com/us/app/harmonize-trainer/id6781284983",
            cta: "App Store",
            link2: "https://harmonizetrainer.com",
            cta2: "harmonizetrainer.com",
        },
        {
            id: "9",
            image: "/pics/bonnie-brae.jpg",
            alt: "Bonnie Brae Collies",
            title: "Website: Bonnie Brae Collies",
            caption: "Designed and built the website for Bonnie Brae Collies, a collie breeding program and boutique dog boarding service in Sedalia, Colorado.",
            link: "https://bonniebraecollies.com/",
        },
        {
            id: "3",
            image: "/pics/prayer-app-icon-zoomed.png",
            alt: "prayer",
            title: "iOS App: Prayer Groups",
            caption: "A simple app to help you pray with your friends in groups. Available on the App Store.",
            link: "https://apps.apple.com/us/app/prayer-groups/id6759305922",
        },
        {
            id: "6",
            image: "/pics/narratize.png",
            alt: "Narratize",
            title: "Web Application: Narratize",
            caption: "Completed contract: supported Narratize.com, a platform for internal collaboration, documentation, and knowledge sharing."
        },
        {
            id: "69",
            image: "/pics/ana1.webp",
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
        // Hidden (not deleted): Restore Britain Vote Modeler electoral map
        // {
        //     id: "70",
        //     image: "/pics/restore-britain.png",
        //     alt: "How Many Votes to Restore Britain",
        //     title: "Web App: Restore Britain Vote Modeler",
        //     caption: "An interactive electoral modeling tool built on 2024 UK General Election data, letting you simulate vote transfers and see what it would take to flip any constituency.",
        //     link: "https://howmanyvotestorestorebrita.in/",
        // },
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
            image: "/pics/cas2.webm",
            alt: "Cascade",
            title: "Conference Game: Cascade Match",
            caption:
                "Developed a game for the Cascade conference booth.",
        },
    ];

    const copywritingCards = [
        {
            id: "7",
            image: "/pics/chca.jpg",
            alt: "CHCA Copywriting",
            title: "Web copy: CHCA Website",
            caption: "Working with Canned Spinach, I wrote the web copy for Cincinnati Hills Christian Academy website redesign.",
            link: "https://www.chca-oh.org/"
        },
        {
            id: "6",
            image: "/pics/irsf.webp",
            alt: "IRSF Website",
            title: "Web copy: IRSF Website",
            caption: "Working with Canned Spinach, I wrote the web copy for the IRSF website redesign (live as of March 2025).",
            link: "https://www.rettsyndrome.org/"
        },
        {
            id: "8",
            image: "/pics/tonys.png",
            alt: "Tony's Family Italian Restaurante",
            title: "Web copy: Tony's Family Italian Restaurante",
            caption: "I wrote the web copy for Tony's Family Italian Restaurante, a family-owned Italian spot in Montgomery, Ohio.",
            link: "https://tonysfamilyitalianrestaurante.com/"
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