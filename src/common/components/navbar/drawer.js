import React from "react";
import {
  Paper,
  MenuItem,
  MenuList,
  ListItemText,
  Divider,
  ClickAwayListener,
} from "../..";
import { useNavigate } from "react-router-dom";
const Drawer = ({ setMobileDrawerEl }) => {
  const historyHook = useNavigate();
  const handleMobileDrawerClose = () => {
    setMobileDrawerEl(null);
  };
  const redirectTo = (path) => {
    handleMobileDrawerClose();
    historyHook(path);
  };

  return (
    <ClickAwayListener onClickAway={handleMobileDrawerClose}>
      <Paper
        sx={{ width: "100%", display: { xs: "flex", md: "none" } }}
        onClose={() => console.log("testing")}
      >
        <MenuList
          sx={{
            width: "100%",
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <MenuItem>
            <ListItemText onClick={() => redirectTo("/home")}>
              Home
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText onClick={() => redirectTo("/services")}>
              Product & Services
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText onClick={() => redirectTo("/reported-sites")}>
              Reported Sites
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText onClick={() => redirectTo("/our-team")}>
              Our Team
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText onClick={() => redirectTo("/home")}>
            <img
              src="/assets/weblogo.png"
              width={200}
              />
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </ClickAwayListener>
  );
};

export default Drawer;
