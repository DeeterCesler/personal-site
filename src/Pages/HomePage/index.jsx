import React from "react";
import PsychedelicBackground from "../../components/PsychedelicBackground";
import ThreeJSModel from "../../components/ThreeJSModel";
import SocialLinks from "../../components/SocialLinks";
import InternalLinks from "../../components/InternalLinks";
import { useTranslation } from "react-i18next";

const HomePage = () => {
    const { t } = useTranslation();

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
                <section className="middle">
                    {/* nothing here for now */}
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
