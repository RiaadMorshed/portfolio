import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  return (
    <div className="hero-container">
      <Image
        src="/MorshedPic.jpg"
        className="profile-img"
        width={300}
        height={300}
        alt="Md Morshedul Islam"
      />
      <div className="hero-text">
      <div>
    </div>
        <h1>
          <strong>Hey, I'm Morshed 👋</strong>
        </h1>
        <p>
          I'm working as a software developer at Asiatic Mindshare Bangladesh,
          with expertise in JavaScript, Python and a growing interest in C#. I'm
          also enthusiastic about exploring the realms of machine learning. I'm
          also a competitive programmer(c++).
        </p>
        <div className="social-icons">
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
  );
};

export default Banner;
