import { makeStyles } from "@mui/styles";

export const useFiltersStyles = makeStyles(() => ({
  productCard: {
    borderRadius: "8px",
    position: "relative",
    border: "1px solid #EFEFEF",
    boxShadow: "none",
    minHeight: "400px",
    maxWidth: "400px",
    margin: "0 auto",
  },
  productCardHeader: {
    position: "absolute",
    right: "0",
  },
  productCardButton: {
    border: "1px solid #EFEFEF",
  },
  productCardMedia: {
    margin: "28px",
    width: "calc(100% - 56px)",
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
  },
  productCardPrice: {
    margin: "0px",
    lineHeight: "54px",
    fontWeight: "bold",
  },
  productCardButtonBasket: {
    position: "absolute !important",
    bottom: "28px",
    right: "15px",
    borderRadius: "8px",
    width: "48px",
    height: "48px",
    border: "1px solid #EFEFEF",
    padding: "0px important",
  },
  productCardButtons: {
    display: "flex",
    flexDirection: "row",
  },
}));
