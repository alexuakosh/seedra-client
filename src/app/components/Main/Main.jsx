import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import styles from "./MainStyles";


export default function Main({ children }) {
  return (
    <Box component={"main"} sx={styles}>
      <Box>{children}</Box>
    </Box>
  );
}


Main.propTypes = {
  children: PropTypes.element,
};