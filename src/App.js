import './App.css';

//React router
import { Route, Switch, useLocation } from 'react-router-dom';

//Framer Motion
import { AnimatePresence } from 'framer-motion';

//Components

// import AboutScreen from './Screens/AboutScreen';
// import PortfolioScreen from './Screens/PortfolioScreen';
// import ContactScreen from './Screens/ContactScreen';
import LandingScreen from './Screens/LandingScreen';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        {/* <Route path="/about" component={AboutScreen} />
        <Route path="/portfolio" component={PortfolioScreen} />
        <Route path="/contact" component={ContactScreen} /> */}
        <Route path="/" component={LandingScreen} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
