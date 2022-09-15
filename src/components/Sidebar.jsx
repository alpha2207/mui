import React from 'react'
import Box from '@mui/material/Box'
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Home } from '@mui/icons-material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';

export default function Sidebar() {
  return (
    <Box p={2} flex={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <List>
        <ListItemButton component='a' href='#home'>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>

        <ListItemButton component='a' href='#home'>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>

        <ListItemButton component='a' href='#home'>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>

        <ListItemButton component='a' href='#home'>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>

        <ListItemButton component='a' href='#home'>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>

        <ListItemButton component='a' href='#home'>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>

        <ListItemButton component='a' href='#home'>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>

        <ListItemButton component='a' href='#home'>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>

      </List>
    </Box>
  )
}
