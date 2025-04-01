import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.css'

const Nav = () => {
    const [show, setShow] = useState(false)
    const [notHome, setNotHome] = useState(false)
    const location = useLocation()
    const { t } = useTranslation();

    const toggleModal = (e) => {
        if(e.target === e.currentTarget) setShow(!show)
    }

    useEffect(() => {
        setNotHome(location.pathname !== '/' && 
                  location.pathname !== '/index' && 
                  location.pathname !== '/index.html');
    }, [location.pathname]);

    const getBackUrl = () => {
        if (location.pathname.startsWith('/blog/')) {
            return '/blog';
        }
        return '/';
    }

    const Contact = () => {
        return(
            <div onClick={(e)=>toggleModal(e)} className="contact modal-shadow">
                <div className="modal-outline">
                    <button onClick={toggleModal}/>
                    <h2 className="contact-header">{t('nav.contactModal.title')}</h2>
                    <br/>
                    <div className="insta">
                        {t('nav.contactModal.email')} <br/>
                        <strong><a className="" href="mailto:deeter.cesler@gmail.com">deeter.cesler@gmail.com</a></strong>
                    </div>
                    <div className="insta">
                        {t('nav.contactModal.instagram')} <br/>
                        <strong><a href="https://www.instagram.com/deetercesler/" target="_blank" rel="noopener noreferrer">
                            @deetercesler
                        </a></strong>
                    </div>
                    <div className="insta">
                        {t('nav.contactModal.twitter')} <br/>
                        <strong><a href="https://www.twitter.com/deetercesler/" target="_blank" rel="noopener noreferrer">
                            @deetercesler
                        </a></strong>
                    </div>
                    <div className="insta">
                        {t('nav.contactModal.linkedin')} <br/>
                        <strong><a href="https://www.linkedin.com/in/deetercesler/" target="_blank" rel="noopener noreferrer">
                            deetercesler
                        </a></strong>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="top-nav">
            {notHome && <div className="contact">
                <a href={getBackUrl()} className="" style={{textDecoration: "none"}}>
                    <button className="neumorphism-button">{t('nav.back')}</button>
                </a>
            </div>}
            <div className="glow" />
            {show ? <Contact />
            : <button data-bs-toggle="modal" onClick={toggleModal} className="neumorphism-button">{t('nav.contact')}</button>
            }
        </div>
    )
}

export default Nav;