import "./LandingScreen.css";

import Photo from "../assets/photo.jpeg";

const LandingScreen = () => {
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
        {/* <img src={Photo} alt="Developer profile" /> */}
      </div>
    </div>
  );
};

export default LandingScreen;
