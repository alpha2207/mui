import { AppBar,styled, Toolbar, Typography } from '@mui/material'
import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';

const StyledToolbar=styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
})

export default function Navbar() {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <PetsIcon sx={{display:{xs:'block',sm:'none'}}}/>
        <Typography sx={{display:{xs:'none',sm:'block'}}} variant='h6'>alpha_dev</Typography>

        <SearchBar>
          
        </SearchBar>
      </StyledToolbar>
    </AppBar>
  )
}
