'use client';

import React, { useState, useEffect } from "react";
import WaveCanvas from "../../components/WaveCanvas";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel";
import './style.css'

const projects = [
    {
        id: "10",
        image: "/pics/logos/range-usa.webp",
        alt: "Range USA logo",
        // Client logo: must be sized to fit fully within the card width.
        isLogo: true,
        title: "Range USA",
        subtitle: "Contract",
        caption:
            "Helping launch a proprietary ecommerce platform for the largest indoor shooting range in the US.",
    },
    {
        id: "9",
        image: "/pics/harmonize.webp",
        alt: "Harmonize Trainer",
        title: "Harmonize Trainer",
        subtitle: "iOS App",
        caption:
            "Mobile app that trains your ear for harmony. It plays you a note, you sing the harmony above it, and a live pitch meter gives you real-time feedback on how close you are. Built in Flutter, now live on the App Store.",
        link: "https://apps.apple.com/us/app/harmonize-trainer/id6781284983",
        cta: "App Store",
        link2: "https://harmonizetrainer.com",
        cta2: "harmonizetrainer.com",
    },
    {
        id: "7",
        alt: "Fixing cold email",
        title: "Fixing cold email",
        caption:
            "Working on something to fix cold email and separate signal from noise. More soon.",
    },
    // Temporarily hidden
    // {
    //     id: "2",
    //     alt: "Goals App",
    //     title: "Goals App",
    //     caption:
    //         "Ongoing fun project: developing an app to help you complete goals with friends",
    // }
];

const Now = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const renderCard = (project) => (
        <Card
            key={project.id}
            id={project.id}
            image={project.image}
            alt={project.alt}
            title={project.title}
            subtitle={project.subtitle}
            caption={project.caption}
            link={project.link}
            cta={project.cta}
            link2={project.link2}
            cta2={project.cta2}
            isLogo={project.isLogo}
        />
    );

    return(
        <div className="home">
            <WaveCanvas />
            <div className="shadow-background-now">
                    <div className="container now">
                        <h1 className="header">NOW</h1>
                        <div className="mini-spacer"/>
                        <p><i>Updated September 14, 2026</i></p>
                        <div className="mini-spacer"/>
                        <div className="mini-spacer"/>
                    {isMobile ? (
                        <Carousel containerWidth={window.innerWidth}>
                            {projects.map(renderCard)}
                        </Carousel>
                    ) : (
                        <div className="main-text">
                            {projects.map(renderCard)}
                            <br/>
                        </div>
                    )}
                    <div className="mini-spacer"/>
                    </div>
                </div>
        </div>
    )
}

export default Now;
