import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import "./Home1.css";
import { hover } from "@testing-library/user-event/dist/hover";

export const Home1 = () => {
  return (
    <div className="home1st">
      <div className="homeimg">
        <div className="home1shadow">
          <div className="home1-title1">
            <h1 className="home1titleh1">
              {" "}
              IT SOLUTIONS & <br />
              TECHNOLOGY
            </h1>
          </div>
          <div className="home1-title2">
            <h3 className="home1title2h3">
              Accelarte Straegy Execeution and Consistency in Revenue Growth !
              <br /> We are committed to providing our clients tha best
              strategic <br />
              guidence available
            </h3>
          </div>

          <div className="discover-buttonmain">
            <a className="discoverbutton1main" href="/Services">
              <span className="service-page-buttonmain"> DISCOVER MORE</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
