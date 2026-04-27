import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import WaveCanvas from "../../components/WaveCanvas";
import "./style.css";

const NotFound = () => {
    const { t } = useTranslation();

    return(
        <div className="not-found-page">
            <WaveCanvas />
            <div className="not-found-content">
                <h1 className="header">{t('notFound.title')}</h1>
                <h3>{t('notFound.subtitle')}</h3>
                <p>{t('notFound.description')}</p>
                <p>{t('notFound.description2')}</p>
                <Link to="/">{t('notFound.link')}</Link>
            </div>
        </div>
    )
}

export default NotFound;
