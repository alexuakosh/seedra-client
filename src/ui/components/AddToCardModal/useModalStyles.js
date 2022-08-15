import { makeStyles } from "@mui/styles";

export const useModalStyles = makeStyles((theme) => ({
  modalWidow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 800,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: "8px",
    border: `1px solid ${theme.palette.grey["300"]}`,
    boxShadow: 24,
    p: 4,
  },
  productCard: {
    boxShadow: "none",
    margin: "12px",
  },
  productCardMediaWrapper: {
    alignSelf:"center",
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
  }, 
  chipLabel: {
    width: '130px', 
    marginRight: '8px', 
    '@media (max-width: 900px)': {
      marginRight: '4px',
  },
  }
}));
