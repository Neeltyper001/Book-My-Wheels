import { Button } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Box} from "@mui/material";
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Paper} from "@mui/material";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} component="div" style={{marginBlock:"0", width: "100vw", height: "100vh", backgroundColor: "lightgrey"}}>
    <Paper style={{display:"flex" , justifyContent: "center" , alignItems:"center" ,backgroundColor: "white", height:"500px", width: "500px"}} elevation={3}>
        <Box display={"flex"} gap="20px" flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Box display={"flex"}  justifyContent={"center"} alignItems={"center"}>
            <Typography fontWeight={"bolder"} variant="h1">4</Typography>
            <Typography fontWeight={"bolder"} color="cyan" variant="h1">0</Typography>
            <Typography fontWeight={"bolder"} variant="h1">4</Typography>
          </Box>
          <Typography textAlign={"center"} fontWeight={"bold"} fontSize="26px" fontFamily={"monospace"} variant="p">OOPS! page not found</Typography>
          <NavLink replace to="/"><Button variant="contained"><ArrowBackIcon /> Back to homepage</Button></NavLink>
        </Box>
    </Paper>
</Box>
  )
}

export default PageNotFound