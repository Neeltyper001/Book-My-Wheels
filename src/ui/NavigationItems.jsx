import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavigationItems = ({ navigationItem,route }) => {
  return (
    <NavLink to={route}
    style={{
      textDecoration: "none",
      color: "black",
    }}
      >
      <Typography
        variant={"p"}
        sx={{ 
          fontSize: "26px",
          textAlign: "center" ,
          fontWeight:  "bold" ,          
          fontFamily: "monospace",
          "&:hover": {
            borderBottom: "5px solid orange",
          },

         }}
        className={navigationItem}
      >
        {navigationItem}
      </Typography>
    </NavLink>
  );
};

export default NavigationItems;
