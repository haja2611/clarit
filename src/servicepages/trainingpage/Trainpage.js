import { Box, Stack } from "@mui/material";
import React from "react";
import titleImage from "../../picture/page-title.jpg";
import "./Trainpage.css";

const Trainpage = () => {
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
            <span>Onsite Training</span>
          </li>
        </ul>
        <h1>Onsite Training</h1>
      </Box>
      <Stack direction={"row"}>
        <div className="trainingpara">
          <div className="trainparatitle">
            <h3 className="trainparatitle1">Onsite Training</h3>
          </div>
          <p className="trainingpara1">
            Grow your employees understanding of how software functions with
            onsite training in Salesforce and data warehouse technologies. Our
            consultants have dealt with multiple industries and know which
            information suits each situation the best. Our courses are tailored
            to your individual organization’s needs so you get the most out of
            your training experience
          </p>
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

export default Trainpage;
