//Style
import "./Nav.css";

//Router
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  // const d = new Date();

  return (
    <div>
      <header className="site__header">
        <nav className="site__nav">
          <ul className="site__nav-list">
            <li>
              <HashLink smooth to="/#skills">
                <a className="site__nav-link" href="/">
                  About
                </a>
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#portfolio">
                <a className="site__nav-link" href="/">
                  Portfolio
                </a>
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact">
                <a className="site__nav-link" href="/">
                  Contact
                </a>
              </HashLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
