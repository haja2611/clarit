import { Box, Stack } from "@mui/material";
import React from "react";
import titleImage from "../../../picture/page-title.jpg";

import "./Salesforce.css";

const Salesforce = () => {
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
            <span>Salesforce</span>
          </li>
        </ul>
        <h1>Salesforce</h1>
      </Box>
      <Stack direction={"row"}>
        <div className="Salesforcepara">
          <img
            className="Salesforce-icon"
            src="https://cosecantinc.com/wp-content/uploads/elementor/thumbs/Salesforce.com_logo-e1669983014343-pykj8pptdlfmfml8j9dl82qxteslksf084wetxks1s.png"
          />
          <div className="Salesforceparatitle">
            <h3 className="Salesforceparatitle1">&nbsp; Salesforce</h3>
          </div>
          <p className="Salesforcepara1">
            Our Salesforce services are all about cost-effectiveness, close
            collaboration, efficiency gains, and process improvements! We will
            deep dive into your existing processes, practices & systems,
            understand your pain points, strategist, consult, recommend routes
            for efficiency gains, take alignments and then build your salesforce
            eco-system that complements your business.
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

export default Salesforce;
