import { AppBar, styled, Toolbar, Typography, InputBase, Box, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import PetsIcon from '@mui/icons-material/Pets';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import { Theme } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled('div')({
  display: 'flex',
  width: '40%',
  background: 'white',
  padding: '0 10px',
  borderRadius: '4px'
})

const Icons = styled(Box)({
  display: 'flex',
  gap: "20px",
  alignItems: 'center'
})

const UserBox = styled(Box)({
  display: 'flex',
  gap: "10px",
  alignItems: 'center'
})

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }} variant='h6'>alpha_dev</Typography>

        <Search>
          <InputBase placeholder='Search...' />
        </Search>

        <Icons sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Badge badgeContent={4} color="error">
            <MailIcon color="white" />
          </Badge>

          <Badge badgeContent={4} color="error">
            <NotificationsActiveIcon color="white" />
          </Badge>

          <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        </Icons>

        <UserBox sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        </UserBox>


      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

      
    </AppBar>
  )
}
