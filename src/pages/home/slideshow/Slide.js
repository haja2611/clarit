import { Stack, Box } from "@mui/material";
import React from "react";
import "./Slide.css";
const Slide = () => {
  return (
    <div className="slidess">
      <Stack direction={{ xs: "row", md: "row" }}>
        <Box flex={1} align="center">
          <div className="slide1">
            <div class="container">
              <div class="slide1-icon">
                <span class="icon-patient1"></span>
              </div>
              <h5 className="slide-name1">Define</h5>
            </div>
          </div>
        </Box>
        <Box flex={1} align="center">
          <div className="slide2">
            <div class="container2">
              <div class="slide2-icon">
                <span class="icon-patient2"></span>
              </div>
              <h5 className="slide-name2">Develop</h5>
            </div>
          </div>
        </Box>
        <Box flex={1} align="center">
          <div className="slide3">
            <div class="container3">
              <div class="slide3-icon">
                <span class="icon-patient3"></span>
              </div>
              <h5 className="slide-name3">Deliver</h5>
            </div>
          </div>
        </Box>
      </Stack>
    </div>
  );
};

export default Slide;
