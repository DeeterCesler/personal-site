'use client';

import React, { useEffect, useRef } from "react";
import WaveCanvas from "../components/WaveCanvas";

const Dungeon = () => {
    const frameRef = useRef(null);

    // Grow the iframe to fit the game so the page scrolls as one window
    // instead of nesting a second scroll area inside the frame.
    useEffect(() => {
        const frame = frameRef.current;
        if (!frame) return;
        let observer;

        const fit = () => {
            const doc = frame.contentDocument;
            if (!doc?.body) return;
            frame.style.height = `${doc.documentElement.scrollHeight}px`;
        };

        const attach = () => {
            observer?.disconnect();
            const doc = frame.contentDocument;
            if (!doc?.body) return;
            observer = new ResizeObserver(fit);
            observer.observe(doc.body);
            fit();
        };

        frame.addEventListener('load', attach);
        if (frame.contentDocument?.readyState === 'complete') attach();

        return () => {
            frame.removeEventListener('load', attach);
            observer?.disconnect();
        };
    }, []);

    return(
        <div className="">
            <WaveCanvas />
            <div className="dungeon-stage">
                <div className="container">
                    <h1 className="header dungeon-title">DUNGEON CRAWLER</h1>
                </div>
                <iframe ref={frameRef} className="iframe" src="/dungeon/index.html" title="Dungeon Crawler" scrolling="no"></iframe>
            </div>
        </div>
    )
}

export default Dungeon;
