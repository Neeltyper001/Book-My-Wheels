import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import NavigationItems from "./NavigationItems";

function Hamburger({navigationTabsArr}) {  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const anchorRef = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton sx={{ display: {lg: 'none'}}}
        id="demo-positioned-button"
        ref={anchorRef}
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{fontSize: '50px'}}/>
      </IconButton>
      <Menu 
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}

        sx={{            
            display: {lg: 'none'}
        }}
      >
        {
            navigationTabsArr.map((eachItem) => {

                return (
                    <MenuItem key={eachItem.id}>
                      <NavigationItems                        
                        navigationItem={eachItem.item}
                        route={eachItem.route}
                    />
                    </MenuItem>
                )
            })
        }
      </Menu>
    </>
  );
}

export default Hamburger;
