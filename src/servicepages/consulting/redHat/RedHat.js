import { Box, Stack } from "@mui/material";
import React from "react";
import titleImage from "../../../picture/page-title.jpg";

import "./RedHat.css";

const RedHat = () => {
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
            <span>RedHat Linux</span>
          </li>
        </ul>
        <h1>RedHat Linux</h1>
      </Box>
      <Stack direction={"row"}>
        <div className="RedHatpara">
          <img
            className="RedHat-icon"
            src="https://cosecantinc.com/wp-content/uploads/2022/11/RedHat-Linux-e1669983303881.png"
          />
          <div className="RedHatparatitle">
            <h3 className="RedHatparatitle1">&nbsp; RedHat Linux</h3>
          </div>
          <p className="RedHatpara1">
            Our team of Linux consultants support Red Hat servers of all kinds.
            We are personable, knowledgeable, and look forward to solving any
            Red Hat server challenge. <br /> We Provide services to Server
            Moves, Hardened Security, Performance Tuning & Scale-out, Expert
            Consulting.
          </p>
          <br /> <br />
          <div className="contact-button-training">
            <a className="contactbutton1" href="/Contact Us">
              <span className="contact-page-button"> CONTACT US</span>
            </a>
          </div>
        </div>
      </Stack>
    </Box>
  );
};

export default RedHat;
