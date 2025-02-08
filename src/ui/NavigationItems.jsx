import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavigationItems = ({ navigationItem,route }) => {
  return (
    <NavLink to={route}>
      <Typography
        variant={"p"}
        sx={{ fontSize: "26px" }}
        className={navigationItem}
      >
        {navigationItem}
      </Typography>
    </NavLink>
  );
};

export default NavigationItems;
