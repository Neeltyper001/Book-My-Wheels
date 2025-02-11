import { Box, Typography } from "@mui/material";

const Feature = () => {
  return (
    <section>
        <Box sx={{display:"flex", position: "relative"}}>  
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center" ,flexDirection: "column", width: {
            xs: "100%",
            md: "70%",
          }, height: "500px", gap: "10px",
            padding: "0px 30px",
            boxSizing: "border-box",
          }}>

              <Typography sx={{fontSize: {xs:"34px", sm:"45px",md: "65px"}, fontWeight: "bolder"}} >Who We Are ?</Typography>
              <Typography variant="p" sx={{width: {
                xs: "100%",
                sm: "70%",
                lg: "48%",                
              },
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
              fontSize: "23px" , lineHeight: {
                xs: "2rem",
                lg: "3rem"
              }}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas asperiores atque facere id delectus quod dolorem quidem fuga, cupiditate consequatur autem animi accusantium optio, esse similique natus incidunt! Nulla, molestias.</Typography>
          </Box>

              <Box sx={{height: "100%", width: "50%" , position: "absolute" , right: "0%" , top:"5%", opacity: "0.5"}}>
                <img style={{height: "100%", width: "100%" , objectFit: "cover"}} src="/images/feature-1.png" alt="feature-1" />
              </Box>
              <Box sx={{height: "100%", width: "50%" , position: "absolute" , left: "0%" , top:"5%", opacity: "0.5"}}>
                <img style={{height: "100%", width: "100%" , objectFit: "cover"}} src="/images/feature-2.png" alt="feature-1" />
              </Box>


        </Box>
    </section>
  );
};

export default Feature;
