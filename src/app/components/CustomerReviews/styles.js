import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  customerReviewsContainer: {
    ...theme.mixins.wrapper,
    paddingTop: "10px",
    paddingBottom: "60px",
    '@media (max-width: 415px)': {
      width: 300, 
      display: "flex",
      flexFlow: 'column',
      justifyContent: "center",
      alignItems: "center",
    },
  },
  reviewsHeading: {
    fontWeight: "bold",
    color: theme.palette.common.black,
    marginLeft: '8px',
    marginBottom:"56px",
    '@media (max-width: 415px)': {
      marginLeft: '21px', 
    },
  },
  reviewsRaitingContainer: {
    borderColor: theme.palette.common.white,
  },
  totalRatingContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "24px 0",
  },

  reviewsRatingHeading: {
    fontWeight: "bold",
  },

  reviewsQuantityContainer: {
    display: "flex",
    flexDirection: "column",
  },

  reviewsQuantity: {
    color: theme.palette.text.secondary,
  },

  customerRating: {
    color: theme.palette.warning.main,
    "& .MuiRating-iconEmpty": {
      color: theme.palette.grey["300"],
    },
  },

  ratingNumbersContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "60%",
  },

  ratingWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  ratingNumber: {
    color: theme.palette.text.secondary,
    width: "9px",
  },

  ratingLinearProgress: {
    height: "9px",
    width: "173px",
    borderRadius: "35px",
    backgroundColor: theme.palette.grey["300"],

    "& .MuiLinearProgress-bar": {
      backgroundColor: theme.palette.warning.main,
    },
  },

  votesQuantity: {
    color: theme.palette.text.secondary,
    width: "17px",
  },
}));
