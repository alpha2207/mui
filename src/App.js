import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [mode,setMode]=useState('light');

  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={'text.primary'}>
        <Navbar />
        <Stack direction='row' justifyContent='space-between' spacing={2}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
