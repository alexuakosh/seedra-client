import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    position: "absolute",
    zIndex: "100",
    right: "0",
    top: "150%",
    padding: "30px",
    width: "384px",
    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.2)",
    border: "1px solid #efefef",
    "@media (max-width: 900px)": {
      padding: "10px",
      width: "334px",
      right: "-40px",
    },
  },
  searchOption: {
    height: 90,
    zIndex: "200",
    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
    width: "300px",
    "&:hover": {
      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.3)",
    },
  },

  searchImage: {
    height: 70,
    width: 70,
    [theme.breakpoints.down("xs")]: {
      width: 40,
      height: 40,
    },
  },
  searchName: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "9px",
      lineHeight: "9px",
    },
  },
  searchPrice: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      lineHeight: "12px",
    },
  },
  link: {
    cursor: "pointer",
  },
}));

export default useStyles;
