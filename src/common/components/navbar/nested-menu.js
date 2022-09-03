import React from "react";
import { Menu, MenuItem } from "../..";

const NestedMenu = ({anchorEl,setAnchorEl,handleMobileMenuClose}) => {
  const isMenuOpen = Boolean(anchorEl);
  const menuId = "primary-search-account-menu";
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
};

export default NestedMenu;
