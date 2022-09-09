import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const BasicMenu = ({ anchorEl, handleClose, open, menuItems }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      {
      menuItems.map((item) => {
        return (<MenuItem onClick={handleClose} key={item.id}>{item.label}</MenuItem>)
      })
      }
    </Menu>
  )
};

export default BasicMenu