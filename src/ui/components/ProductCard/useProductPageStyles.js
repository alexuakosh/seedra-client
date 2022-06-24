import { makeStyles } from "@mui/styles";

export const useProductPageStyles = makeStyles((theme) => ({
  productCard: {
    boxShadow: "none"
  },
  productCardHeader: {

  },
  productActionsBox: {
    display: "flex",
    flexDirection:"column",
    justifyContent: "space-between",
    width: "100%"
  },
  productCardMediaWrapper: {
    maxWidth: "445px",
    maxHeight:"auto",
  },
  productCardMediaSmall: {
    borderRadius: "12px",
  },
  productCardMedia: {
    borderRadius: "12px",
  },
  productCardContent: {
  },
  productCardName: {
    fontSize: "24px",
    lineHeight: "32px",
    marginBottom: "15px"
  },
  productCardAvailable: {
    borderRadius: "24px",
    "& span": {
      color: `${theme.palette.text.primary}`,
    },
    border: `1px solid ${theme.palette.grey["300"]}`,
  },
  productTableInfo: {
    boxShadow: "none",
    border: `1px solid ${theme.palette.grey["300"]}`,
    borderRadius: "12px",
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
    margin:"16px",
    height: "44px",
    border: "1px solid rgba(239, 239, 239, 1)",
    borderRadius: "11px",
  },
  buttonIcon: {
    marginRight:"12px"
  },
  productCardButtonBasket: {
    margin:"16px",
    textTransform: "capitalize"
  },
  customScrollbar: {
    display:"flex",
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center"
  },
  productCardActionBtns: {
    display:"flex",
    width:"100%",
    justifyContent:"space-between",
    marginTop:"31px",
    alignItems:"center",
    minHeight:"67px"
  },
  productCardMediaSmallWrapper: {
    display:"flex",
    justifyContent:"space-between",
    marginTop:"22px"
  },
  productCardAboutHeader: {
    width: "100%",
    textAlign:"left",
    marginBottom:"56px"
  }
}));
