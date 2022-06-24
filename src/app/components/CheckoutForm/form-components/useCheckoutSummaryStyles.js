import { makeStyles } from "@mui/styles";

const useCheckoutSummaryStyles = makeStyles({
  container: {
    border: "solid 1px #359740",
    borderRadius: "5px",
    width: "90%",
  },

  box: {
    display: "flex",
    justifyContent: "space-between",
  },

  fieldName: {
    color: "#359740",
  },

  sum : {
    fontWeight: "bold",
    fontSize: "18px",
    margin: "10px"
  }
});

export default useCheckoutSummaryStyles;
