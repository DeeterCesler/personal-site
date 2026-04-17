import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const InternalLinks = () => {
    const { t } = useTranslation();

    const handleLinkClick = () => {
        if (navigator.vibrate) {
            try {
                navigator.vibrate(200);
            } catch (error) {
                // silently ignore vibrate failures
            }
        }
    };

    return (
        <div className="links">
            <p className="link-p"><Link className="link" style= {{ textDecoration: "none" }} to="/now" onClick={handleLinkClick}>{t('internalLinks.now')}</Link></p>
            <p className="link-p"><Link className="link" style= {{ textDecoration: "none" }} to="/work" onClick={handleLinkClick}>{t('internalLinks.work')}</Link></p>
            <p className="link-p"><Link className="link" style= {{ textDecoration: "none" }} to="/blog" onClick={handleLinkClick}>{t('internalLinks.blog')}</Link></p>
        </div>
    )
}

export default InternalLinks;
