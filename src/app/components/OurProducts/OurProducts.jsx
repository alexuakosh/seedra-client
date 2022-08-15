import React from "react";
import { Typography, Box, Tabs } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import StyledTab from "./StyledTab/StyledTab.jsx";
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
import useStyles from "./OurProductsStyle";

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

  if (downloadRequestState === downloadRequestStates.ERROR)
    return (
      <ErrorHandler
        errorMessage={
          "There is some problem with downloading product categories"
        }
      />
    );

  const handleClick = (event) => {
    const tabsCategories = Array.from(categories, (obj) => obj.name);
    const tabCategory = event.target.dataset.category;

    if (tabsCategories.includes(tabCategory)) {
      if (tabCategory === "all") {
        dispatch(
          fetchFilteredProducts(`perPage=${PRODUCTS_NUMBER_ON_MAIN_PAGE}`)
        );
      } else if (tabCategory === "bundles") {
        dispatch(
          fetchFilteredProducts(
            `perPage=${PRODUCTS_NUMBER_ON_MAIN_PAGE}&categories=${tabsCategories.reduce(
              (acc, curr) => `${acc}${curr}-mix,`
            )}`
          )
        );
      } else {
        dispatch(
          fetchFilteredProducts(
            `perPage=${PRODUCTS_NUMBER_ON_MAIN_PAGE}&categories=${tabCategory},${tabCategory}-mono,${tabCategory}-mix`
          )
        );
      }
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const categoriesTabs = categories.map((category) => (
    <StyledTab
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
                className={classes.tabsContainer}
                aria-label={"our-products-nav"}
                value={value}
                onChange={handleChange}
                onClick={handleClick}
                variant="scrollable"
                allowScrollButtonsMobile={true}
                TabIndicatorProps={{
                  style: {
                    display: "none",
                  },
                }}
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
