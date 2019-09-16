import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home.js'
import SignUp from '../src/components/SignUp/SignUp.js'
import LogIn from '../src/components/LogIn/LogIn.js'
import NavBar from '../src/components/NavBar/NavBar.js'
import Footer from '../src/components/Footer/Footer.js'

const App = () => (
  <div className='App'>
    <Router>
    <NavBar />
    <Route exact path='/home' component={Home} />
    <Route exact path='/signup' component={SignUp} />
    <Route exact path='/login' component={LogIn} />
    <Footer />
    </Router>
  </div>
);

export default App;
