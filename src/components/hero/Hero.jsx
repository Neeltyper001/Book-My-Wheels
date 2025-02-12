import { Box, Typography } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./heroTheme";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ position: "relative", height: "500px", width: "100%", margin: "5px 0px"}}>
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src="/images/hero-image.png"
      />
      <Typography
        sx={{
          fontSize: {xs: '45px' , md: "67px"},
          color: "white",
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%)",
          fontWeight: 'bolder',
          width: "90%",
        
        }}
      >
            <TypeAnimation
                sequence={[            
                  "Your Travel Companion.",
                  1000, 
                  "Bringing You the Best Rides.",
                  2000,
                ]}
                wrapper="span"
                speed={30}
                style={{
                  display: "inline-block",
                  color: "white",
                  fontWeight: "bold",
                }}
                repeat={Infinity}
              />

      </Typography>
    </Box>
    </ThemeProvider>
  );
};

export default Hero;
