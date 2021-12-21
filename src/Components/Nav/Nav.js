//Style
import './Nav.css';

//Router
import { Link } from 'react-router-dom';

const Nav = () => {
  // const d = new Date();

  return (
    <div className="navContainer">
      <div>
        <header className="site__header">
          <nav className="site__nav">
            <ul className="site__nav-list">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="bottomNav__container">
        <h1>THIS IS THE BORROM NAV</h1>
      </div>
    </div>
  );
};

export default Nav;
