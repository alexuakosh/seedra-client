import { makeStyles } from "@mui/styles";

export const useMainStyles = makeStyles((theme) => ({
  productCard: {
    borderRadius: "8px",
    position: "relative",
    border: `1px solid ${theme.palette.grey["300"]}`,
    boxShadow: "none",
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
    margin: "10px 28px 0px",
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

  notAvailableCardPrice: {
    margin: "0px",
    lineHeight: "12px",
    fontWeight: "bold",
    color: "#70737C;"
  },

  notAvailableProduct: {
    margin: "0px",
    fontWeight: "bold",
    fontSize: "14px",
  },
  productCardButtonBasket: {
    position: "relative",
    borderRadius: "8px",
    width: "48px",
    height: "48px",
    border: `1px solid ${theme.palette.grey["300"]}`,
    padding: "0px important"
  },
}));
