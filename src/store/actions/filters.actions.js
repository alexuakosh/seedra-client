export const  SET_PARAMS = "SET_PARAMS";
export const setParams = (params) => ({
  type: SET_PARAMS,
  payload: params,
});

export const  SET_QUERY_PARAMS = "SET_QUERY_PARAMS";
export const setQueryParams = (queryParams) => ({
  type: SET_QUERY_PARAMS,
  payload: queryParams,
});

export const  SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
export const setSelectedCategory = (category) => ({
  type: SET_SELECTED_CATEGORY,
  payload: category,
});

export const  SET_INPUT_VALUE_FROM = "SET_INPUT_VALUE_FROM";
export const setInputValueFrom = (value) => ({
  type: SET_INPUT_VALUE_FROM,
  payload: value,
});

export const  SET_INPUT_VALUE_TO = "SET_INPUT_VALUE_TO";
export const setInputValueTo = (value) => ({
  type: SET_INPUT_VALUE_TO,
  payload: value,
});

export const  SET_SLIDER_VALUES = "SET_SLIDER_VALUES";
export const setSliderValues = (values) => ({
  type: SET_SLIDER_VALUES,
  payload: values,
});

export const  SET_ORIGIN_CHECKBOX_STATE = "SET_ORIGIN_CHECKBOX_STATE";
export const setOriginCheckboxState = (origin) => ({
  type: SET_ORIGIN_CHECKBOX_STATE,
  payload: origin,
});

export const  SET_MATURATION_CHECKBOX_STATE = "SET_MATURATION_CHECKBOX_STATE";
export const setMaturationCheckboxState = (maturation) => ({
  type: SET_MATURATION_CHECKBOX_STATE,
  payload: maturation,
});

export const  SET_HAS_MORE_FILTERED_PRODUCTS = "SET_HAS_MORE_FILTERED_PRODUCTS";
export const setHasMoreFilteredProducts = (hasMore) => ({
  type: SET_HAS_MORE_FILTERED_PRODUCTS,
  payload: hasMore,
});

export const  SET_PRODUCTS_QUANTITY = "SET_PRODUCTS_QUANTITY";
export const setProductsQuantity = (productsQuantity) => ({
  type: SET_PRODUCTS_QUANTITY,
  payload: productsQuantity,
});