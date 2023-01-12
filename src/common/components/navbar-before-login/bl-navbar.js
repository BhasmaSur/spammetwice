import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  MenuIcon,
  SearchIcon,
  AccountCircle,
  MailIcon,
  NotificationsIcon,
  MoreIcon,
} from "../..";
import {
  SearchBar,
  SearchIconWrapper,
} from "../../components/search-bar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

const BLNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [mobileDrawerEl, setMobileDrawerEl] = React.useState(false);
  const [mobileSearchBar, setMobileSearchBar] = useState(false);

  const mobileMenuId = "primary-search-account-menu-mobile";
  const menuId = "primary-search-account-menu";
  const isDrawerOpen = Boolean(mobileDrawerEl);

  const historyHook = useNavigate();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = ()=>{

  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const goToLoginPage = () => {
    historyHook("/login");
  };
  const drawerId = "primary-search-account-drawer-mobile";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            aria-controls={drawerId}
            onClick={() => setMobileDrawerEl(!mobileDrawerEl)}
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Typography variant="h5" mr={1}  mt={1}  noWrap component="div">
              Spam Me Twice!
            </Typography>
          </Box>
          <Box
            ml={4}
            mt={1}
            sx={{
              borderRadius: 1,
              border: 1,
              display: { xs: "block", sm: "none" },
              padding: "1.5px"
          
            }}
            onClick={() => setMobileSearchBar(!mobileSearchBar)}
          > <SearchIcon />
          </Box>

          <Box
            ml={3}
            width="350px"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <SearchBar />
          </Box>

          <Box ml={3} mt={1}>
            <Button
              
              size="small"
              color="inherit"
              variant="outlined"
              onClick={goToLoginPage}
              startIcon={<LoginIcon />}
            >Login
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>

        {mobileSearchBar && (
          <Box
            width="98%"
            marginLeft="1%"
            sx={{ display: { xs: "block", sm: "none" },  marginBottom: "5px" }}
          >
            <SearchBar />
          </Box>
        )}
      </AppBar>
    </Box>
  );
};

export default BLNavbar;