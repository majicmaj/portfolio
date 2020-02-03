import React, { Component } from "react";
import "./App.css";

//import components
import Nav from "./Components/Nav/Nav";
import RouteManager from "./Components/RouteManager/RouteManager";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <RouteManager />
        <div className="spacer" />
        <Footer />
      </div>
    );
  }
}

export default App;
