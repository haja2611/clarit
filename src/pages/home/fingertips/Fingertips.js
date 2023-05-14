import React from "react";
import "./Fingertips.css";
import { Box, Button, Typography } from "@mui/material";

export const Fingertips = () => {
  return (
    <>
      <div className="centerbody">
        <div className="centerimg">
          <Box
            className="divider"
            sx={{
              marginTop: "30px",
              height: "120vh",
              width: "1100px",
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img
              src="https://cosecantinc.com/wp-content/uploads/2022/10/icon.png"
              className="rotate"
              style={{}}
            ></img>
          </Box>
        </div>
        <div className="fingertips-title">
          <h3 className="fingertips-title1">
            IT Solutions & Services <br />
            at your Fingertips
          </h3>
          <div className="discover-button-finger">
            <a className="discoverbutton1finger" href="/Services">
              <span className="service-page-button-finger"> DISCOVER MORE</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
