import React from "react";
import "./Serviceintro.css";
import { Stack, Box } from "@mui/material";

const Serviceintro = () => {
  return (
    <div className="Serviceintro">
      <div className="Serviceintrotitles">
        <h6 className="Serviceintro-title1">SERVICES WE’RE OFFERING</h6>
        <hr className="line" />
        <h2 className="Serviceintro-title2">
          High quality products and services that we stand <br />
          behind
        </h2>
      </div>
      <div className="intro-boxes">
        <Stack direction={{ xs: "row", md: "row" }}>
          <Box flex={1} align="center">
            <div className="informatica-intro-box">
              <div className="zoom-effect-container-infor-intro-image">
                <div className="infor-intro-image">
                  <img
                    className="infor-intro-image1"
                    src="https://cosecantinc.com/wp-content/uploads/2022/10/service3-550x550.jpg"
                  />
                </div>
              </div>
              <div className="bussiness-icon-intro">
                <div className="bussiness-icon-intro1 "></div>
              </div>
              <div className="infor-container"></div>
              <div className="infor-intro-title">
                <h4 className="infor-intro-title1">
                  <a className="infor-intro-title1-link" href="/Informatica">
                    Informatica
                  </a>
                </h4>
              </div>
              <p className="infor-intro-para1">
                Informatica is one of the most widely used tools for data
              </p>
              <div className="linkreadmore">
                <a className="readmorelink-infotmatica" href="/Informatica">
                  Read more &nbsp;<p className="right-arrow">&#10132;</p>
                </a>
              </div>
            </div>
          </Box>

          <Box flex={1} align="center">
            <div className="Salesforce-intro-box">
              <div className="zoom-effect-container-Salesforce-intro-image">
                <div className="Salesforce-intro-image">
                  <img
                    className="Salesforce-intro-image1"
                    src="https://cosecantinc.com/wp-content/uploads/2022/10/slide7-550x550.jpg"
                  />
                </div>
              </div>
              <div className="Salesforce-icon-intro">
                <div className="Salesforce-icon-intro1 "></div>
              </div>
              <div className="Salesforce-container"></div>
              <div className="Salesforce-intro-title">
                <h4 className="Salesforce-intro-title1">
                  <a
                    className="Salesforce-intro-title1-link"
                    href="/Salesforce"
                  >
                    Salesforce
                  </a>
                </h4>
              </div>
              <p className="Salesforce-intro-para1">
                Our Salesforce services are all about cost-effectiveness, close
                collaboration, efficiency gains,
              </p>
              <div className="linkreadmore">
                <a className="readmorelink-Salesforce" href="/Salesforce">
                  Read more &nbsp;<p className="right-arrow">&#10132;</p>
                </a>
              </div>
            </div>
          </Box>

          <Box flex={1} align="center">
            <div className="RedHat-intro-box">
              <div className="zoom-effect-container-RedHat-intro-image">
                <div className="RedHat-intro-image">
                  <img
                    className="RedHat-intro-image1"
                    src="https://cosecantinc.com/wp-content/uploads/2022/10/bg9-550x550.jpg"
                  />
                </div>
              </div>
              <div className="RedHat-icon-intro8">
                <div className="RedHat-icon-intro11 "></div>
              </div>
              <div className="RedHat-container1"></div>
              <div className="RedHat-intro-title">
                <h4 className="RedHat-intro-title1">
                  <a className="RedHat-intro-title1-link" href="/RedHat">
                    RedHat Linux
                  </a>
                </h4>
              </div>
              <p className="RedHat-intro-para1">
                Our team of Linux consultants support Red Hat servers of all
              </p>
              <div className="linkreadmore">
                <a className="readmorelink-RedHat" href="/RedHat">
                  Read more &nbsp;<p className="right-arrow">&#10132;</p>
                </a>
              </div>
            </div>
          </Box>
        </Stack>
      </div>
    </div>
  );
};

export default Serviceintro;
