import { Link as RouterLink } from 'react-router-dom';
import PropTypes from "prop-types";
import { MenuItem, Link } from "@mui/material";

export default function MenuItemNoChildrenDesktop({ arrOfOptions }) {
 
  return (
    <>
      {arrOfOptions.map((e, index) => (
        <div key={index}>
          <MenuItem
          disableRipple
            sx={{ pt: 0 ,'&:hover': {backgroundColor: 'white'}}}
          >
            <Link
            component={RouterLink}
            to={`${e[0]}`}
              underline="none"
              sx={{
                color: "#70737C",
                fontWeight: "500",
                display: "flex",
                fontSize: "14px",
              }}
            >
              {e[1].toUpperCase()}
            </Link>
          </MenuItem>
        </div>
      ))}
    </>
  );
}


MenuItemNoChildrenDesktop.defaultProps ={
  arrOfOptions: [['option1-1', 'option1-2', 'option2-1', 'option2-2']],
};
MenuItemNoChildrenDesktop.propTypes = {
  arrOfOptions: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
