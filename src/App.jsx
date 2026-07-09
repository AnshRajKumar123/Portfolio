import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Cursor from "./Components/Cursor";
import About from "./Components/About";
import Work from "./Components/Work";
import Service from "./Components/Service";
import Skills from "./Components/Skills";
import Review from "./Components/Review";
import Contact from "./Components/Contact";

const App = () => {
  return <>

    <Cursor />
    <Navbar />
    <Hero />
    <About />
    <Work />
    <Service />
    <Skills />
    <Review />
    <Contact />
  </>;
};

export default App;
