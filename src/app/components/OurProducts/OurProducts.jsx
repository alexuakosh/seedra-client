import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Tab from "../../../ui/components/Tab/Tab.jsx";
import Tabs from "../../../ui/components/Tabs/Tabs.jsx";
import Icon from "../../../ui/components/Icon/Icon.jsx";
import {
  downloadRequestStates,
  PRODUCTS_NUMBER_ON_MAIN_PAGE,
} from "../../constants";
import {
  downloadCategoriesRequestStateSelector,
  mainCategoriesSelector,
} from "../../../store/selectors/selectors";
import ErrorHandler from "../ErrorHandler/ErrorHandler.jsx";
import { fetchFilteredProducts } from "../../../store/thunks/products.thunks";

const useStyles = makeStyles((theme) => ({
  tab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexGrow: "1",
    "&:not(:last-child)": {
      marginRight: "12px",
    },
    "& > svg": {
      marginRight: "20px",
      color: theme.palette.primary.main,
    },
  },

  ourProducts: {
    ...theme.mixins.wrapper,
    paddingTop: "60px",
    paddingBottom: "60px",
  },
  navigation: {
    marginBottom: "25px",
  },
  ourProductHeading: {
    marginBottom: "40px !important",
    fontWeight: "bold !important",
  },
}));

export const productsSelector = (state) => {
  if (state.products.selectedCategories === "all") {
    return state.products.productList;
  }

  if (state.products.selectedCategories === "bundles") {
    const bundle = state.products.productList.filter(
      (product) => product.categories.indexOf("mix") > -1
    );

    return bundle;
  }

  const selectedProducts = state.products.productList.filter(
    (product) =>
      product.categories.indexOf(state.products.selectedCategories) > -1
  );

  return selectedProducts;
};

const OurProducts = () => {
  const downloadRequestState = useSelector(
    downloadCategoriesRequestStateSelector
  );
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  const categories = useSelector(mainCategoriesSelector);
  if (downloadRequestState === downloadRequestStates.LOADING)
    return <div>Loading...</div>; // Here must be a loader
  if (downloadRequestState === downloadRequestStates.ERROR)
    return (
      <ErrorHandler
        errorMessage={
          "There is some problem with downloading product categories"
        }
      />
    );

  const handleClick = (event) => {
    if (event.target.dataset.category === "all") {
      dispatch(
        fetchFilteredProducts(`perPage=${PRODUCTS_NUMBER_ON_MAIN_PAGE}`)
      );
    } else if (event.target.dataset.category === "bundles") {
      dispatch(
        fetchFilteredProducts(
          `perPage=${PRODUCTS_NUMBER_ON_MAIN_PAGE}&categories=${categories
            .map((category) => category.name)
            .reduce((acc, curr) => `${acc}${curr}-mix,`)}`
        )
      );
    } else {
      dispatch(
        fetchFilteredProducts(
          `perPage=${PRODUCTS_NUMBER_ON_MAIN_PAGE}&categories=${event.target.dataset.category},${event.target.dataset.category}-mono,${event.target.dataset.category}-mix`
        )
      );
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const categoriesTabs = categories.map((category) => (
    <Tab
      data-category={category.name}
      className={classes.tab}
      label={category.name}
      id={category.id}
      key={category.id}
      title={category.description}
      icon={<Icon icon={Icon.icons[category.icon]} />}
    />
  ));

  return (
    <>
      <Box component="section" className={classes.ourProducts}>
        <Box>
          <Box className={classes.navigation}>
            <Typography
              className={classes.ourProductHeading}
              variant="h2"
              component="h2"
            >
              Our products
            </Typography>
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                onClick={handleClick}
                variant="scrollable"
              >
                {categoriesTabs}
              </Tabs>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OurProducts;
