import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Box } from "@mui/material";

const styles = {
  CartBtn: {
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    marginRight: '15px',
    '@media (max-width: 900px)': {
      marginRight: '50px',
    },
    '@media (max-width: 500px)': {
      marginRight: '35px',
    },
  },
  Icon: {
    color: "#359740",
  },
  Badge: {
    
  },
};

export default function CartBtn ({ quantity, linkPath, ...restProps }) {
  
  
  return (
    <Box sx={styles.CartBtn} {...restProps}>
      <RouterLink to={linkPath} underline="none">
        {
          <Badge showZero badgeContent={quantity} color='primary' >
            <ShoppingCartOutlinedIcon sx={styles.Icon} />
          </Badge>
        }
      </RouterLink>
    </Box>
  );
};



CartBtn.defaultProps = {
  quantity: 0,
  linkPath: '/cart',
};

CartBtn.propTypes = {
  quantity: PropTypes.number,
  linkPath: PropTypes.string,
};