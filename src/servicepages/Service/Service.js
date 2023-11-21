import React from "react";
import "./Service.css";
import titleImage from "../../picture/page-title.jpg";
import { Stack, Box } from "@mui/material";

const Service = () => {
  return (
    <div>
      <div>
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
          <ul className="service-homli">
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
              <span>SERVICES</span>
            </li>
          </ul>
          <h1>
            <b>services</b>
          </h1>
        </Box>
      </div>
      <div className="intro-boxes1">
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
                transformation and migration.
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
                    href="/SalesForce"
                  >
                    Salesforce
                  </a>
                </h4>
              </div>
              <p className="Salesforce-intro-para1">
                Our Salesforce services are all about cost-effectiveness, close
                collaboration, efficiency gains, and process improvements!
              </p>
              <div className="linkreadmore">
                <a className="readmorelink-Salesforce" href="/SalesForce">
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
                    src="https://cosecantinc.com/wp-content/uploads/2022/10/news5-672x448.jpg"
                  />
                </div>
              </div>
              <div className=" PostgreSQL-icon-intro">
                <div className=" PostgreSQL-icon-intro1 "></div>
              </div>
              <div className=" PostgreSQL-container"></div>
              <div className=" PostgreSQL-intro-title">
                <h4 className=" PostgreSQL-intro-title1">
                  <a
                    className=" PostgreSQL-intro-title1-link"
                    href="/PostgreSQL"
                  >
                    PostgreSQL/SQL Server/Oracle
                  </a>
                </h4>
              </div>
              <p className=" PostgreSQL-intro-para1">
                Database administrators (DBAs) have years of technical expertise
                and experience in all aspects of database.
              </p>
              <div className="linkreadmore">
                <a className="readmorelink-PostgreSQL" href="/PostgreSQL">
                  Read more &nbsp;<p className="right-arrow">&#10132;</p>
                </a>
              </div>
            </div>
          </Box>
        </Stack>
      </div>
      <div className="intro-boxes2">
        <Stack direction={{ xs: "row", md: "row" }}>
          <Box flex={1}>
            <div className="RedHat-intro-box">
              <div className="zoom-effect-container-RedHat-intro-image">
                <div className="RedHat-intro-image">
                  <img
                    className="RedHat-intro-image1"
                    src="https://cosecantinc.com/wp-content/uploads/2022/10/bg9-550x550.jpg"
                  />
                </div>
              </div>
              <div className="RedHat-icon-intro">
                <div className="RedHat-icon-intro1 "></div>
              </div>
              <div className="RedHat-container"></div>
              <div className="RedHat-intro-title">
                <h4 className="RedHat-intro-title1">
                  <a className="RedHat-intro-title1-link" href="/RedHat">
                    RedHat Linux
                  </a>
                </h4>
              </div>
              <p className="RedHat-intro-para1">
                Our team of Linux consultants support Red Hat servers of all
                kinds.
              </p>
              <div className="linkreadmore">
                <a className="readmorelink-RedHat" href="/RedHat">
                  Read more &nbsp;<p className="right-arrow">&#10132;</p>
                </a>
              </div>
            </div>
          </Box>
          <Box flex={1}>
            <div className="Web-intro-box">
              <div className="zoom-effect-container-Web-intro-image">
                <div className="Web-intro-image">
                  <img
                    className="Web-intro-image1"
                    src="https://cosecantinc.com/wp-content/uploads/2022/10/news1-672x448.jpg"
                  />
                </div>
              </div>
              <div className="Web-icon-intro">
                <div className="Web-icon-intro1 "></div>
              </div>
              <div className="Web-container"></div>
              <div className="Web-intro-title">
                <h4 className="Web-intro-title1">
                  <a className="Web-title1-link" href="/Web">
                    Web Development
                  </a>
                </h4>
              </div>
              <p className="Web-intro-para1">
                Our skilled web developers implement the most recent innovation
                strategies to build unique web applications that suit your
                business needs.
              </p>
              <div className="linkreadmore">
                <a className="readmorelink-Web" href="/Web">
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

export default Service;
