import PropTypes from "prop-types";

import { Box, MenuList } from "@mui/material";

import MenuItemNoChildrenDesktop from "./MenuDesctopComponents/MenuItemNoChildrenDesktop.jsx";
import MenuItemWithChildrenDesctop from "./MenuDesctopComponents/MenuItemWithChildrenDesktop.jsx";

import styles from './MenuDesctopStyles.jsx';


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

MenuDesktop.propTypes = {
  pressetsNoChildren: PropTypes.array,
  pressetsWithChildren: PropTypes.array,
}