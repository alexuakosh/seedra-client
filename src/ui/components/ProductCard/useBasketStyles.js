import { makeStyles } from "@mui/styles";

export const useBasketStyles = makeStyles((theme) => ({
  productCardContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "700px",
  },
  productCard: {
    boxShadow: "none",
  },
  productCardMedia: {
    borderRadius: "12px",
    width: "64px",
    height: "63px",
  },
  productCardNameContainer: {
    width: "60%",
  },
  productCardName: {
    fontSize: "14px",
    lineHeight: "24,95px",
  },
  productCardPrice: {
    fontWeight: "bold",
  },
  productCardButtonGroup: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    border: "1px solid",
    borderColor: theme.palette.grey["300"],
    borderRadius: "12px",
  },
  productCardButton: {
    width: "10.67px",
    height: "30px",
  },
  productCardAmount: {
    width: "40px",
    height: "32px",
  },
}));
