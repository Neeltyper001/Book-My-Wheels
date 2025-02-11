import { Card, CardContent, CardMedia, Typography } from '@mui/material'

const CarCard = ({carName, carCost,image, sitter }) => {
  return (
    <Card>
      <CardMedia sx={{maxWidth: "400px"}}
                component="img"
                alt="car"
                height="200"
                image={image}
      />
      <CardContent>
        <Typography sx={{fontSize: "30px"}}>{carName}</Typography>
        <Typography sx={{fontSize: "20px"}}>{carCost}</Typography>
        <Typography sx={{fontSize: "16px"}}>{sitter}</Typography>
      </CardContent>
    </Card>
  )
}

export default CarCard