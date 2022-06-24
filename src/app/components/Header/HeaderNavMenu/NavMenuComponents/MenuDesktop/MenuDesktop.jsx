// Libraries Components:
import PropTypes from "prop-types";
// MUI Components:
import { Box, MenuList } from "@mui/material";
// React Components:
import MenuItemNoChildrenDesktop from "./MenuDesctopComponents/MenuItemNoChildrenDesktop.jsx";
import MenuItemWithChildrenDesctop from "./MenuDesctopComponents/MenuItemWithChildrenDesktop.jsx";
// Styles:
import styles from './MenuDesctopStyles.jsx';

// =========================================================
export default function MenuDesktop ({ pressetsNoChildren, pressetsWithChildren }) {
    return(<Box sx={styles.NavMenuContainer}>
        <MenuList sx={styles.MenuLeftBlock}>
          <Box sx={styles.MenuRightBlock}>
            <MenuItemNoChildrenDesktop arrOfOptions={pressetsNoChildren} />
          </Box>
          <MenuItemWithChildrenDesctop arrOfOptions={pressetsWithChildren} />
        </MenuList>
      </Box>)
};
// =========================================================
MenuDesktop.propTypes = {
  pressetsNoChildren: PropTypes.array,
  pressetsWithChildren: PropTypes.array,
}