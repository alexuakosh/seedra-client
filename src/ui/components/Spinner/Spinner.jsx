import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import PropTypes from 'prop-types';

export default function Spinner({ size, thickness }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress size={size} thickness={thickness} sx={{ color: "green" }} />
    </Box>
  );
}

Spinner.defaultProps = {
  size: 20,
  thickness: 2,
}

Spinner.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  thickness: PropTypes.number,
}