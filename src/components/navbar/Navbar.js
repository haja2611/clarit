import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Box,
  styled,
  Typography,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import "./navbar.css";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "About us", Link: "/About us" },
    { Name: "Services", Link: "/Services" },
    { Name: "Careers", Link: "/Careers" },
    { Name: "Contact Us", Link: "/Contact Us" },
  ];

  const [open, SetOpen] = useState(false);
  return (
    <AppBar sx={{ background: "white" }} position={"sticky"}>
      <StyledToolbar>
        <div className="company">
          <div className="logotitle"></div>
        </div>
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          <div className="homeh1">
            <div>
              <ul className="navbarlist">
                <li>
                  <a className="homenav1" href="/">
                    Home
                  </a>
                </li>
                <div>
                  <li>
                    <a className="homenav1" href="#About Us">
                      About Us
                    </a>
                  </li>
                </div>
                <div class="dropdown">
                  <a className="homenav1" href="/Services">
                    Services
                  </a>

                  <ul class="dropdown-content">
                    <li>
                      <a class="dropdown-item" href="#">
                        Consulting &raquo;
                      </a>
                      <ul class="dropdown-menu dropdown-submenu">
                        <li>
                          <a class="dropdown-item" href="/Informatica">
                            Informatica
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/Salesforce">
                            Salesforce
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/PostgreSQL">
                            PostgreSQL/
                            <br />
                            SQL/Oracle
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/RedHat">
                            RedHat Linux
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/Web">
                            Web Development
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        Training &raquo;
                      </a>
                      <ul class="dropdown-menu dropdown-submenu">
                        <li>
                          <a class="dropdown-item" href="/Online Training">
                            online training
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/Onsite Training">
                            onsite training
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div>
                  <li>
                    <a className="homenav1" href="/Careers">
                      Careers
                    </a>
                  </li>
                </div>
                <div>
                  <li>
                    <a className="homenav1" href="/Contact%20Us">
                      Contact Us
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </MenuBox>

        <MenuIcon
          sx={{
            color: "black",
            display: { xs: "flex", sm: "flex", md: "none" },
          }}
          onClick={() => SetOpen(!open)}
        />

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={() => SetOpen(!open)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box sx={{ width: 300, height: "60vh" }}>
            {MenuItems.map((item) => (
              <MenuItem
                sx={{
                  cursor: "pointer",
                  fontSize: "14px",
                  color: "black",
                  textTransform: "capitalize",
                }}
              >
                {item.Name}
              </MenuItem>
            ))}
          </Box>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
