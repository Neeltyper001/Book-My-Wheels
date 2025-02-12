import { Box, Grid2, Typography } from '@mui/material'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './footer';

const Footer = () => {
  return (
      <footer>
        <ThemeProvider theme={theme}>
        <Box sx={{height: "200px" , backgroundColor: "black"}}>
            <Grid2 container sx={{height: "100%"}}>
                <Grid2 size={6}>
                    <Box sx={{display: "flex", alignItems: "center", justifyContent:"space-around",height: "100%"}}>
                        <XIcon sx={{color:"white"}} />
                        <InstagramIcon sx={{color:"white"}}/>
                        <RedditIcon sx={{color:"white"}}/>
                    </Box>
                </Grid2>
                <Grid2 size={6}>
                    <Box sx={{display: "flex", height: "100%", justifyContent: "center", alignItems: "center"}}>
                        <Typography sx={{color:"white"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus iusto aliquam.</Typography>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    </ThemeProvider>
    </footer>
  )
}

export default Footer