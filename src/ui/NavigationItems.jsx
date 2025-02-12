import { orange } from "@mui/material/colors";
import { NavLink, useNavigate } from "react-router-dom";
import Custombutton from "./Custombutton";
import { Typography } from "@mui/material";


const NavigationItems = ({ navigationItem,route, display }) => {
  const navigate = useNavigate();

  const handleClick = (route)=>{
    navigate(route);
  }
  return (
    <NavLink to={route}
    style={{
      textDecoration: "none",
      color: "black",
    }}
      >

        {
          display.type === "text" ?
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
            
            :
              <Custombutton navigationItem={navigationItem} style={display.style} 

              theme={
                display.style === "contained" ?
                 {
                   backgroundColor: `${orange[500]}`,
                   color: "white",
                  } :
                  {
                    backgroundColor: "white",
                    color: `${orange[500]}`,
                    borderColor: `${orange[500]}`
                 }
              }
              
              handleFunction={handleClick} />
        }
    </NavLink>
  );
};

export default NavigationItems;
