'use client';

import { usePathname } from 'next/navigation';
import SocialLinks from '../../components/SocialLinks';
import { useContact } from '@/context/ContactContext';
import './style.css';

const Footer = () => {
  const pathname = usePathname();
  const { openContact } = useContact();

  if (pathname === '/') return null;

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <SocialLinks />
        <button className="footer-contact-btn" onClick={openContact}>
          Contact
        </button>
      </div>
    </footer>
  );
};

export default Footer;
