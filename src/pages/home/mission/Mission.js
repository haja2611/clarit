import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import "./Mission.css";

export const Mission = () => {
  return (
    <Stack
      direction={"row"}
      gap={"30px"}
      mt={"180px"}
      mb={"100px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingBottom={"50px"}
    >
      <Box
        className="projects"
        sx={{
          bgcolor: "white",
          display: "flex",
          height: "220px",
          width: "300px",
        }}
      >
        <Box
          className="topbox"
          sx={{
            bgcolor: "grey.300",
            height: "110px",
            width: "110px",
            mt: "-60px",
            ml: "90px",
          }}
        >
          <IconButton disableRipple>
            <RocketLaunchOutlinedIcon
              className="iconsrocket"
              fontSize="100px"
            />
          </IconButton>
          <Typography
            variant="h3"
            color={"black"}
            mt={7}
            fontWeight={700}
            ml={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            100
          </Typography>
          <Box
            className="mission-box-titles"
            height={"40px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"200px"}
            ml={"-30px"}
            mt={"10px"}
            color={"white"}
            fontWeight={800}
          >
            <Typography variant="h6" fontSize={"14px"}>
              PROJECTS
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        className="projects"
        sx={{
          bgcolor: "white",
          display: "flex",
          height: "220px",
          width: "300px",
        }}
      >
        <Box
          className="topbox"
          sx={{
            bgcolor: "grey.300",
            height: "110px",
            width: "110px",
            mt: "-60px",
            ml: "80px",
            alignItems: "center",
            display: "block",
          }}
        >
          <IconButton disableRipple sx={{}}>
            <PermIdentityOutlinedIcon
              className="iconsrocket"
              fontSize="100px"
            />
          </IconButton>
          <Typography
            variant="h3"
            color={"black"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            mt={7}
            fontWeight={700}
            ml={2}
          >
            18
          </Typography>
          <Box
            className="mission-box-titles"
            height={"40px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"200px"}
            ml={"-30px"}
            mt={"10px"}
            color={"white"}
          >
            <Typography variant="h6" fontSize={"14px"}>
              IT SPECIALISTS
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        className="projects"
        sx={{
          bgcolor: "white",
          display: "flex",
          height: "220px",
          width: "300px",
        }}
      >
        <Box
          className="topbox"
          sx={{
            bgcolor: "grey.300",
            height: "110px",
            width: "110px",
            mt: "-60px",
            ml: "80px",
            alignItems: "center",
            display: "block",
          }}
        >
          <IconButton disableRipple>
            <Diversity1OutlinedIcon className="iconsrocket" fontSize="100px" />
          </IconButton>
          <Typography
            variant="h3"
            color={"black"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            mt={7}
            fontWeight={700}
            ml={2}
          >
            99
          </Typography>
          <Box
            className="mission-box-titles"
            height={"40px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"200px"}
            ml={"-30px"}
            mt={"10px"}
            color={"white"}
          >
            <Typography variant="h6" fontSize={"14px"}>
              SATISFIED CLIENTS
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        className="projects"
        sx={{
          bgcolor: "white",
          display: "flex",
          height: "220px",
          width: "300px",
        }}
      >
        <Box
          className="topbox"
          sx={{
            bgcolor: "grey.300",
            height: "110px",
            width: "110px",
            mt: "-60px",
            ml: "80px",
            alignItems: "center",
            display: "block",
          }}
        >
          <IconButton disableRipple sx={{}}>
            <AddTaskOutlinedIcon fontSize="100px" className="iconsrocket" />
          </IconButton>
          <Typography
            variant="h3"
            color={"black"}
            mt={7}
            fontWeight={700}
            ml={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            369
          </Typography>
          <Box
            className="mission-box-titles"
            height={"40px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"200px"}
            ml={"-30px"}
            mt={"10px"}
            color={"white"}
          >
            <Typography variant="h6" fontSize={"14px"}>
              SMART SOLUTIONS
            </Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
