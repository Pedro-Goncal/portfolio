//Styles
import "./AboutScreen.css";

//Assets
import JS from "../assets/javascript.png";
import HTML from "../assets/html.png";
import Css from "../assets/css.png";
import Redux from "../assets/redux.png";
import Express from "../assets/express.png";
import Node from "../assets/nodeLogo.png";
import Sass from "../assets/sass.png";
import ReactLogo from "../assets/react.png";
import Bootstrap from "../assets/bootstrap-4.png";
import Profile from "../assets/profile.png";

const AboutScreen = () => {
  return (
    <div className="aboutScreen" id="skills">
      <div className="aboutScreen__title">
        <p className="popout">
          <span className="span1">A</span>
          <span className="span1">B</span>
          <span className="span1">O</span>
          <span className="span1">U</span>
          <span className="span1">T</span>
        </p>
      </div>
      <div className="aboutScreen__about">
        <img src={Profile} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="aboutScreen_skills">
          <div>
            <img src={ReactLogo} alt="" />
            <img src={Redux} alt="" />
            <img src={JS} alt="" />
            <img src={HTML} alt="" />
            <img src={Css} alt="" />
            <img src={Sass} alt="" />
            <img src={Bootstrap} alt="" />
            <img src={Node} alt="" />
            <img src={Express} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
