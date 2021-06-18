
import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';
import Membership from './Pages/Membership';
import Registation from './Pages/Registation';
import Login from './Pages/Login';
import ContactUs from './Pages/ContactUs';
import Footer from './Components/Footer';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
        <Route exact path ="/Home"><Home /></Route>
        <Route exact path="/AboutUs"><AboutUs /></Route>
        <Route exact path="/Services"><Services /></Route>
        <Route exact path="/Gallery"><Gallery /></Route>
        <Route exact path="/Membership"><Membership /></Route>
        <Route exact path="/Registation"><Registation /></Route>
        <Route exact path="/Login"><Login /></Route>
        <Route excat path="/Contact"><ContactUs /></Route>
        
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
