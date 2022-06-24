import { makeStyles } from "@mui/styles";

const drawerWidth = 350;

const useFiltersStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },

  loader: {
    position: "absolute",
    width: "200px",
    top: "50%",
    left: "50%",
    color: "green",
    fontSize: "40px",
  },

  center: {
    margin: "0 auto",
  },

  filtersIcon: {
    cursor: "pointer",
    "@media (min-width: 780px)": {
      display: "none",
    },
  },

  drawer: {
    width: drawerWidth,
  },

  filters: {
    "@media (max-width: 780px)": {
      display: "none",
    },
  },

  drawerPaper: {
    width: drawerWidth,
    maxHeight: "100%",
    position: "relative !important",
    marginTop: "30px",
    borderRight: "none !important",
  },

  drawerStack: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "relative !important",
  },

  title: {
    borderBottom: "1px",
    borderBottomColor: "#EFEFEF",
    borderBottomStyle: "solid",
  },

  filterContainer: {
    borderBottom: "1px",
    borderBottomColor: "#EFEFEF",
    borderBottomStyle: "solid",
    paddingBottom: "25px",
    position: "relative",
  },

  filterTitle: {
    paddingBottom: "10px",
  },

  categoriesContainer: {
    display: "flex",
    position: "relative",
  },

  superCategoryTitle: {
    fontWeight: "300",
    cursor: "pointer",
  },

  subCategoriesTitle: {
    fontWeight: "700",
    margin: "10px",
    paddingLeft: "20px",
    cursor: "pointer",
    fontSize: "20px",
  },

  expandIcon: {
    position: "absolute",
    top: "5px",
    right: "10px",
    cursor: "pointer",
  },

  originFilterContainer: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    marginBottom: "15px",
  },

  filterName: {
    borderBottom: "1px",
    borderBottomColor: "#EFEFEF",
    borderBottomStyle: "solid",
    fontWeight: "bold",
  },

  priceInputsContainer: {
    display: "flex !important",
    marginBottom: "20px",
  },

  priceInputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
  },

  priceInputLabel: {
    position: "absolute",
    top: "5px",
    left: "25px",
  },

  priceInput: {
    minWidth: "80px",
    border: "1px",
    borderColor: "#EFEFEF",
    borderStyle: "solid",
    paddingLeft: "30px",
  },

  priceSlider: {
    width: "300px",
  },

  moreIcon: {
    cursor: "pointer",
    position: "absolute",
    top: "5px",
    right: "10px",
  },

  isClosed: {
    display: "none !important",
  },

  isOpen: {
    display: "block !important",
  },
});

export default useFiltersStyles;
