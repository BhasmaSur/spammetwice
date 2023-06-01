import * as React from "react";
import { useState } from "react";
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
  HomeIcon,
  PlaylistRemoveIcon,
  PrecisionManufacturingIcon,
  Tooltip,
  GroupsIcon,
  DeleteIcon,
  AddIcon,
  Button,
} from "../..";
import { SearchBar, SearchIconWrapper } from "../../components/search-bar";
import MobileMenu from "./menu";
import NestedMenu from "./nested-menu";
import LoginIcon from "@mui/icons-material/Login";
import Drawer from "./drawer";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";
export default function NavbarBeforeLogin() {
  const historyHook = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [mobileDrawerEl, setMobileDrawerEl] = React.useState(false);
  const [returnedValues, setReturnedValues] = useState([]);

  const mobileMenuId = "primary-search-account-menu-mobile";
  const menuId = "primary-search-account-menu";
  const isDrawerOpen = Boolean(mobileDrawerEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {};

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const drawerId = "primary-search-account-drawer-mobile";
  const redirectToHome = () => {
    historyHook("/home");
  };

  const redirectToOurTeam = () => {
    historyHook("/our-team");
  };

  const redirectToProdctsAndService = () => {
    historyHook("/services");
  };
  const hendleReportedList = () => {
    historyHook("/reported-sites");
  };

  const searchRelavantSpam = (event) => {
    console.log("menu");
    setReturnedValues((preV) => [...preV, event.target.value]);
  };

  const goToLoginPage = () => {
    historyHook("/login");
  };
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
          <Box sx={{ flexGrow: 1 }} />
          <Box mr={2} sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <Typography
              mt={1}
              variant="h5"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Scam Me Twice!
            </Typography> */}
            <img src="/assets/weblogo.png" width={200} />
            <Tooltip title="Home">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={redirectToHome}
                color="inherit"
              >
                <HomeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Product">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={redirectToProdctsAndService}
                color="inherit"
              >
                <PrecisionManufacturingIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Reported Sites">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={hendleReportedList}
                color="inherit"
              >
                <PlaylistRemoveIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Our Team">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={redirectToOurTeam}
                color="inherit"
              >
                <GroupsIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <SearchBar />
          </Box>
          <Box ml={3} mt={1}>
            <Button
              size="small"
              color="inherit"
              variant="outlined"
              onClick={goToLoginPage}
              startIcon={<LoginIcon />}
            >
              <Typography sx={{ fontWeight: "bold" }}>Login</Typography>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      {mobileDrawerEl && (
        <Drawer
          mobileDrawerEl={mobileDrawerEl}
          setMobileDrawerEl={setMobileDrawerEl}
        />
      )}
      <MobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        setAnchorEl={setAnchorEl}
        setMobileMoreAnchorEl={setMobileMoreAnchorEl}
      />
      {/* <NestedMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl}/> */}
      {returnedValues.length > 0 && (
        <div className="testing">
          {returnedValues.map((reV) => {
            return <div>{reV}</div>;
          })}
        </div>
      )}
    </Box>
  );
}
