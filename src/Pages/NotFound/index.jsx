import React from "react";
import { useTranslation } from "react-i18next";
import PsychedelicBackground from "../../components/PsychedelicBackground";
import "./style.css";

const NotFound = () => {
    const { t } = useTranslation();

    return(
        <PsychedelicBackground>
            <div className="now">
                <div className="container" style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "150px"}}>
                    <div className="spacer"/>
                    <div className="main">
                    <h1 className="header">{t('notFound.title')}</h1>
                    <h3 className="bold">{t('notFound.subtitle')}</h3>
                    <br/>
                    <p className="">{t('notFound.description')}</p>
                    <p className="small">{t('notFound.description2')}</p>
                    <p className="lost bold"><a href="/" className="">{t('notFound.link')}</a></p>
                    </div>
                    <div className="spacer"/>
                </div>
            </div>
        </PsychedelicBackground>
    )
}

export default NotFound;
