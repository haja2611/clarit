import React from "react";
import "./Feature.css";
import { Box, Stack } from "@mui/material";

const Feature = () => {
  return (
    <div className="Feature">
      <div className="Feature-titles">
        <h6 className="Featureintro-title1">FEATURED CLIENTS</h6>
        <hr className="Feature-line" />
      </div>
      <div classname="Feature-box">
        <Stack direction={{ xs: "row", md: "row" }} pt={7}>
          <Box flex={1}>
            <div className="Feature-think"></div>
          </Box>
          <Box flex={1}>
            <div className="Feature-MST"></div>
          </Box>
          <Box flex={1}>
            <div className="Feature-Centene"></div>
          </Box>
          <Box flex={1}>
            <div className="Feature-reynolds"></div>
          </Box>
        </Stack>
      </div>
    </div>
  );
};

export default Feature;
