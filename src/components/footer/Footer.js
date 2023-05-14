import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="bgi">
      <div className="footerwh">
        <div>
          <Stack direction={{ xs: "row", md: "row" }} pt={7}>
            <Box flex={1} align="center">
              <div className="aboutfoot">
                <h4 className="about1"> About Clarit</h4>
                <hr />
                <p className="about1para1">
                  At Clarit, we believe that the right understanding and
                  technological edge can lead companies towards a successful
                  future.
                </p>
              </div>
            </Box>
            <Box flex={1} align="center">
              <div className="services">
                <h4 className="ser-head">services</h4>
                <hr />
                <ol>
                  <li>
                    <a href="/Informatica">Infomatica</a>
                  </li>
                  <li>
                    <a href="/Web">Web Development</a>
                  </li>
                  <li>
                    <a href="/RedHat">RedHat Linux</a>
                  </li>
                  <li>
                    <a href="/PostgreSQL">PostgreSQL/SQL Server/Oracle</a>
                  </li>
                  <li>
                    <a href="/Salesforce">Salesforce</a>
                  </li>
                </ol>
              </div>
            </Box>
            <Box flex={1} align="center">
              <div className="contactfoot">
                <h4>Contact</h4>
                <hr />
                <div>
                  <p className="contact1para1">
                    10015 Old Columbia Road Ste B-215 Columbia, MD – 21046
                  </p>
                  <br />
                  <p className="contact1para1">Monday – Friday: 9AM – 5PM</p>
                  <br />
                  <div className="iconfoot">
                    <div>
                      <i className="fas fa-envelope" />
                    </div>
                    &nbsp; &nbsp;
                    <a href="#" className="detfoot">
                      clarit@gmail.com
                    </a>
                  </div>
                  <br />
                  <div className="iconfoot">
                    <div>
                      <i className="fas fa-phone-square" />
                    </div>
                    &nbsp; &nbsp;
                    <a href="#" className="detfoot">
                      +91 9876543210
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            <Box flex={1}>
              <div className="followfoot">
                <h4 className="followhead">Follow Us</h4>
                <hr />
                <Box sx={{ marginTop: "20px " }}>
                  <IconButton
                    sx={{ color: "#1DA1F2", backgroundColor: " #fff" }}
                  >
                    <Twitter />
                  </IconButton>
                  &nbsp; &nbsp;
                  <IconButton sx={{ color: "blue", backgroundColor: " #fff" }}>
                    <Facebook />
                  </IconButton>
                  &nbsp; &nbsp;
                  <IconButton
                    sx={{
                      backgroundColor: " #fff",

                      color: " #bc1888 ",
                    }}
                  >
                    <Instagram />
                  </IconButton>
                  &nbsp; &nbsp;
                  <IconButton
                    sx={{
                      backgroundColor: " #fff",

                      color: " #bc1888 ",
                    }}
                  >
                    <Pinterest />
                  </IconButton>
                </Box>
              </div>
            </Box>
          </Stack>
        </div>
      </div>
      <div className="copyright">
        <p className="footercopy">© Copyright 2023 by Clarit</p>
      </div>
    </div>
  );
};

export default Footer;
