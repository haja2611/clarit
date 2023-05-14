import { Box, Stack } from "@mui/material";
import React from "react";
import titleImage from "../../picture/page-title.jpg";
import "./Onlinetraining.css";

const Onlinetraining = () => {
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
            <span>Online Training</span>
          </li>
        </ul>
        <h1>Online Training</h1>
      </Box>
      <Stack direction={"row"}>
        <div className="onlinetrainingpara">
          <div className="onlinetrainparatitle">
            <h3 className="onlinetrainparatitle1">Online Training</h3>
          </div>
          <p className="onlinetrainingpara1">
            Comprehensive training is available whenever and wherever you need
            it. Through a hassle-free online platform, our training sessions,
            training videos, and knowledgeable in-house consultants will guide
            you through the core elements of your software system.
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

export default Onlinetraining;
