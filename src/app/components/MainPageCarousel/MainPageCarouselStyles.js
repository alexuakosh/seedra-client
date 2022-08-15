import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  CarouselSection: {
    zIndex: -1,
  },

  CarouselContainer: {
    overflow: "hidden",
    paddingBottom: "20px",
    margin: "28px auto 0 auto",
    position: "relative",
    borderRadius: "20px",
    backgroundColor: "#EAF1EB",
    maxWidth: 1100,
  },

  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    letterSpacing: "-0.05em",
    color: "#1F2533",
  },

  addToCartButton: {
    background: "#359740",
    "&:hover": {
      background: "#2BB159",
    },
  },

  discoverButton: {
    background: "#FFFFFF",
    "&:hover": {
      background: "rgba(53, 151, 64, 0.08);",
    },
  },
});

export default useStyles;
