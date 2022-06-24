import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Badge, Box } from "@mui/material";
// ===================================================================================

// Styles:
const styles = {
  FavoriteBtn: {
    Container: {
      display: "flex",
      alignItems: "center",
      width: "50px",
    },
    Badge: {
     
    },
    Icon: {
      color: "#359740",
    },
  },
};

// -----------------------------------------------------------------------------------
// Component:
export default function FavoriteBtn({ quantity, linkPath, ...restProps }) {
  return (
    <Box sx={styles.FavoriteBtn.Container} {...restProps}>
      <RouterLink to={linkPath} >
        <Badge showZero badgeContent={quantity} color='primary'>
          <FavoriteBorderOutlinedIcon sx={styles.FavoriteBtn.Icon} />
        </Badge>
      </RouterLink>
    </Box>
  );
}
// ===================================================================================

FavoriteBtn.defaultProps = {
  quantity: 0,
  linkPath: "/wishlist",
};

FavoriteBtn.propTypes = {
  quantity: PropTypes.number,
  linkPath: PropTypes.string,
};
