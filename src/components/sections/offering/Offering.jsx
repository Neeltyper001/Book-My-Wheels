import { Button, Container, Typography } from "@mui/material"
import Caraousel from "../../caraousel/Caraousel"
import { orange } from "@mui/material/colors"


const Offering = () => {
  return (
    <Container sx={{
        width: "90%",
        backgroundColor: "#f7f6f8",
        height: "700px", 
        marginTop: "40px",
        borderRadius: "2rem",
        padding: "10px 20px", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 5         
    }}>
        <Typography sx={{fontSize: {xs:"40px" ,sm:"65px"}, fontWeight: "bolder", textAlign: "center"}}>
            Our Offerings
        </Typography>
        <Caraousel />
        <Button variant="contained" sx={{backgroundColor: orange[500] , width: "200px", alignSelf: "center"}}>Browse All Cars</Button>
    </Container>
  )
}

export default Offering