import { useLocation } from 'react-router-dom';
import SocialLinks from '../../components/SocialLinks';
import { useContact } from '../../context/ContactContext';
import './style.css';

const Footer = () => {
  const { pathname } = useLocation();
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
