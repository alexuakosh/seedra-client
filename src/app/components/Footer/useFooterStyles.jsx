import { makeStyles } from "@mui/styles";

export const useFooterStyles = makeStyles(() => ({
  Wrapper: {
    color: "#70737C",
    fontSize: "14px",
    maxWidth: "100vw",
  },
  BoxTop: {
    justifyContent: "center",
    padding: "36px 0px",
    color: "#70737C",
  },

  BoxMain: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  BoxLink: {
    display: "flex",
    alignItems: "center",
    flexGrow: "1",
    justifyContent: "space-evenly",
  },

  Link: {
    padding: "12px 1px 12px 10px",
    textDecoration: "none",
    color: "inherit",
    fontSize: "inherit",
    "&:hover": {
      padding: "12px 0px 12px 9px",
      color: "#359740;",
      fontWeight: "500",
    },
    "&:active": {
      color: "#359740;",
      fontWeight: "500",
    },
  },

  DividerVertical: {
    height: "25px",
    backgroundColor: "#4FA083",
  },

  BoxBottom: {
    display: "flex",
    padding: "22px 0px",
    justifyContent: "space-between",
    alignItems: "center",
  },

  FooterText: {
    component: "span",
    fontSize: "inherit",
  },
}));
