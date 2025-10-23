import React from 'react'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const MAppBar = () => {
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "blue" }}>
        <Toolbar variant="dense">
          
          <Typography variant="h6" color="yellow" component="div" >
            Rekap Berita Kanwil Kemenkum Maluku
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MAppBar