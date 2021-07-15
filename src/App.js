import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PreNavBar from "./components/PreNavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./components/Slider";
import { banner } from "./data/data.json";

function App() {
  return (
    <Router>
      <PreNavBar />
      <Navbar />
      <Slider start={banner.start} />
    </Router>
  );
}

export default App;
