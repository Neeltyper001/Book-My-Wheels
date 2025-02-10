import { Box } from '@mui/material';
import Hamburger from '../../ui/Hamburger';
import NavigationItems from '../../ui/NavigationItems';

const Navbar = ({navigationItems}) => {
  return (
    <nav style={{width: "45%"}}>
            <Box sx={
                {
                    display: {
                        xs: "none",
                        lg: "flex"
                    },
                    padding: "10px 25px",
                    boxSizing: "border-box",
                    width: "100%",
                    height: "100%",
                    justifyContent: "space-between",
                    alignItems: "center"
                }
            }>
                {navigationItems.map((eachItem) => {
                    return (
                    <NavigationItems
                        key={eachItem.id}
                        navigationItem={eachItem.item}
                        route={eachItem.route}
                    />
                    );
                })}
            </Box>
            <Box sx={{justifySelf: "flex-end", alignSelf: "center"}}>
                <Hamburger  navigationTabsArr={navigationItems}/>
            </Box>
        </nav>
  )
}

export default Navbar