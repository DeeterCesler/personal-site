'use client';

import React, { useState, useEffect } from "react";
import WaveCanvas from "../../components/WaveCanvas";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel";
import './style.css'

const projects = [
    {
        id: "11",
        image: "/pics/artweek.webp",
        alt: "Miami Art Week Guide app, Today screen",
        title: "Miami Art Week Guide",
        subtitle: "iOS App (in testing)",
        caption:
            "Independent guide to the art fairs and events of Miami Art Week, with a venue map, distances, and event reminders. Currently in testing.",
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
                        <h1 className="header page-header">NOW</h1>
                        <div className="mini-spacer"/>
                        <p><i>Updated October 31, 2026</i></p>
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
