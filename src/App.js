import "./App.css";

//React router
import { BrowserRouter } from "react-router-dom";

//Components
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import AboutScreen from "./Screens/AboutScreen";
import PortfolioScreen from "./Screens/PortfolioScreen";
import ContactScreen from "./Screens/ContactScreen";
import LandingScreen from "./Screens/LandingScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <LandingScreen />
        <AboutScreen />
        <PortfolioScreen />
        <ContactScreen />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
