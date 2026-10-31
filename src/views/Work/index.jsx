'use client';

import React, { useState } from "react";
import WaveCanvas from "../../components/WaveCanvas";
import "./style.css";

const VISIBLE_ROWS = 5;

// Hidden for now. Set to true to bring back the "Worked with" section.
const SHOW_LOGOS = false;

// Logos render as CSS masks filled with --text, so every logo is one color
// and follows the active palette. Each file needs a transparent background
// and no padding. ratio is width / height; ink is the share of the box the
// mark fills, used to shrink heavy marks and enlarge thin ones.
const logos = [
    { name: "Mailchimp", src: "/pics/logos/mailchimp.svg", ratio: 4.03, ink: 0.3 },
    { name: "ANA", src: "/pics/logos/ana.svg", ratio: 3.89, ink: 0.5 },
    { name: "Range USA", src: "/pics/logos/range-usa-horizontal.svg", ratio: 8.12, ink: 0.39 },
    { name: "smartwater", src: "/pics/logos/smartwater-mono.png", ratio: 6.85, ink: 0.47 },
    { name: "Cascade", src: "/pics/logos/cascade-mono.png", ratio: 3.85, ink: 0.37 },
    { name: "Vertafore", src: "/pics/logos/vertafore.png", ratio: 6.02, ink: 0.35 },
    { name: "Narratize", src: "/pics/logos/narratize-white.svg", ratio: 6.41, ink: 0.28 },
    { name: "Tensure", src: "/pics/logos/tensure.svg", ratio: 5.57, ink: 0.67 },
    { name: "Canned Spinach", src: "/pics/logos/canned-spinach.svg", ratio: 6.4, ink: 0.32 },
];

// Equal area, not equal height, is what makes wide and compact logos look the
// same size. Target area is in px at desktop; maxWidth handles narrow screens.
const LOGO_AREA = 4800;
const LOGO_REFERENCE_INK = 0.4;

const logoWidth = ({ ratio, ink }) =>
    Math.round(Math.sqrt(LOGO_AREA * Math.sqrt(LOGO_REFERENCE_INK / ink) * ratio));

const techRows = [
    {
        image: "/pics/harmonize.webp",
        title: "Harmonize Trainer",
        type: "iOS app",
        caption: "A vocal harmony trainer. It plays you a note, you sing the harmony, and a live pitch meter gives you real-time feedback.",
        links: [
            { href: "https://apps.apple.com/us/app/harmonize-trainer/id6781284983", label: "App Store" },
            { href: "https://harmonizetrainer.com", label: "harmonizetrainer.com" },
        ],
    },
    {
        image: "/pics/bonnie-brae.webp",
        title: "Bonnie Brae Collies",
        type: "Website",
        caption: "Designed and built the website for a collie breeding program and boutique dog boarding service in Sedalia, Colorado.",
        links: [{ href: "https://bonniebraecollies.com/", label: "Visit site" }],
    },
    {
        image: "/pics/prayer-app-icon-zoomed.webp",
        title: "Prayer Groups",
        type: "iOS app",
        caption: "A simple app to help you pray with your friends in groups.",
        links: [{ href: "https://apps.apple.com/us/app/prayer-groups/id6759305922", label: "App Store" }],
    },
    {
        image: "/pics/narratize.webp",
        title: "Narratize",
        type: "Web application",
        caption: "Completed contract: supported Narratize.com, a platform for internal collaboration, documentation, and knowledge sharing.",
    },
    {
        image: "/pics/ana1.webp",
        title: "ANA Airlines",
        type: "Conference game",
        caption: "Developed a competitive multiplayer game with a separate audience screen, played in person at Anime Expo LA and NYC Comic Con.",
    },
    {
        image: "/pics/norse.webp",
        title: "Norse Flashcards",
        type: "iOS app",
        caption: "Learn the old Norse runic alphabet for free. Totally open-sourced.",
        links: [{ href: "https://apps.apple.com/us/app/norse-flashcards/id6743998805?l=es-MX&platform=iphone", label: "App Store" }],
    },
    // Hidden (not deleted): Restore Britain Vote Modeler electoral map
    // {
    //     image: "/pics/restore-britain.webp",
    //     title: "Restore Britain Vote Modeler",
    //     type: "Web app",
    //     caption: "An interactive electoral modeling tool built on 2024 UK General Election data, letting you simulate vote transfers and see what it would take to flip any constituency.",
    //     links: [{ href: "https://howmanyvotestorestorebrita.in/", label: "Visit site" }],
    // },
    {
        image: "/pics/swater.png",
        title: "Smartwater Match",
        type: "Conference game",
        caption: "Developed a game for the Smartwater conference booth.",
    },
    {
        image: "/pics/cas2.webm",
        title: "Cascade Match",
        type: "Conference game",
        caption: "Developed a game for the Cascade conference booth.",
    },
];

