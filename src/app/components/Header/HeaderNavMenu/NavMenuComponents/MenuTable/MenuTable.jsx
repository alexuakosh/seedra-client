import PropTypes from "prop-types";

import { Box, MenuList } from "@mui/material";
import MenuItemNoChildrenTable from "./MenuTableComponents/MenuItemNoChildrenTable.jsx";
import MenuItemWithChildrenTable from "./MenuTableComponents/MenuItemWithChildrenTable.jsx";

import styles from './MenuTableStyles.jsx';


export default function MenuTable ({ pressetsNoChildren, pressetsWithChildren }) {
    return(<Box sx={styles.NavMenuContainer}>
        <MenuList sx={styles.MenuLeftBlock}>
          <Box sx={styles.MenuRightBlock}>
            <MenuItemNoChildrenTable arrOfOptions={pressetsNoChildren} />
          </Box>
          <MenuItemWithChildrenTable arrOfOptions={pressetsWithChildren} />
        </MenuList>
      </Box>)
};

MenuTable.propTypes = {
  pressetsNoChildren: PropTypes.array,
  pressetsWithChildren: PropTypes.array,
}