import "./LandingScreen.css";

import TypeWriter from "react-typewriter";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";

const LandingScreen = () => {
  const iconStyles = {
    fontSize: "56px",
    margin: "15px",
    color: "black",
  };

  return (
    <div className="landingScreen">
      <div className="landingScreen__left">
        <div className="landingScreen__perspective-text">
          <div className="landingScreen__perspective-line">
            <p></p>
            <p>Pedro</p>
          </div>
          <div className="landingScreen__perspective-line">
            <p>Pedro</p>
            <p>Gonçalves</p>
          </div>
          <div className="landingScreen__perspective-line">
            <p>Gonçalves</p>
            <p>Web</p>
          </div>
          <div className="landingScreen__perspective-line">
            <p>Web</p>
            <p>Developer</p>
          </div>
          <div className="landingScreen__perspective-line">
            <p>Developer</p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="landingScreen__right">
        <div>
          <a
            href="https://github.com/Pedro-Goncal"
            target="_blank"
            rel="noreferrer"
            className="footer__icons"
          >
            <GitHubIcon className="footer__icons" style={iconStyles} />
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-goncalves88/"
            target="_blank"
            rel="noreferrer"
            className="footer__icons"
          >
            <LinkedInIcon className="footer__icons" style={iconStyles} />
          </a>

          <a
            href="https://resume.creddle.io/resume/12oxw41wfw6"
            target="_blank"
            rel="noreferrer"
            className="footer__icons"
          >
            <DescriptionIcon style={iconStyles} />
          </a>
        </div>
      </div>
      <div className="landingScreen__mobile">
        <div className="landingScreen__title">
          <h1 className="responsive-headline">
            <TypeWriter typing={0.5}>I'm Pedro Gonçalves</TypeWriter>
          </h1>
          <h3>React Web Developer</h3>
        </div>
        <div className="landingScreen__icons">
          <a
            href="https://github.com/Pedro-Goncal"
            target="_blank"
            rel="noreferrer"
            className="footer__icons"
          >
            <GitHubIcon className="footer__icons" style={iconStyles} />
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-goncalves88/"
            target="_blank"
            rel="noreferrer"
            className="footer__icons"
          >
            <LinkedInIcon className="footer__icons" style={iconStyles} />
          </a>

          <a
            href="https://resume.creddle.io/resume/12oxw41wfw6"
            target="_blank"
            rel="noreferrer"
            className="footer__icons"
          >
            <DescriptionIcon style={iconStyles} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
