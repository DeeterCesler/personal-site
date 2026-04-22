import React from "react";
import WaveCanvas from "../../components/WaveCanvas";
import Card from "../../components/Card/Card";
import './style.css'

const projects = [
    {
        id: "3",
        image: "/pics/prayer-app-icon-zoomed.png",
        alt: "prayer",
        title: "iOS App: Prayer Groups",
        caption:
            "iOS App recently released (and still updating). It's a simple app to help you pray with your friends in groups.",
        link: "https://apps.apple.com/us/app/prayer-groups/id6759305922",
        cta: "View on App Store",
    },
    {
        id: "2",
        alt: "Goals App",
        title: "Goals App",
        caption:
            "Ongoing fun project: developing an app to help you complete goals with friends",
    },
    {
        id: "4",
        alt: "Travel app",
        title: "Travel app",
        caption:
            "Working on an AI-powered travel app to help you plan your trips.",
    }
];

const Now = () => {
    return(
        <div className="home">
            <WaveCanvas />
            <div className="shadow-background-now">
                    <div className="container now">
                        <h1 className="header">NOW</h1>
                        <div className="mini-spacer"/>
                        <p><i>Updated Apr 22, 2026</i></p>
                        <div className="mini-spacer"/>
                        <div className="mini-spacer"/>
                    <div className="main-text">
                        {projects.map((project) => (
                            <Card
                                key={project.id}
                                id={project.id}
                                image={project.image}
                                alt={project.alt}
                                title={project.title}
                                caption={project.caption}
                                link={project.link}
                                cta={project.cta}
                            />
                        ))}
                        <br/>
                    </div>
                    <div className="mini-spacer"/>
                    </div>
                </div>
        </div>
    )
}

export default Now;
