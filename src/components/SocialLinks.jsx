import { insta, x_logo, medium, linkedin, github, email } from "../assets/icons";

const icons = [
    {
        url: "https://twitter.com/DeeterCesler",
        alt: "twitter/X",
        icon: x_logo
    },
    {
        url: "https://www.instagram.com/deetercesler/",
        alt: "insta",
        icon: insta
    },
    {
        url: "https://www.linkedin.com/in/deetercesler/",
        alt: "linkedin",
        icon: linkedin
    },
    {
        url: "https://deetercesler.medium.com/",
        alt: "medium",
        icon: medium
    },
    {
        url: "https://github.com/deetercesler",
        alt: "github",
        icon: github
    },
    {
        url: "mailto:me+site@deetercesler.com",
        alt: "email",
        icon: email
    }
]

const SocialLinks = () => {
    return (
        <div className="icons">
            {icons.map((icon) => (
                <a key={icon.url} target="_blank" rel="noopener noreferrer" href={icon.url}>
                    <img alt={icon.alt} src={icon.icon} />
                </a>
            ))}
        </div>
    )
}

export default SocialLinks;