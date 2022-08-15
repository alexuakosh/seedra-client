import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  ScrollToTopBtn: {
    width: "fit-content",
    height: "fit-content",
    diplay: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    cursor: "pointer",
    "&:hover svg": {
      backgroundColor: "rgb(53, 151, 64)",
      stroke: "rgba(255, 255, 255)",
    },
  },
  BtnSvgIcon: {
    stroke: "rgb(53, 151, 64)",
    strokeWidth: "1.5",
    width: "30px",
    height: "30px",
    transition: "backgroundColor 0.2s, stroke 0.2s",
    borderRadius: "50%",

    "@media (min-width: 420px)": {
      width: "50px",
      height: "50px",
    },
    "@media (min-width: 900px)": {
      width: "60px",
      height: "60px",
    },
    "@media (min-width: 1200px)": {
      width: "70px",
      height: "70px",
    },
    "@media (min-width: 1536px)": {
      width: "100px",
      height: "100px",
    },
  },
});

export default useStyles;
