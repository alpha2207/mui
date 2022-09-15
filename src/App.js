import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {

  return (
   <Box>
    <Navbar/>
    <Stack direction='row' justifyContent='space-between' spacing={2}>
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </Stack>
    <Add />
   </Box>
  );
}

export default App;
