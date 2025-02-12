import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, IconButton, Input, InputLabel } from '@mui/material'
import { kebabCaseFormatter } from '../utils/kebabCaseFormatter';
import { toLowerCaseFormatter } from '../utils/toLowerCaseFormatter';
import React from 'react'


function InputPasswordField({passwordFieldLabelContent}) {
    const [showPassword, setShowPassword] = React.useState(false);        
    const handleClickShowPassword = () => setShowPassword((show) => !show);

  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };

    const newRef = kebabCaseFormatter(toLowerCaseFormatter(passwordFieldLabelContent))

  return (
    <FormControl>
    <InputLabel htmlFor={`${newRef}`}>{passwordFieldLabelContent}</InputLabel>
    <Input
      id={`${newRef}`}
      type={showPassword ? "text" : "password"}
      label="Password"
      endAdornment={
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          onMouseUp={handleMouseUpPassword}
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      }
    />
  </FormControl>
  )
}

export default InputPasswordField