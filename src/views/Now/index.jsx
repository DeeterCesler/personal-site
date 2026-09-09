'use client';

import React, { useState, useEffect } from "react";
import WaveCanvas from "../../components/WaveCanvas";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel";
import './style.css'

const projects = [
    {
        id: "9",
        image: "/pics/harmonize.png",
        alt: "Harmonize Trainer",
        title: "Harmonize Trainer",
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
    {
        id: "2",
        alt: "Goals App",
        title: "Goals App",
        caption:
            "Ongoing fun project: developing an app to help you complete goals with friends",
    }
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
            caption={project.caption}
            link={project.link}
            cta={project.cta}
            link2={project.link2}
            cta2={project.cta2}
        />
    );

    return(
        <div className="home">
            <WaveCanvas />
            <div className="shadow-background-now">
                    <div className="container now">
                        <h1 className="header">NOW</h1>
                        <div className="mini-spacer"/>
                        <p><i>Updated September 9, 2026</i></p>
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
