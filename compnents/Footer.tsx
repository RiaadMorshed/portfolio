import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
      <div>
        <hr/>
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} Morshed
        </p>
        <div className="social_icons">
          <a
            href="https://github.com/riaadmorshed"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a
            href="https://www.linkedin.com/in/morshedul-islam-b299581b7/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </div>
      </div>
      </div>
    )
  }
  
  export default Footer;