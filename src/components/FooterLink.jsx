import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterLink({ href, icon }) {
    return (
        <a href={href} target="_blank" className="text-black no-underline">
            <FontAwesomeIcon icon={icon} />
        </a>
    )
}

export default FooterLink