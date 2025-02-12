import { Button } from '@mui/material'

const Custombutton = ({navigationItem,handleFunction,style,theme}) => {

  return (
        <Button onClick={handleFunction} sx={theme} variant={style}>{navigationItem}</Button>
  )
}

export default Custombutton