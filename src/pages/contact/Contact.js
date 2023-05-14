import { Box, Stack } from "@mui/material";
import React from "react";
import titleImage from "../../picture/page-title.jpg";
import "./Contact.css";
import Messagebox from "./Messagebox";

const Contact = () => {
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
        <ul className="contact-homli">
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
            <span>Contact Us</span>
          </li>
        </ul>
        <h1>Contact Us</h1>
      </Box>
      <Stack direction={"row"}>
        <Box>
          <Box
            flex={1}
            sx={{
              width: "600px",
              height: "200px",

              margin: "100px auto auto 40px",
              paddingRight: "50%",
            }}
          >
            <div className="head1">
              <h3>Contact Us</h3>
            </div>
            <p className="p1">
              To learn more about our service offerings and industry expertise
              <br />
              or to inquire about the service.
              <br /> Please fill out the form below.
            </p>
          </Box>
          <div className="address-box">
            <div class="box" className="zoom">
              <div className="globe">
                <i class="fas fa-globe" />
              </div>
            </div>
            <div>
              <h4>
                <b>Our Address</b>
              </h4>
              <p className="address-p">
                10015 Old Columbia Road Ste B-215, Columbia, MD – 21046
              </p>
            </div>
          </div>

          <div className="address-box2">
            <div class="box" className="zoom">
              <div className="globe">
                <i class="fas fa-envelope" />
              </div>
            </div>
            <div>
              <h4>
                <b>Email</b>
              </h4>
              <p className="email">
                <a className="mail" href="default.asp" target="_blank">
                  clarit@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="address-box3">
            <div class="box" className="zoom">
              <div className="globe">
                <i class="	fas fa-phone-volume" />
              </div>
            </div>
            <div>
              <h4>
                <b>Contact</b>
              </h4>
              <p className="contact">+91 1234567890</p>
            </div>
          </div>
        </Box>
        <Box flex={2}>
          <Messagebox />
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact;
