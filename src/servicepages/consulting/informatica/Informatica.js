import { Box, Stack } from "@mui/material";
import React from "react";
import titleImage from "../../../picture/page-title.jpg";

import "./Informatica.css";

const Informatica = () => {
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
            <span>Informatica</span>
          </li>
        </ul>
        <h1>Informatica</h1>
      </Box>
      <Stack direction={"row"}>
        <div className="Informaticapara">
          <img
            className="informatica-icon"
            src="https://cosecantinc.com/wp-content/uploads/elementor/thumbs/Informatica-e1669982717548-pykj0yjrq42zcacev40max01s2h1i7dg4qllrtg2fs.jpg"
          />
          <div className="Informaticaparatitle">
            <h3 className="Informaticaparatitle1">&nbsp; Informatica</h3>
          </div>
          <p className="Informaticapara1">
            Informatica is one of the most widely used tools for data
            transformation and migration. Cosecant has experience in building
            data warehouses for a variety of environments and implementing ETL
            processes throughout complex systems.
          </p>
          <br /> <br />
          <div className="contact-button-training">
            <a className="contactbutton1" href="/Contact us">
              <span className="contact-page-button"> CONTACT US</span>
            </a>
          </div>
        </div>
      </Stack>
    </Box>
  );
};

export default Informatica;
