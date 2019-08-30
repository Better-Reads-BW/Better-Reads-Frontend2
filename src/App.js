import React from "react";
import "./App.css";
import "./components/WelcomePage.js";
import TabNav from "./components/TabNav.js";
import { Route } from "react-router-dom";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Booklist!!</h1>
        <Route exact path="/WelcomePage" />
        <Route exact path="/TabNav" />
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route
          exact
          path="/register"
          render={props => <Register {...props} />}
        />
        <Route exact path="/booklist" component={BookList} />
        <TabNav />
      </header>
    </div>
  );
}

export default App;
