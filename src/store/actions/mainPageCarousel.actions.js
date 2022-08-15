
export const RECEIVED_ITEM_ADD_TO_CART = "RECEIVED_ITEM_ADD_TO_CART";
export const receivedItemAddToCart = (item) => ({
    type: RECEIVED_ITEM_ADD_TO_CART,
    payload: item,
});
  
export const REQUESTED__ITEM_ADD_TO_CART = "REQUESTED__ITEM_ADD_TO_CART";
export  const requestedItemAddToCart = () => ({
    type: REQUESTED__ITEM_ADD_TO_CART,
  });

export const RECEIVED_FAILURE_ITEM_ADD_TO_CART = "RECEIVED_FAILURE_ITEM_ADD_TO_CART";
export  const receivedFailureItemAddToCart = (error) => ({
    type: RECEIVED_FAILURE_ITEM_ADD_TO_CART,
    payload: {
      error,
    },
});

export const ITEM_IN_CART = "ITEM_IN_CART";
export  const sentItemToCart = () => ({
    type:  ITEM_IN_CART ,
  });