import Topbar from './components/Topbar/Topbar';
import Etusivu from './components/Etusivu/Etusivu';
import Topbar2 from './components/Topbar2/Topbar2';
import News from './components/News/News';
import Competitions2 from './components/Competitions/Competitions2';
import Results from './components/Results/Results';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import  Athletes  from './components/Athletes/Athletes';

import Worldcup2 from './components/Competitions/Worldcup2';
import Ibucup2 from './components/Competitions/Ibucup2';
import Juniorcup2 from './components/Competitions/Juniorcup2';
import Nationals2 from './components/Competitions/Nationals2';
import Summerbiathlon2 from './components/Competitions/Summerbiathlon2';

import Worldcup from './components/Results/Worldcup';
import Ibucup from './components/Results/Ibucup';
import  Juniorcup  from './components/Results/Juniorcup';
import  Nationals  from './components/Results/Nationals';
import  Summerbiathlon  from './components/Results/Summerbiathlon';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.scss"
import TermsAndCond from './components/FooterPages/TermsAndCond';
import PrivacyPolicy from './components/FooterPages/PrivacyPolicy';
import Contact from './components/FooterPages/Contact';

function App() {
  return (
    <div className="app">

      <Router>
      <Topbar />
      <Topbar2/>

      <div className="content">
      
      <Switch>
      <Route path="/" exact component={() => <Etusivu />} />
      <Route path="/News" exact component={() => <News />} />
      <Route path="/Competitions" exact component={() => <Competitions2 />} />
      <Route path="/Results" exact component={() => <Results/>} />
      <Route path="/Athletes" exact component={() => <Athletes/>} />
      <Route path="/About" exact component={() => <About/>} />
  

      <Route path="/Competitions/Worldcup" exact component={() => <Worldcup2 />} />
      <Route path="/Competitions/Ibucup" exact component={() => <Ibucup2 />} />
      <Route path="/Competitions/Juniorcup" exact component={() => <Juniorcup2 />} />
      <Route path="/Competitions/Nationals" exact component={() => <Nationals2/>} />
      <Route path="/Competitions/Summerbiathlon" exact component={() => <Summerbiathlon2/>} />

  
      <Route path="/Results/Worldcup" exact component={() => <Worldcup />} />
      <Route path="/Results/Ibucup" exact component={() => <Ibucup />} />
      <Route path="/Results/Juniorcup" exact component={() => <Juniorcup />} />
      <Route path="/Results/Nationals" exact component={() => <Nationals/>} />
      <Route path="/Results/Summerbiathlon" exact component={() => <Summerbiathlon/>} />

      <Route path="/privacy-policy" exact component={() => <PrivacyPolicy />} />
      <Route path="/terms-and-conditions" exact component={() => <TermsAndCond/>} />
      <Route path="/contact" exact component={() => <Contact/>} />
      </Switch>
      </div>



      <Footer/>

      </Router>
    </div>
  );
}

export default App;
