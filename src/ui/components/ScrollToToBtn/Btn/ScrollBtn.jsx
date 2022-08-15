import PropTypes from "prop-types";
import { Box } from "@mui/material";
import useStyles from "./ScrollBtnStyles";



export default function ScrollBtn({ handler, ...props }) {
    const classes = useStyles();

  return (
    <Box className={classes.ScrollToTopBtn} onClick={handler} {...props}>
      <svg
      className={classes.BtnSvgIcon}
      fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 16.5L12 13L15.5 16.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 10.5L12 7L15.5 10.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}


ScrollBtn.propTypes = {
  handler: PropTypes.func
}