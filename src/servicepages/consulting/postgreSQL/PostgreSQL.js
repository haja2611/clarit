import { Box, Stack } from "@mui/material";
import React from "react";
import titleImage from "../../../picture/page-title.jpg";

import "./PostgreSQL.css";

const PostgreSQL = () => {
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
            <span>PostgreSQL/SQL Server/Oracle</span>
          </li>
        </ul>
        <h1>PostgreSQL/SQL Server/Oracle</h1>
      </Box>
      <Stack direction={"row"}>
        <div className="PostgreSQLpara">
          <img
            className="PostgreSQL-icon"
            src="https://cosecantinc.com/wp-content/uploads/2022/12/PostgreSQL-Logo-300x188.jpg"
          />
          <div className="PostgreSQLparatitle">
            <h3 className="PostgreSQLparatitle1">&nbsp; </h3>
          </div>
          <p className="PostgreSQLpara1">
            Database administrators (DBAs) have years of technical expertise and
            experience in all aspects of database. Along with core database
            administration, our teams have extensive knowledge in all aspects of
            monitoring, replication, tuning, upgrading, migrating, auditing,
            reporting, cloud, and high-availability solutions. Our service
            ensures speed, security, and provides a road map of your systems and
            data.
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

export default PostgreSQL;
