import { Button } from "@mui/material";
import { Delete,Add, Send } from "@mui/icons-material";

function App() {

  return (
    <div>
      <Button startIcon={<Delete />} variant="outlined" color="error" sx={{m:2}}>Text</Button>
      <Button endIcon={<Send />} variant="contained" sx={{m:2}}>Send</Button>
      <Button variant="outlined" sx={{m:2}}>Outlined</Button>
    </div>
  );
}

export default App;
