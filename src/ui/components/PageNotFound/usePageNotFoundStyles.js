import { makeStyles } from "@mui/styles";

export const usePageNotFoundStyles = makeStyles(() => ({
  container404: {
    display: "flex",
    padding: "30px",
    borderRadius: "20px",
    flexDirection: "row",
    backgroundColor: "#eaf1eb"
  },

  text404: {
    fontSize: "100px",
    lineHeight: "0.8",
    paddingTop: "10px",
  }, 

  textPageNotFound: {
    fontSize: "30px",
    paddingTop: "10px",
  }
}));
