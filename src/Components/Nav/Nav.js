//Style
import "./Nav.css";

//Router
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router";

const Nav = () => {
  // const d = new Date();

  const currentUrl = useLocation();
  console.log(currentUrl.hash);

  return (
    <div>
      <header className="site__header">
        <nav className="site__nav">
          <ul className="site__nav-list">
            <li>
              <HashLink smooth to="/#about">
                <a
                  className="site__nav-link"
                  href="/"
                  // style={{
                  //   color: currentUrl.hash === "#about" ? "#FFF" : "#3a3a3a",
                  // }}
                >
                  About
                </a>
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#portfolio">
                <a
                  className="site__nav-link"
                  href="/"
                  // style={{
                  //   color:
                  //     currentUrl.hash === "#portfolio" ? "#FFF" : "#3a3a3a",
                  // }}
                >
                  Portfolio
                </a>
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact">
                <a
                  className="site__nav-link"
                  href="/"
                  // style={{
                  //   color: currentUrl.hash === "#contact" ? "#FFF" : "#3a3a3a",
                  // }}
                >
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