const copyRows = [
    {
        image: "/pics/chca.webp",
        title: "CHCA Website",
        type: "Web copy",
        caption: "Working with Canned Spinach, I wrote the web copy for the Cincinnati Hills Christian Academy website redesign.",
        links: [{ href: "https://www.chca-oh.org/", label: "Visit site" }],
    },
    {
        image: "/pics/irsf.webp",
        title: "IRSF Website",
        type: "Web copy",
        caption: "Working with Canned Spinach, I wrote the web copy for the IRSF website redesign.",
        links: [{ href: "https://www.rettsyndrome.org/", label: "Visit site" }],
    },
    {
        image: "/pics/tonys.webp",
        title: "Tony's Family Italian Restaurante",
        type: "Web copy",
        caption: "I wrote the web copy for a family-owned Italian spot in Montgomery, Ohio.",
        links: [{ href: "https://tonysfamilyitalianrestaurante.com/", label: "Visit site" }],
    },
];

const Row = ({ image, title, type, caption, links }) => (
    <li className="work-row">
        {/\.webm$/.test(image)
            ? <video className="work-thumb" src={image} autoPlay loop muted playsInline />
            : <img className="work-thumb" src={image} alt="" loading="lazy" width="200" height="150" />}
        <div className="work-body">
            <h4 className="work-title">{title}</h4>
            <p className="work-type">{type}</p>
            <p className="work-caption">{caption}</p>
            {links && (
                <p className="work-links">
                    {links.map(link => (
                        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                    ))}
                </p>
            )}
        </div>
    </li>
);

const RowList = ({ rows }) => {
    const [showAll, setShowAll] = useState(false);
    const visible = showAll ? rows : rows.slice(0, VISIBLE_ROWS);

    return (
        <>
            <ul className="work-rows">
                {visible.map(row => <Row key={row.title} {...row} />)}
            </ul>
            {rows.length > VISIBLE_ROWS && (
                <button type="button" className="work-toggle" aria-expanded={showAll} onClick={() => setShowAll(!showAll)}>
                    {showAll ? "Show fewer" : `Show all ${rows.length}`}
                </button>
            )}
        </>
    );
};

const Work = () => (
    <div className="now">
        <WaveCanvas />
        <div className="shadow-background-work">
            <div className="tech-container">
                <h1 className="header page-header" id="work">WORK</h1>
                <div className="readability">
                    {SHOW_LOGOS && (
                        <>
                            <h3 className="sub-header">WORKED WITH</h3>
                            <ul className="work-logos">
                                {logos.map(logo => (
                                    <li key={logo.name} className="work-logo-cell">
                                        <span
                                            className="work-logo"
                                            role="img"
                                            aria-label={logo.name}
                                            style={{
                                                width: logoWidth(logo),
                                                aspectRatio: logo.ratio,
                                                WebkitMaskImage: `url(${logo.src})`,
                                                maskImage: `url(${logo.src})`,
                                            }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    <h3 className="sub-header">TECH</h3>
                    <RowList rows={techRows} />
                    <h3 className="sub-header">COPYWRITING</h3>
                    <RowList rows={copyRows} />
                </div>
            </div>
        </div>
    </div>
);

export default Work;
