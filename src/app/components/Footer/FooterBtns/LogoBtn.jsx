import { Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import Icon from "../../../../ui/components/Icon/Icon.jsx";


const styles = {
  Icon: {
    width: "98px",
    viewPort: "30px",
    fontSize: "20,65px",
  },
  IconBox: {},
};



export default function LogoBtn({ linkPath, ...restProps }) {
  useEffect(() => {

  },[Icon.icons.Logo])
  return (
    <Box sx={styles.IconBox} {...restProps}>
      <RouterLink to={linkPath}>
        <Icon viewBox={"37 -1 24 24"} sx={styles.Icon} icon={Icon.icons.Logo} />
      </RouterLink>
    </Box>
  );
}


LogoBtn.defaultProps = {
  linkPath: "/",
};

LogoBtn.propTypes = {
  linkPath: PropTypes.string,
};
