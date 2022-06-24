// import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Box } from "@mui/material";

const styles = {
  CartBtn: {
    display: 'flex',
    alignItems: 'center',
    width: '50px',
  },
  Icon: {
    color: "#359740",
    pl: "0",
  },
  Badge: {
    color: "primary",
    mr: "0px",
  },
};
// ==================================================================
export default function CartBtn ({ productsQuantityInUserCart, linkPath, ...restProps }) {
  
  // ----------------------------------------------------------------
  return (
    <Box sx={styles.CartBtn} {...restProps}>
      <RouterLink to={linkPath} underline="none">
        {
          <Badge badgeContent={0}  color="primary">
            <ShoppingCartOutlinedIcon sx={styles.Icon} />
          </Badge>
        }
      </RouterLink>
    </Box>
  );
};

// ===================================================================

CartBtn.defaultProps = {
  productsQuantityInUserCart: 0,
  linkPath: '/cart',
};

CartBtn.propTypes = {
  productsQuantityInUserCart: PropTypes.number,
  linkPath: PropTypes.string,
};