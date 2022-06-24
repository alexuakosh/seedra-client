import { makeStyles } from "@mui/styles";

export const useModalStyles = makeStyles((theme) => ({
  productCard: {
    boxShadow: "none",
    margin: "12px",
  },
    productCardOldPrice: {
      fontSize:"16px",
      textDecoration:"line-through",
      color: theme.palette.text.secondary
    },
  productCardPrice: {
    fontWeight: "bold",
    fontSize:"28px",
  },
  productAmountInput: {
    alignSelf:"center",
    width:"48px",
    height: "32px",
    borderRadius: "6px",
    fontSize: "16px",
  },
  amountInputGroup: {
    height: "44px",
    border: "1px solid rgba(239, 239, 239, 1)",
    borderRadius: "11px",
  },
  productCardButtonBasket: {
    textTransform: "capitalize",
    marginLeft:"10px",
    alignSelf:"center",
    minWidth:"121px"
  },
  productCardActionBtns: {
    display:"flex",
    width:"100%",
    justifyContent:"space-between",
    marginTop:"31px",
    alignItems:"center",
    minHeight:"67px"
  },
  productCardButtons: {
    display:"flex",
  }
}));
