
import { ADMIN_ADD_PRODUCT_IDLE, 
         ADMIN_ADD_PRODUCT_ERROR, 
         ADMIN_ADD_PRODUCT_REQUESTED, 
         ADMIN_ADD_PRODUCT_SUCCESS, 
         ADMIN_DELETE_PRODUCT_IDLE, 
         ADMIN_DELETE_PRODUCT_REQUESTED, 
         ADMIN_DELETE_PRODUCT_SUCCESS, 
         ADMIN_DELETE_PRODUCT_ERROR, 
         ADMIN_UPDATE_PRODUCT_IDLE, 
         ADMIN_UPDATE_PRODUCT_REQUESTED, 
         ADMIN_UPDATE_PRODUCT_SUCCESS, 
         ADMIN_UPDATE_PRODUCT_ERROR, 
         ADMIN_ADD_TO_SLIDER_REQUESTED, 
         ADMIN_ADD_TO_SLIDER_SUCCESS, 
         ADMIN_ADD_TO_SLIDER_ERROR, 
         ADMIN_DEL_FROM_SLIDER_REQUESTED, 
         ADMIN_DEL_FROM_SLIDER_SUCCESS, 
         ADMIN_DEL_FROM_SLIDER_ERROR,
         ADMIN_UPDATE_SLIDER_REQUESTED, 
         ADMIN_UPDATE_SLIDER_SUCCESS, 
         ADMIN_UPDATE_SLIDER_ERROR, } from "../actions/admin.actions"; 

import { downloadRequestStates } from "../../app/constants"; 



  
const initialState = {
    adminAddProductRequestState: downloadRequestStates.IDLE, 
    adminDeleteProductRequestState: downloadRequestStates.IDLE, 
    adminUpdateProductRequestState: downloadRequestStates.IDLE, 
    adminAddProductToSliderRequestState: downloadRequestStates.IDLE, 
    adminDelProductFromSliderRequestState: downloadRequestStates.IDLE, 
    adminUpdateSliderRequestState: downloadRequestStates.IDLE,
};

  
  const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADMIN_ADD_PRODUCT_REQUESTED:
        return {
            ...state,
            adminAddProductRequestState: downloadRequestStates.LOADING,
        };
  
      case ADMIN_ADD_PRODUCT_SUCCESS:
        return {
            ...state,
            adminAddProductRequestState: downloadRequestStates.SUCCESS,
        };
  
      case ADMIN_ADD_PRODUCT_ERROR:
        return {
            ...state,
            adminAddProductRequestState: downloadRequestStates.ERROR,
        };

      case ADMIN_ADD_PRODUCT_IDLE:
        return initialState; 



      case ADMIN_DELETE_PRODUCT_REQUESTED:
        return {
            ...state,
            adminDeleteProductRequestState: downloadRequestStates.LOADING,
        };
  
      case ADMIN_DELETE_PRODUCT_SUCCESS:
        return {
            ...state,
            adminDeleteProductRequestState: downloadRequestStates.SUCCESS,
        };
  
      case ADMIN_DELETE_PRODUCT_ERROR:
        return {
            ...state,
            adminDeleteProductRequestState: downloadRequestStates.ERROR,
        };

      case ADMIN_DELETE_PRODUCT_IDLE:
        return initialState;



      case ADMIN_UPDATE_PRODUCT_REQUESTED:
        return {
            ...state,
            adminUpdateProductRequestState: downloadRequestStates.LOADING,
        };
  
      case ADMIN_UPDATE_PRODUCT_SUCCESS:
        return {
            ...state,
            adminUpdateProductRequestState: downloadRequestStates.SUCCESS,
        };
  
      case ADMIN_UPDATE_PRODUCT_ERROR:
        return {
            ...state,
            adminUpdateProductRequestState: downloadRequestStates.ERROR,
        };

      case ADMIN_UPDATE_PRODUCT_IDLE:
        return initialState;

        

      case ADMIN_ADD_TO_SLIDER_REQUESTED:
        return {
            ...state,
            adminAddProductToSliderRequestState: downloadRequestStates.LOADING,
        };
  
      case ADMIN_ADD_TO_SLIDER_SUCCESS:
        return {
            ...state,
            adminAddProductToSliderRequestState: downloadRequestStates.SUCCESS,
        };
  
      case ADMIN_ADD_TO_SLIDER_ERROR:
        return {
            ...state,
            adminAddProductToSliderRequestState: downloadRequestStates.ERROR,
        };


        
      case ADMIN_DEL_FROM_SLIDER_REQUESTED:
        return {
            ...state,
            adminDelProductFromSliderRequestState: downloadRequestStates.LOADING,
        };
  
      case ADMIN_DEL_FROM_SLIDER_SUCCESS:
        return {
            ...state,
            adminDelProductFromSliderRequestState: downloadRequestStates.SUCCESS,
        };
  
      case ADMIN_DEL_FROM_SLIDER_ERROR:
        return {
            ...state,
            adminDelProductFromSliderRequestState: downloadRequestStates.ERROR,
        };



      case ADMIN_UPDATE_SLIDER_REQUESTED:
          return {
              ...state,
              adminUpdateSliderRequestState: downloadRequestStates.LOADING,
          };
    
        case ADMIN_UPDATE_SLIDER_SUCCESS:
          return {
              ...state,
              adminUpdateSliderRequestState: downloadRequestStates.SUCCESS,
          };
    
        case ADMIN_UPDATE_SLIDER_ERROR:
          return {
              ...state,
              adminUpdateSliderRequestState: downloadRequestStates.ERROR,
          };
  
  

      default:
        return state;
    }
};
  
export default adminReducer; 