import { Box, Grid2, Typography } from '@mui/material'
import ServiceCard from '../../Card/ServiceCard'


const Services = () => {
  return (
    <section style={{position:"relative",display: "flex",marginTop: "3rem", justifyContent: "center", alignItems: "center",boxSizing: "border-box", padding: "10px 20px" , height:"700px"}}>
            <Typography sx={{fontSize: "55px",fontWeight: "bolder", position: "absolute", top: "0%", left: "20%",color: "white"}}>Our Services</Typography>            
        <Grid2 container sx={{width: "80%"}} spacing={1}>
            <Grid2 size={6} container sx={{height:"100%"}}>
                <Grid2 size={12} >
                    <ServiceCard />
                </Grid2>
                <Grid2 size={12} >
                    <ServiceCard />
                </Grid2>
            </Grid2>
            <Grid2 size={6} container sx={{height:"100%"}}>
                <Grid2 size={12} >
                    <ServiceCard />
                </Grid2>
                <Grid2 size={12} >
                    <ServiceCard />
                </Grid2>
            </Grid2>
        </Grid2>
    </section>
  )
}

export default Services