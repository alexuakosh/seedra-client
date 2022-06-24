import { Link as RouterLink } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from "prop-types";
import { MenuItem, Link } from "@mui/material";

export default function MenuItemNoChildrenTable({ arrOfOptions }) {
  useEffect(() => {
    console.log('MenuItemNoChildrenDesktop:', `link for ${arrOfOptions[0][1]}: `, arrOfOptions[0][0],`;link for ${arrOfOptions[1][1]}: `, arrOfOptions[1][0])
  }, [arrOfOptions])
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

// ==========================================================
MenuItemNoChildrenTable.defaultProps ={
  arrOfOptions: [['option1-1', 'option1-2', 'option2-1', 'option2-2']],
};
MenuItemNoChildrenTable.propTypes = {
  arrOfOptions: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
