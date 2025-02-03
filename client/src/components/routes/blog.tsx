import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Blog() {
  const [isComponentVisible, setIsComponentVisible] = React.useState(false);
  const ref = React.useRef(null);

  const handleClickOutside = (event: { target: any; }) => {
      if (ref.current && !ref.current.contains(event.target)) {
          setIsComponentVisible(false);
      }
  };

  React.useEffect(() => {
      document.addEventListener('click', handleClickOutside, true);
      return () => {
          document.removeEventListener('click', handleClickOutside, true);
      };
  }, []);

  return (
    <>
    <div className="biggy">
    <div className="blog-background-image" style={{backgroundImage: `url("./image/Ryuutama/Weather/CleanSword.png")`}}></div>
    <div className="blog-container" >
      <h1>About Me</h1>
      <p>
        Who So Findeth This Sword please return to Jesse Chung at earliest convenience.  Preferably with a job offer.
      </p>
      <p>
        I have been a fullstack software engineer since September 2021 and I love board games and the like and making tools for them.  Also, I enjoy contributing to open source projects to both improve my skills as a coder but also to help contribute to things used by many people.   
      </p>
      <p>
        Feel free to connect with me on <a href="https://linkedin.com/in/jessechung" target="_blank" rel="noopener noreferrer">LinkedIn</a> or check out my <a href="https://github.com/jessechung" target="_blank" rel="noopener noreferrer">GitHub</a> profile to see some of my work!
      </p>
      <p>
        You can also reach me at <a href="mailto:jessemchung1@gmail.com">jessemchung1@gmail.com</a> or through the contact form on my website.
      </p>

      <div className="social-media-buttons">
      <a href="https://www.facebook.com/jesse.m.chung/" target="_blank" rel="noopener noreferrer" className="facebook-btn">
        <FontAwesomeIcon icon={faFacebookF} size="2x" />
      </a>
      <a href="https://linkedin.com/in/jessechung" target="_blank" rel="noopener noreferrer" className="linkedin-btn">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <a href="https://github.com/jessechung" target="_blank" rel="noopener noreferrer" className="github-btn">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
      
    </div>
    </div>
    </>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
};

