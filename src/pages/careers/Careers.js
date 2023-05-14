import { Box, Stack } from "@mui/material";
import React from "react";
import titleImage from "../../picture/page-title.jpg";
import "./Careers.css";

const Careers = () => {
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
            {" "}
            <li class="fas fa-arrow-right"></li>
          </span>{" "}
          &nbsp; &nbsp;
          <li>
            <span>Careers</span>
          </li>
        </ul>
        <h1>Careers</h1>
      </Box>
      <Stack direction={"row"}>
        <div className="careerpara">
          <p className="p1">No openings right now. Stay tuned!</p>
        </div>
      </Stack>
    </Box>
  );
};

export default Careers;
