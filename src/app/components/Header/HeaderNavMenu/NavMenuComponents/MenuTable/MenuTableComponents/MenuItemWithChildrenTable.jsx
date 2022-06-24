// Libraries Components:
import PropTypes from "prop-types";
import { useState } from "react";
// MUI Components:
import { Link as RouterLink } from "react-router-dom";
import { Box, Paper, MenuItem, Link, Button, Menu } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// ========================================================================

export default function MenuItemWithChildrenTable({ arrOfOptions }) {
  const [dropDownOpen, setDropDownOpen] = useState(null);
  //
  // Open option function:
  const showDropdown = (e) => {
    const { id } = e.target;
    return setDropDownOpen((prevState) => (id !== prevState && id) || null);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickAway = () => setDropDownOpen(null);
  // =================================== Render =======================
  return (
    <Box>
      <Button
        disableRipple
        id="basic-button"
        sx={{
          color: !anchorEl ? "rgba(0, 0, 0, 0.6)" : "#359740",
          paddingBottom: "13px",
          textTransforn: "uppercase",
          "&:hover": { backgroundColor: "white" },
        }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Categories
        {!anchorEl ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </Button>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Menu
          id="basic-menu"
          sx={{ left: "6px" }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {arrOfOptions.map((e, index) => (
            <Box
              key={`${e.parentId}${index}`}
              sx={{ boxShadow: "none", mr: "0" }}
            >
              <Box
                id={e.parentId}
                sx={{
                  boxShadow: "none",
                  my: "0px",
                  position: "relative",
                  scrollbarWidth: "none",
                }}
              >
                <MenuItem
                  disableRipple
                  fontWeight="700"
                  sx={{
                    fontSize: "14px",
                    pt: 0,
                    position: "relative",
                    display: "flex",
                    justifyContent: "space-between",
                    "&:hover": { backgroundColor: "white" },
                  }}
                >
                  <Link
                   onClick={(event) => {
                    const id = event.target.textContent.toLowerCase();
                    return setDropDownOpen(
                      (prevState) => (id !== prevState && id) || null
                    );
                  }}
                    underline="none"
                    sx={{
                      color:
                        dropDownOpen !== e.parentId ? "#70737C" : "#359740",
                      fontWeight: "500",
                    }}
                  >
                    {e.parentId.toUpperCase()}
                  </Link>
                  {dropDownOpen !== e.parentId ? (
                    <ExpandMoreIcon id={e.parentId} onClick={showDropdown} />
                  ) : (
                    <ExpandLessIcon
                      sx={{ color: "#359740" }}
                      id={e.parentId}
                      onClick={showDropdown}
                    />
                  )}
                </MenuItem>

                <Box sx={{ position: "absolute", zIndex: 3 }}>
                  {e.name.map((item, i) => (
                    <Box
                      key={`${item}/${i}`}
                      sx={{ bordersRadius: "15px", width: "140px" }}
                    >
                      {dropDownOpen === e.parentId && (
                        <Box sx={{ position: "relative" }}>
                          <Paper
                            sx={{
                              border: "none",
                              borderRadius: 0,
                              boxShadow: "none",
                              "&:hover": { backgroundColor: "white" },
                            }}
                          >
                            <MenuItem
                              disableRipple
                              sx={{
                                borderRadius: "4px",
                                position: "relative",
                                color: "#70737C",
                                fontWeight: "300",
                                fontFamily: "Lexend",
                                fontSize: "14px",
                                paddingRight: "8px",
                                display: "flex",
                                justifyContent: "flex-end",
                                "&:hover": { backgroundColor: "white" },
                              }}
                            >
                              <Link
                                component={RouterLink}
                                to={`products?categories=${item}`}
                                underline="none"
                                sx={{
                                  color: "#70737C",
                                  fontWeight: "300",
                                  fontFamily: "Lexend",
                                }}
                              >
                                {`${item.charAt(0).toUpperCase()}${item.slice(
                                  1
                                )}`}
                              </Link>
                            </MenuItem>
                          </Paper>
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Menu>
      </ClickAwayListener>
    </Box>
  );
}

// ================================================================
MenuItemWithChildrenTable.defaultProps = {
  arrOfOptions: [
    { parentId: "option1", name: ["subOption1-1", "subOption1-2"] },
    { parentId: "option2", name: ["subOption2-1", "subOption2-2"] },
    { parentId: "option3", name: ["subOption3-1", "subOption3-2"] },
  ],
};

MenuItemWithChildrenTable.propTypes = {
  arrOfOptions: PropTypes.arrayOf(
    PropTypes.shape({
      parentId: PropTypes.string,
      name: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};
