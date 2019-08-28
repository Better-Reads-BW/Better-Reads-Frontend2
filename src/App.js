import React from "react";
import "./App.css";
import "./components/WelcomePage.js";
import TabNav from "./components/TabNav.js";
import SearchForm from "./components/SearchForm.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TabNav />
        <SearchForm />
      </header>
    </div>
  );
}

export default App;
