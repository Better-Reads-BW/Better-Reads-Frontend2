import React from 'react';

import './App.css';
import { Route, Link } from "react-router-dom";  

//vanesa components
import LoginForm from './components/LoginForm.js'
import Home from './components/Home.js'
import SignupForm from './components/SignupForm.js'

function App() {

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/login">Login!</Link>
        </li>
        <li>
          <Link to="/signup">Signup!</Link>
        </li>
        <li>
          <Link to="/protected">Users Only</Link>
        </li>
      </ul>
      <Route exact path="/home" component={Home} />
      <Route exact path="/signup" component={SignupForm} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/protected" /*component={UserPage}*/ />
    </div>
  );
}

export default App;
