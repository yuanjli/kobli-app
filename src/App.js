import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Class from './Class';
import Attendance from './Attendance';
import Randomizer from './Randomizer';
import Team from './Team';


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Router>
          <div>
        <ul id="dropdown1" className="dropdown-content">
          <li><Link to="/randomizer">Randomizer</Link></li>
          <li className="divider"></li>
          <li><Link to="/attendance">Attendance</Link></li>
        </ul>


        <nav className="#000000 black">
          <div className="nav-wrapper #000000 black">
            <Link to="/" className="brand-logo left"><img src='https://ga-cms-production-herokuapp-com.global.ssl.fastly.net/assets/ga-lockup-e7ca2ce7bf63573ee4ffb09b031e2ce0.png' className='gaLogo' /></Link>
            <ul className="right hide-on-med-and-down">
              <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">My Class<i className="material-icons right">arrow_drop_down</i></a></li>
              <li><Link to="/">Hello Brandi</Link></li>
            </ul>
          </div>
        </nav>



            <Route exact path='/' component={Home} />
            <Route path="/class" component={Class} />
            <Route path="/attendance" component={Attendance} />
            <Route path="/randomizer" component={Randomizer} />
      </div>
        </Router>


      </div>
    );
  }
}

export default App;
