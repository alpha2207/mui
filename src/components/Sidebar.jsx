import React from 'react'
import Box from '@mui/material/Box'

export default function Sidebar() {
  return (
    <Box p={2} flex={1} bgcolor="lightcoral" sx={{display:{xs:'none',sm:'block'}}}>Sidebar</Box>
  )
}
