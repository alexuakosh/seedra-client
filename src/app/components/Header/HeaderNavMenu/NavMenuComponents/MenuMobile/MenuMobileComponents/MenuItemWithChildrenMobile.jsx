import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  Divider,
  MenuItem,
  Accordion,
  AccordionDetails,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary from "@mui/material/AccordionSummary";

export default function MenuItemWithChildrenMobile({ arrOfOptions }) {
  // ==========================
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={
        <ArrowForwardIosSharpIcon
          className="iconArrow"
          sx={{ fontSize: "0.9rem", color: "#70737C" }}
        />
      }
      {...props}
    />
  ))(({ theme }) => ({
    flexDirection: "row-reverse",
    ".option-with-options": {
      color: "#70737C",
    },
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    ".Mui-expanded": {
      ".iconArrow": {
        color: "#359740",
      },
      ".option-with-options": {
        color: "#359740",
      },
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(0),
    },
  }));
  // =========================
  // ============================= Render ============================
  return (
    <Box>
      {arrOfOptions.map((item, index) => (
        <div key={index}>
          <Accordion sx={{ boxShadow: "none", my: "0px", color: "#1F2533" }}>
            <AccordionSummary
              sx={{ fontSize: "2em" }}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <MenuItem
                disableRipple
                sx={{
                  fontWeight: "700",
                  "&:hover": { backgroundColor: "white" },
                }}
              >
                <Link
                  underline="none"
                  sx={{ pl: "16px", color: "#1F2533", fontWeight: "400" }}
                >
                  {" "}
                  {item.parentId.charAt(0).toUpperCase() +
                    item.parentId.slice(1)}
                </Link>
              </MenuItem>
            </AccordionSummary>
            {item.name.map((subItem, i) => (
              <Box key={`${subItem}${i}`} sx={{ pl: "80px" }}>
                <AccordionDetails>
                  <Link
                    component={RouterLink}
                    to={`products?categories=${subItem}`}
                    key={subItem}
                    underline="none"
                    sx={{
                      color: "#70737C",
                      fontWeight: "300",
                      fontFamily: "Lexend",
                    }}
                  >
                    {subItem.charAt(0).toUpperCase() + subItem.slice(1)}
                  </Link>
                </AccordionDetails>
              </Box>
            ))}
          </Accordion>
          <Divider />
        </div>
      ))}
    </Box>
  );
}
// ==================================================================
MenuItemWithChildrenMobile.defaultProps = {
  arrOfOptions: [
    { parentId: "option1", name: ["subOption1-1", "subOption1-2"] },
    { parentId: "option2", name: ["subOption2-1", "subOption2-2"] },
    { parentId: "option3", name: ["subOption3-1", "subOption3-2"] },
  ],
};
MenuItemWithChildrenMobile.propTypes = {
  arrOfOptions: PropTypes.arrayOf(
    PropTypes.shape({
      parentId: PropTypes.string,
      name: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};
