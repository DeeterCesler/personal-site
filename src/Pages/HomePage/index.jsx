import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import WaveCanvas from '../../components/WaveCanvas';
import ProjectGrid from '../../components/ProjectGrid';
import SectionLinks from '../../components/SectionLinks';
import SocialLinks from '../../components/SocialLinks';
import './style.css';

const projects = [
  {
    id: '1',
    image: '/pics/ana1.png',
    alt: 'All Nippon Airways',
    title: 'Multiplayer Conference Game: All Nippon Airways',
    caption:
      'Solo implementation of a live, competitive trivia game for the ANA conference booth — two players on separate tablets while an audience watches on a third TV screen.',
  },
  {
    id: '2',
    image: '/pics/norse.jpg',
    alt: 'Norse Flashcards',
    title: 'iOS App: Norse Flashcards',
    caption: 'iOS app for learning ancient Norse runes and their phonetics.',
    link: 'https://apps.apple.com/us/app/norse-flashcards/id6743998805',
  },
  {
    id: '3',
    image: '/pics/chca.jpg',
    alt: 'CHCA',
    title: 'Web copy: CHCA Website',
    caption: 'Copywriting and website redesign for Cincinnati Hills Christian Academy.',
    link: 'https://www.chca-oh.org',
  },
  {
    id: '4',
    image: '/pics/swater.png',
    alt: 'Smartwater',
    title: 'Conference Game: Smartwater Match',
    caption:
      'Matching game for the Smartwater conference booth, introducing new flavors through gameplay.',
  },
];

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <WaveCanvas />

      <div className="home-backdrop" />
      <div className="home-content">
        {/* Hero */}
        <section className="hero-section">
          <h1 className="hero-name">{t('homepage.title')}</h1>
          <p className="hero-sub"><Trans i18nKey="homepage.subtitle" components={{ bold: <strong /> }} /></p>
        </section>

        {/* Work */}
        <section className="home-section">
          <p className="section-eyebrow">Selected Work</p>
          <ProjectGrid projects={projects} />
        </section>

        {/* Nav links */}
        <section className="home-section">
          <SectionLinks />
        </section>

        {/* Social */}
        <section className="home-section home-footer">
          <SocialLinks />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
