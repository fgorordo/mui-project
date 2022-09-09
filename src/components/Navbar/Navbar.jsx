import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { mainNavbarItems } from './const/navbarItems';
import { navbarStyles } from './styles';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <Drawer
    sx={ navbarStyles.drawer}
    variant="permanent"
    anchor="left"
  >
    <Toolbar />
    <Divider />
    <List>
      {mainNavbarItems.map((items) => (
        <ListItem 
          button 
          key={items.id}
          onClick={() => navigate(items.route)}
          >
            <ListItemIcon
              sx={navbarStyles.icons}
            >
              {items.icon}
            </ListItemIcon>
            <ListItemText 
              sx={navbarStyles.text}
              primary={items.label} 
            />
        </ListItem>
      ))}
    </List>
  </Drawer>
  )
}

export default Navbar