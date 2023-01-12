export const downloadRequestStates = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
  IDLE: "idle",
};

export const API = "https://seedra-server.onrender.com/api/"; 
export const PRODUCTS_NUMBER_ON_MAIN_PAGE = 6

export const productCategories = [
  { code: '1', label: 'herbs-mono'},
  { code: '2', label: 'herbs-mix'},
  { code: '3', label: 'vegetables-mono'},
  { code: '4', label: 'vegetables-mix'},
  { code: '5', label: 'flowers-mono'},
  { code: '6', label: 'flowers-mix'}, 
]; 

export const notAdmin = 'You have to be logged in with admin credentials to access this page';