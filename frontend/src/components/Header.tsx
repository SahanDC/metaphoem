import React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";


import "./Header.css";

const [anchorElNav, setAnchorElNav] = React.useState(null);

const handleOpenNavMenu = (event: any) => {
  setAnchorElNav(event.currentTarget);
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

function Header() {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem key={"searchKey"} onClick={handleCloseNavMenu}>
                  <Link href="/searchPage" underline="none" color={"inherit"}>
                    <Typography textAlign="center">Search</Typography>
                  </Link>
                </MenuItem>
                <MenuItem key={"addNewKey"} onClick={handleCloseNavMenu}>
                  <Link href="/addNewPage" underline="none" color={"inherit"}>
                    <Typography textAlign="center">Add New</Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                href="/searchPage"
                key={"searchKey"}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Search
              </Button>
              <Button
                href="/addNewPage"
                key={"addNewKey"}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Add New
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
