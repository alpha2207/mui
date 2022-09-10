import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {

  return (
   <Box>
    <Stack direction='row' justifyContent='space-between' spacing={2}>
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </Stack>
   </Box>
  );
}

export default App;
