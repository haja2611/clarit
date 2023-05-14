import { Box, Stack } from "@mui/material";
import React from "react";
import titleImage from "../../../picture/page-title.jpg";
import "./WebDevelopment.css";

const WebDevelopment = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${titleImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",

          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 400,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul>
          <li>
            <a className="homli" href="/" rel="home">
              <span className="homie">Home</span>
            </a>
          </li>
          &nbsp; &nbsp;
          <span className="arrow">
            <li class="fas fa-arrow-right"></li>
          </span>
          &nbsp; &nbsp;
          <li>
            <a className="homli" href="/Services" rel="home">
              <span className="homie">Services</span>
            </a>
          </li>
          &nbsp; &nbsp;
          <span className="arrow">
            <li class="fas fa-arrow-right"></li>
          </span>
          &nbsp; &nbsp;
          <li>
            <span>Web Development</span>
          </li>
        </ul>
        <h1>Web Development</h1>
      </Box>
      <Stack direction={"row"}>
        <div className="WebDevelopmentpara">
          <div className="WebDevelopmentparatitle">
            <h3 className="WebDevelopmentparatitle1">
              Web Development Services
            </h3>
          </div>
          <p className="WebDevelopmentpara1">
            Our skilled web developers implement the most recent innovation
            strategies to build unique web applications that suit your business
            needs. If you aspire to develop successful business website
            solutions with brand presence and high-quality lead generation
            techniques, Cosecant provides affordable, quality websites and
            related services for businesses.
          </p>
          <br /> <br />
          <div className="contact-button-training">
            <a className="contactbutton1" href="Contact Us">
              <span className="contact-page-button"> CONTACT US</span>
            </a>
          </div>
        </div>
      </Stack>
    </Box>
  );
};

export default WebDevelopment;
