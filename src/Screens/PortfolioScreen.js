//Styles
import "./PortfolioScreen.css";
import Proshop from "../assets/proshop.png";
import CovidTracker from "../assets/covidTracker.png";
import Blog from "../assets/blog.png";

const PortfolioScreen = () => {
  return (
    <div className="portfolioScreen" id="portfolio">
      <div className="aboutScreen__title">
        <div>
          <p className="popout2">
            <span className="span2">P</span>
            <span className="span2">O</span>
            <span className="span2">J</span>
            <span className="span2">E</span>
            <span className="span2">C</span>
            <span className="span2">T</span>
            <span className="span2">S</span>
          </p>
        </div>
      </div>
      <div className="main">
        <div className="view view-first">
          <img src={Proshop} alt="" />
          <div className="mask">
            <h2>ProShop E-Commerce</h2>
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
            </p>
            <a href="/" className="info">
              Read More
            </a>
          </div>
        </div>
        <div className="view view-first">
          <img src={Proshop} alt="" />
          <div className="mask">
            <h2>Hover Style #1</h2>
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
            </p>
            <a href="/" className="info">
              Read More
            </a>
          </div>
        </div>
        <div className="view view-first">
          <img src={CovidTracker} alt="" />
          <div className="mask">
            <h2>Covid Tracker</h2>
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
            </p>
            <a href="/" className="info">
              Read More
            </a>
          </div>
        </div>
        <div className="view view-first">
          <img src={Blog} alt="" />
          <div className="mask">
            <h2>Vanila JS Blog</h2>
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
            </p>
            <a href="/" className="info">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioScreen;
