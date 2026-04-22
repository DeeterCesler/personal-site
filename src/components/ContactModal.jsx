import { useContact } from '../context/ContactContext';
import { insta, x_logo, linkedin, github } from '../assets/icons';
import './ContactModal.css';

const socials = [
  { icon: insta,   label: 'Instagram', handle: '@deetercesler',  url: 'https://www.instagram.com/deetercesler/' },
  { icon: x_logo,  label: 'X',         handle: '@DeeterCesler',  url: 'https://twitter.com/DeeterCesler' },
  { icon: linkedin,label: 'LinkedIn',  handle: 'deetercesler',   url: 'https://www.linkedin.com/in/deetercesler/' },
  { icon: github,  label: 'GitHub',    handle: 'deetercesler',   url: 'https://github.com/deetercesler' },
];

const ContactModal = () => {
  const { open, closing, closeContact } = useContact();
  if (!open) return null;

  return (
    <div
      className={`cm-backdrop${closing ? ' closing' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) closeContact(); }}
    >
      <div className={`cm-box${closing ? ' closing' : ''}`}>
        <button className="cm-close" onClick={closeContact} aria-label="Close">✕</button>

        <p className="cm-eyebrow">get in touch</p>

        <a className="cm-email" href="mailto:me+site@deetercesler.com">
          me@deetercesler.com
        </a>

        <div className="cm-divider" />

        <div className="cm-socials">
          {socials.map(({ icon, label, handle, url }) => (
            <a key={url} className="cm-row" href={url} target="_blank" rel="noopener noreferrer">
              <img src={icon} alt={label} className="cm-icon" />
              <span className="cm-handle">{handle}</span>
              <span className="cm-platform">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
