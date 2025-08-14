import React from "react";
import PsychedelicBackground from "../../components/PsychedelicBackground";
import ThreeJSModel from "../../components/ThreeJSModel";
import SocialLinks from "../../components/SocialLinks";
import InternalLinks from "../../components/InternalLinks";
import { useTranslation } from "react-i18next";
import CurtainReveal from "../../components/CurtainReveal";
import Card from "../../components/Card/Card";

const HomePage = () => {
    const { t } = useTranslation();
    const isMobile = window.innerWidth <= 640;
    const isTablet = window.innerWidth <= 1024 && window.innerWidth > 640;

    return (
        <div className="home">
            <PsychedelicBackground
                showModel={true}
                modelUrl="/models/Flower.glb" 
                modelPosition={[0, 0, 0]} 
                modelScale={1.5}
            >
            <div className="container">
                <section className="top">
                    <div className="top-left">
                        <h1 className="big-name">{t('homepage.title')}</h1>
                        <div className="titles">
                            <h3 className="flip-1">{t('homepage.subtitle')}</h3>
                        </div>
                    </div>
                    <div className="top-right">
                        <ThreeJSModel 
                            modelUrl="/models/Flower.glb" 
                            position={[0, 0, 0]} 
                            scale={3}
                            initialRotation={{ x: 0, y: -95, z: 0 }}
                        />
                    </div>
                </section>
                <section className="middle" style={{ marginTop: isMobile ? '50px' : '0px' }}>
                    <CurtainReveal
                        oneTime={true} 
                        startHeight={200} 
                        innerHeight={400} 
                        startTrigger={0.25} 
                        speed={2}
                        style={{ marginBottom: isTablet ? '500px' : '0px' }}
                    >
                        <Card 
                            id="1"
                            image="/pics/ana1.png" 
                            alt="ANA Airlines"
                            title="ANA Airlines"
                            caption="Solo implementation of a game for the ANA Airlines' conference booth. Two players on separate tablets go back-and-forth answering trivia questions about Japan while an audience watches."
                        />
                        <Card 
                            id="2"
                            image="/pics/norse.jpg" 
                            alt="Learn Old Norse"
                            title="Norse Language App"
                            caption="Created an iOS app for learning ancient Norse runes and their phonetics."
                            link="https://apps.apple.com/us/app/norse-flashcards/id6743998805?l=es-MX&platform=iphone"
                        />
                        <Card
                            id="3"
                            image="/pics/chca.png" 
                            alt="CHCA"
                            title="CHCA"
                            caption="Copywriting contract CHCA website redesign."
                            link="https://www.chca-oh.org"
                        />
                        <Card
                            id="4"
                            image="/pics/swater.png" 
                            alt="Smartwater game"
                            title="Smartwater"
                            caption="Created a Smartwater-themed matching game for visitors to play at their conference booth, introducing new flavors through gameplay."
                        />
                    </CurtainReveal>
                </section>
                <section className="bottom">
                    <div>
                        <InternalLinks />
                        <SocialLinks />
                    </div>
                    <div className="mini-spacer"/>
                </section>
            </div>
        </PsychedelicBackground>
        </div>
    )
}

export default HomePage;
