import { Box, Container, Paper } from "@mui/material";
import "./header.css";
import Navbar from "../navbar/Navbar";

const Header = () => {
  const navigationItems = [
    {
      id: 1,
      item: "About",
      route: "about",
      display: {
        type: "text",
        style: "none",
      }
    },
    {
      id: 2,
      item: "Contact",
      route: "contact",
      display: {
        type: "text",
        style: "none",
      }
    },
    {
      id: 3,
      item: "Signin",
      route: "signin",
      display: {
        type: "button",
        style: "outlined",
      }
    },
    {
      id: 4,
      item: "Signup",
      route: "signup",
      display: {
        type: "button",
        style: "contained",
      }
    },
  ];

  return (
    <header>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          width: "100%",
          padding: "10px 15px",
          boxSizing: "border-box",
          justifyContent: "space-between",
          height: "120px",
        }}
      >
        <Box
          sx={{
            width: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <Container sx={{height: "100%"}}>
            <img style={{height: "100%",border: "2px solid black", borderRadius: "50%"}} src="/images/book-my-wheels.webp" alt="Book My Wheels" />
         </Container>
        </Box>

        <Navbar navigationItems={navigationItems} />
      </Paper>
    </header>
  );
};

export default Header;
