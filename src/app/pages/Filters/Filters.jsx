import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Grid, Stack, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductsListFilters from "../../components/ProductsList/ProductsListFilters.jsx";
import SortBySelect from "../../../ui/components/FiltersComponents/SortBySelect.jsx";
import CategoryFilter from "../../../ui/components/FiltersComponents/CategoryFilter.jsx";
import {
  downloadFilteredProductsRequestStateSelector,
  filteredProductsSelector,
  hasMoreFilteredProductsSelector,
  maturationCheckboxStateSelector,
  originCheckboxStateSelector,
  productsQuantitySelector,
  queryParamsSelector,
  selectedCategorySelector,
} from "../../../store/selectors/selectors";
import { fetchFilteredProducts } from "../../../store/thunks/products.thunks";
import useFiltersStyles from "./useFiltersStyles";
import OriginFilter from "../../../ui/components/FiltersComponents/OriginFilter.jsx";
import MaturationFilter from "../../../ui/components/FiltersComponents/MaturationFilter.jsx";
import {
  setHasMoreFilteredProducts,
  setInputValueFrom,
  setInputValueTo,
  setMaturationCheckboxState,
  setOriginCheckboxState,
  setQueryParams,
  setSelectedCategory,
  setSliderValues,
} from "../../../store/actions/filters.actions";
import PriceFilter from "../../../ui/components/FiltersComponents/PriceFilter.jsx";

const Filters = () => {
  const classes = useFiltersStyles();
  const [iconClasses, setIconClasses] = useState(classes.filtersIcon);
  const [iconOffClasses, setIconOffClasses] = useState(
    `${classes.filtersIcon} ${classes.isClosed}`
  );
  const [filtersClasses, setFiltersClasses] = useState(classes.filters);

  const productsQuantity = useSelector(productsQuantitySelector);
  const loading = useSelector(downloadFilteredProductsRequestStateSelector);
  const filteredProducts = useSelector(filteredProductsSelector);
  const hasMoreFilteredProducts = useSelector(hasMoreFilteredProductsSelector);
  const queryParams = useSelector(queryParamsSelector);
  const selectedCategory = useSelector(selectedCategorySelector);
  const originCheckBoxState = useSelector(originCheckboxStateSelector);
  const maturationCheckBoxState = useSelector(maturationCheckboxStateSelector);

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  let initialParams = null;

  const defaultParams = {
    perPage: 9,
    startPage: 1,
    sort: "-currentPrice",
  };

  if (searchParams.toString() !== "") {
    const newParams = {};
    searchParams.forEach((value, key) => {
      newParams[key] = value;
    });
    initialParams = { ...newParams, ...defaultParams };
  } else {
    initialParams = defaultParams;
  }

  const setFilterParams = (filter, filterState) => {
    if (filterState.length !== 0) {
      dispatch(setQueryParams({ ...queryParams, [filter]: filterState }));
    } else {
      const newParams = { ...queryParams };
      delete newParams[filter];
      dispatch(setQueryParams(newParams));
    }
  };

  const fetchData = () => {
    let newParams = {};
    if (productsQuantity !== 0) {
      newParams = {
        ...queryParams,
        perPage: +queryParams.perPage + 9,
      };
    }

    if (productsQuantity !== 0 && newParams.perPage > productsQuantity) {
      newParams.perPage = productsQuantity;
      setHasMoreFilteredProducts(false);
    }

    if (hasMoreFilteredProducts) {
      dispatch(setQueryParams(newParams));
    }
  };

  useEffect(() => {
    dispatch(setQueryParams(initialParams));

    if (searchParams.get("categories") !== null) {
      dispatch(setSelectedCategory(searchParams.get("categories")));
    }

    if (searchParams.get("minPrice") !== null) {
      dispatch(setInputValueFrom(searchParams.get("minPrice")));
    }

    if (searchParams.get("maxPrice") !== null) {
      dispatch(setInputValueTo(searchParams.get("maxPrice")));
    }

    if (
      searchParams.get("minPrice") !== null &&
      searchParams.get("maxPrice") !== null
    ) {
      dispatch(
        setSliderValues([
          +searchParams.get("minPrice"),
          +searchParams.get("maxPrice"),
        ])
      );
    }

    dispatch(fetchFilteredProducts(defaultParams));

    return function cleanUp() {
      dispatch(setQueryParams(null));
      dispatch(setSelectedCategory([]));
      dispatch(setInputValueFrom(0));
      dispatch(setInputValueTo(30));
      dispatch(setSliderValues([0, 30]));
      dispatch(setOriginCheckboxState([]));
      dispatch(setMaturationCheckboxState([]));
      dispatch(setHasMoreFilteredProducts(true));
    };
  }, []);

  useEffect(() => {
    setSearchParams(new URLSearchParams(queryParams));
    if (Object.keys(queryParams).length > 0) {
      dispatch(fetchFilteredProducts(queryParams));
    }
  }, [queryParams]);

  useEffect(() => {
    let verifiedParams = {};
    searchParams.forEach((value, key) => {
      verifiedParams[key] = value;
    });

    if (!verifiedParams.startPage) {
      verifiedParams = { ...verifiedParams, ...defaultParams };
    }

    if (Object.keys(verifiedParams).length > 0) {
      dispatch(fetchFilteredProducts(verifiedParams));
    }

    dispatch(setQueryParams(verifiedParams));
    setSearchParams(new URLSearchParams(verifiedParams));
  }, [searchParams]);

  useEffect(() => {
    setFilterParams("categories", selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    setFilterParams("origin", originCheckBoxState);
  }, [originCheckBoxState]);

  useEffect(() => {
    setFilterParams("maturation", maturationCheckBoxState);
  }, [maturationCheckBoxState]);

  const toggleFilters = () => {
    if (filtersClasses === classes.filters) {
      setFiltersClasses(`${classes.filters}${classes.isOpen}`);
    } else {
      setFiltersClasses(classes.filters);
    }

    if (iconClasses === classes.filtersIcon) {
      setIconClasses(classes.isClosed);
      setIconOffClasses(classes.filtersIcon);
    } else {
      setIconClasses(classes.filtersIcon);
      setIconOffClasses(classes.isClosed);
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={0} md={4} className={classes.center}>
          <Box
            className={classes.drawer}
            variant="permanent"
            classes={{ paper: classes.drawerPaper }}
            anchor="left"
          >
            <Box className={classes.titleWrapper}>
              <FilterAltIcon
                color="primary"
                className={iconClasses}
                onClick={toggleFilters}
              />
              <FilterAltOffIcon
                color="primary"
                className={iconOffClasses}
                onClick={toggleFilters}
              />

              <Typography variant="h5" className={classes.title}>
                Filters
              </Typography>
            </Box>

            <Stack spacing={4} className={filtersClasses}>
              <SortBySelect className={classes.sortBySelect} />

              <CategoryFilter />

              <PriceFilter />

              <OriginFilter />

              <MaturationFilter />
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <InfiniteScroll
            dataLength={filteredProducts.length}
            next={fetchData}
            hasMore={hasMoreFilteredProducts}
          >
            <ProductsListFilters
              loading={loading}
              productList={filteredProducts}
            />
          </InfiniteScroll>
        </Grid>
      </Grid>
    </>
  );
};

export default Filters;
