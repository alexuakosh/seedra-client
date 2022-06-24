import PropTypes from "prop-types"; 
import { Link as RouterLink } from 'react-router-dom';
import { Divider, MenuItem, Link } from "@mui/material";
import Box from "@mui/material/Box";

export default function MenuItemNoChildrenMobile({ arrOfOptions }) {


// =========================== Render ===============================
  return (
    <Box>
      {arrOfOptions.map((item, index) => (
        <div key={index}>
         
          <MenuItem disableRipple sx={{'&:hover': {backgroundColor: 'white' }}}>
            <Link 
            component={RouterLink}
            to={`/${item[0]}`}
              underline="none"
              sx={{ pl: "16px", fontWeight: "400", color: '#70737C' }}
            >
              {`${item[1].charAt(0).toUpperCase()}${item[1].slice(1)}`
               }
            </Link>
          </MenuItem>
          <Divider />
        </div>
      ))}
    </Box>
  );
}

// =========================================================
MenuItemNoChildrenMobile.propTypes = {
  arrOfOptions: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
