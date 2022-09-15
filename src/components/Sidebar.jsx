import React from 'react'
import Box from '@mui/material/Box'
import { List, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Chat, Home, Nightlight, Search, ShoppingCart } from '@mui/icons-material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';

export default function Sidebar({ mode, setMode }) {
  console.log(mode, setMode);
  return (
    <Box p={2} flex={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box sx={{ position: 'fixed' }}>
        <List>
          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <Chat />
            </ListItemIcon>
            <ListItemText primary="Chats" />
          </ListItemButton>

          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>



          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>

          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>

          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <Search />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItemButton>

          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <Nightlight />
            </ListItemIcon>
            <Switch onClick={() => setMode(mode === "light" ? "dark" : "light")} />
          </ListItemButton>

        </List>
      </Box>
    </Box>
  )
}
