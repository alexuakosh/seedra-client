import { makeStyles } from "@mui/styles";

export const useMainStyles = makeStyles((theme) => ({
  productCard: {
    borderRadius: "8px",
    position: "relative",
    border: `1px solid ${theme.palette.grey["300"]}`,
    boxShadow: "none",
    minHeight: "512px",
    maxWidth: "350px"
  },
  productCardHeader: {
    position: "absolute",
    right: "0",
  },
  productCardButton: {
    border: `1px solid ${theme.palette.grey["300"]}`,
  },
  productCardMedia: {
    width: "calc(100% - 56px)",
    margin: "28px",
    borderRadius: "12px",
  },
  productCardRating: {
    margin: "0px 28px",
  },
  productCardContent: {
    margin: "10px 28px",
    padding: "0",
  },
  productCardName: {
    margin: "0px",
    height: "50px",
    overflow: "hidden",
    cursor: "pointer",
  },
  productCardPrice: {
    margin: "0px",
    lineHeight: "54px",
    fontWeight: "bold",
  },
  productCardButtonBasket: {
    position: "absolute",
    bottom: "28px",
    right: "28px",
    borderRadius: "8px",
    width: "48px",
    height: "48px",
    border: `1px solid ${theme.palette.grey["300"]}`,
    padding: "0px important"
  },
}));
