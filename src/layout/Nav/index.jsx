import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import './style.css'

const Nav = () => {
    const [show, setShow] = useState(false)
    const [closing, setClosing] = useState(false)
    const [notHome, setNotHome] = useState(false)
    const location = useLocation()
    const { t } = useTranslation();
    const { isDark, toggleTheme } = useTheme();

    const toggleModal = (e) => {
        if(e.target === e.currentTarget) {
            if (show) {
                setClosing(true)
                setTimeout(() => {
                    setShow(false)
                    setClosing(false)
                }, 200)
            } else {
                setShow(true)
            }
        }
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
            <div onClick={(e)=>toggleModal(e)} className={`contact modal-shadow ${closing ? 'closing' : ''}`}>
                <div className={`modal-outline ${closing ? 'closing' : ''}`}>
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
            <div className="nav-buttons">
                <button 
                    onClick={toggleTheme} 
                    className="neumorphism-button theme-toggle"
                    style={{marginRight: '0rem'}}
                    aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    <span className={`theme-icon ${!isDark ? 'active' : ''}`}>☀️</span>
                    <span className="theme-separator">/</span>
                    <span className={`theme-icon ${isDark ? 'active' : ''}`}>🌙</span>
                </button>
                <button data-bs-toggle="modal" onClick={toggleModal} className="neumorphism-button">{t('nav.contact')}</button>
                {show && <Contact />}
            </div>
        </div>
    )
}

export default Nav;