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
      </Stack>{" "}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15711.847742493053!2d78.77514275541992!3d10.102201600000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0067ee3bd78b5d%3A0xedc9ce9a7e0d52e5!2zTGlzYSBGaXRuZXNzIOCusuCuv-CumuCuviDgroPgrqrgrr_grp_gr43grqngrrjgr40!5e0!3m2!1sen!2sin!4v1685008622357!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default Contact;
