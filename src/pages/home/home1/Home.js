import React from "react";
import Slide from "../slideshow/Slide";
import About from "../about/aboutt/About";
import Serviceintro from "../service3/Serviceintro";
import Feature from "../feature/feature";

import { Home1 } from "./Home1";
import { Mission } from "../mission/Mission";
import Fb from "../fb/Fb";
import { Fingertips } from "../fingertips/Fingertips";

const Home = () => {
  return (
    <div>
      <Home1 />
      <Slide />
      <About />
      <Serviceintro />
      <Feature />
      <Fingertips />
      <Fb />
      <Mission />
    </div>
  );
};

export default Home;
