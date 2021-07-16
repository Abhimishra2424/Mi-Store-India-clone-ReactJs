import React from "react";
import "./App.css";
import data from "./data/data.json";
import Navbar from "./components/Navbar";
import PreNavBar from "./components/PreNavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import offer from "./data/offer";

function App() {
  
  return (
    <Router>
      <PreNavBar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offers={offer} />
    </Router>
  );
}

export default App;
