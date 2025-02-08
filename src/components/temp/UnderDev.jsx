import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UnderDev = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <Container
      sx={{
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <img
        style={{ height: "45%", width: "auto" }}
        src="/images/under-development.webp"
        alt="under-development"
      />
      <Typography
        variant={"p"}
        sx={{
          fontSize: {
            xs: "35px",
            md: "65px",
          },
          fontWeight: "bolder",
          textAlign: "center"
        }}
      >
        Sorry for Inconvenience
      </Typography>
      <Typography
        variant="p"
        sx={{
          fontSize: {
            xs: "25px",
            md: "45px",
          },
          textAlign:"center"
        }}
      >
        This page is currently under development
      </Typography>
      <Button onClick={handleClick} variant="contained">
        To home
      </Button>
    </Container>
  );
};

export default UnderDev;
