import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputTextField from "../../ui/InputTextField";
import InputPasswordField from "../../ui/InputPasswordField";

function Login() {
    
  const navigate = useNavigate();

  const handleSubmit =  (e) => {
            e.preventDefault();
            console.log("Submit clicked")
    };
    
    return (
      <Container
        sx={{
          height: "700px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 0",
          }}
        >
          <Typography
            sx={{
              typography: { xs: "h3", sm: "h1" },
              fontWeight: { xs: "bold", sm: "bolder" },
            }}
          >
            Login
          </Typography>
        </Box>
  
        <Paper
          sx={{
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          elevation={5}
        >
          <Container
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <InputTextField textFieldLabelContent={"Username/email"} />
              <InputPasswordField passwordFieldLabelContent={"Password"} />
              <Button
                type={"submit"}
                variant={"contained"}
                sx={{ alignSelf: "flex-start", marginTop: "8px" }}             
              >
                Login
              </Button>
            </form>
          </Container>
          <Container
            sx={{
              height: "100%",
              display: { xs: "none", lg: "flex" },
              justifyContent: "center",
              alignItems: "center",
              background: "linear-gradient(135deg, #FFA500 0%, #FF6347 100%)",
              color: "#fff",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "25px",
              }}
            >
              <Typography
                sx={{ typography: "h3", textAlign: "center", fontWeight: "bold" }}
              >
                Welcome to Login
              </Typography>
              <Typography sx={{ fontSize: "23px", textAlign: "center" }}>
                {`Don't have an account ?`}
              </Typography>
              <Button
                variant="outlined"
                onClick={()=>{navigate('/signup')}}
                sx={{ border: "3px solid white", color: "white" }}
              >
                Register
              </Button>
            </Box>
          </Container>
        </Paper>
      </Container>
    );

  }


export default Login;
