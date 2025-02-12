import { Card, CardContent, CardMedia, Typography } from '@mui/material'


const ServiceCard = () => {
  return (
    <Card>
        <CardMedia 
          height={300}
          image="/images/feature-1.png"
          component="img"
          alt="img"
         />
        <CardContent>
            <Typography>Lorem ipsum dolor sit.</Typography>
        </CardContent>
    </Card>
  )
}

export default ServiceCard