import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function Auth () {


    return(
        <Box sx={{ xs: {width: 'fit-content', display: "flex", flexDirection: 'row'}, 
                   md: {width: 'fit-content', display: "flex", flexDirection: 'column'},
                   margin: '0 0 0 20px', 
                   '@media (max-width: 900px)': {
                        margin: '10px'
                    }, }}>

            <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button sx={{ height: 20, 
                              width: 60, 
                              fontSize: 12, 
                              padding: 0, 
                              marginRight: '10px', 
                              '@media (max-width: 900px)': {
                                marginRight: '20px',
                              }, }} 
                        color="primary" 
                        variant="text">
                    Log In
                </Button>
            </Link>

            <Link to="/sign-up" style={{ textDecoration: 'none' }}>
                <Button sx={{ height: 20, 
                              width: 60, 
                              fontSize: 12, 
                              padding: 0, 
                              '@media (max-width: 900px)': {
                                marginLeft: '20px',
                              }, }} 
                        color="primary" 
                        variant="text">
                    Sign up
                </Button>
            </Link> 

        </Box>
        
    )
};
