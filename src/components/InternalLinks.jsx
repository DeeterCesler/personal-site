import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const InternalLinks = () => {
    const { t } = useTranslation();

    return (
        <div className="links">
            <p className="link-p"><Link className="link" style= {{ textDecoration: "none" }} to="/now">{t('internalLinks.now')}</Link></p>
            <p className="link-p"><Link className="link" style= {{ textDecoration: "none" }} to="/work">{t('internalLinks.work')}</Link></p>
            <p className="link-p"><Link className="link" style= {{ textDecoration: "none" }} to="/blog">{t('internalLinks.blog')}</Link></p>
        </div>
    )
}

export default InternalLinks;
