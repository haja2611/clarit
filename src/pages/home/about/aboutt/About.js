import React from "react";
import "./About.css";
import { Stack } from "@mui/material";
import About1 from "../about1/About1";
import About2 from "../about2/About2";

const About = () => {
  return (
    <section id="About Us">
      <Stack direction={"row"}>
        <About1 />
        <About2 />
      </Stack>
    </section>
  );
};

export default About;
 