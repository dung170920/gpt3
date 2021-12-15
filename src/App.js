import React from "react";
import "./App.css";
import {
  Header,
  Footer,
  Blog,
  Features,
  Possibility,
  WhatGPT,
} from "./containers";
import { Brand, CTA, Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="section-container">
        <div className="circle__bg"></div>
        <Navbar />
        <Header />
        <Brand />
        <WhatGPT />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
      </div>
      <div className="section-container">
        <Footer />
      </div>
    </div>
  );
};

export default App;
