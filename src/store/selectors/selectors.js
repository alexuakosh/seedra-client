/**
 *
 * @param {Object} state
 * @returns {String} - one of downloadRequestStates
 */

// ================== Categories ===================

export const downloadCategoriesRequestStateSelector = (state) =>
  state.catalog.downloadRequestState;

/**
 * @param {Object} state
 * @returns {Array<Object>}
 */

export const allCategoriesSelector = (state) => state.catalog.categoriesList;

/**
 * @param {Object} state
 * @returns {Array<Object>}
 */

export const mainCategoriesSelector = (state) => {
  const mainCategories = state.catalog.categoriesList.filter(
    (category) => category.parentId === "null"
  );

  return mainCategories;
};

// =================== Products ===================
export const downloadProductsRequestStateSelector = (state) =>
  state.products.downloadAllRequestState;

export const downloadWishlistRequestStateSelector = (state) =>
  state.wishlist.downloadWishlistRequestState;

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

export const downloadFilteredProductsRequestStateSelector = (state) =>
  state.products.downloadFilteredRequestState;

export const filteredProductsSelector = (state) =>
  state.products.filteredProducts;

// ========================= Slides =============================
export const downloadSlidesRequestStateSelector = (state) =>
  state.slides.downloadRequestState;

export const slidesSelector = (state) => state.slides.slideList;

// ======================= Customers/Login ==============================
export const newCustomerSelector = (state) => state.customer.newCustomer;

export const currentCustomerSelector = (state) =>
  state.customer.currentCustomer;

export const loginStateSelector = (state) => state.customer.isLoggedIn; 

export const customerOrdersHistory = (state) => state.customer.getOrders; 

export const isAdminStateSelector = (state) => state.customer.isAdmin;

export const loginRequestSelector = (state) => state.customer.loginRequestState;

export const customersRequestSelector = (state) =>
  state.customer.addRequestState;

export const isRightPasswordSelector = (state) => state.customer.isRightPassword;

// ======================= Cart ===========================
export const cartSelector = (state) => state.cart.cart;
/**
 * @param {object} state
 * @returns {number | null}
 */
export const cartQuantitySelector = (state) => {
  if (Array.isArray(state.cart.cart)) {
    const totalQuantity = state.cart.cart.reduce(
      (total, currentItem) => total + currentItem.cartQuantity,
      0
    );
    return totalQuantity;
  }
  return null;
};

// ======================== Wishlist =======================
export const wishlistSelector = (state) => state.wishlist.wishlist;

// ====================== Filters ==========================


export const paramsSelector = (state) => state.filters.params;

export const queryParamsSelector = (state) => state.filters.queryParams;

export const sortedByPriceSelector = (state) => state.filters.sortedByPrice;

export const selectedCategorySelector = (state) =>
  state.filters.selectedCategory;

export const inputValueFromSelector = (state) => state.filters.inputValueFrom;

export const inputValueToSelector = (state) => state.filters.inputValueTo;

export const sliderValuesSelector = (state) => state.filters.sliderValues;

export const originCheckboxStateSelector = (state) =>
  state.filters.originCheckboxState;

export const maturationCheckboxStateSelector = (state) =>
  state.filters.maturationCheckboxState;

export const hasMoreFilteredProductsSelector = (state) => state.filters.hasMoreFilteredProducts

export const productsQuantitySelector = (state) => state.filters.productsQuantity 

// MVP:wishlist
export const wishlistDowloadedSuccessSelector = (state) => state.wishlist.downloadRequestState 

export const wishlistQuantitySelector = (state) => state.wishlist.wishlist?.products?.length


// ====================== Admin =========================== 

export const adminAddProductRequestSelector = (state) => state.admin.adminAddProductRequestState; 

export const adminDeleteProductRequestSelector = (state) => state.admin.adminDeleteProductRequestState;

