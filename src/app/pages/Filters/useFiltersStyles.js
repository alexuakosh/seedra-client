import { makeStyles } from "@mui/styles";

const drawerWidth = 350;

const useFiltersStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },

  loader: {
    position: "relative",
    width: "200px",
    left: "30%",
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
    marginTop: "32px",
    marginBottom: "32px",
  },

  filterContainer: {
    borderBottom: "1px",
    borderBottomColor: "#EFEFEF",
    borderBottomStyle: "solid",
    paddingTop: "10px",
    paddingBottom: "25px",
    position: "relative",
  },

  sortBySelect: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "32px",
    borderBottom: "1px",
    borderBottomColor: "#EFEFEF",
    borderBottomStyle: "solid",
    paddingTop: "10px",
    paddingBottom: "25px",
  },

  titleWrapper: {
    borderBottom: "solid gray 1px",
    "@media (max-width: 780px)": {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      width: "150px",
    },
  },

  filterTitle: {
    paddingBottom: "10px",
  },

  categoriesContainer: {
    display: "flex",
    position: "relative",
  },

  superCategoryTitle: {
    fontFamily: "'Lexend', sans-serif",
    fontWeight: "300",
    cursor: "pointer",
  },

  subCategoriesTitle: {
    fontFamily: "'Lexend', sans-serif",
    margin: "10px",
    paddingLeft: "20px",
    cursor: "pointer",
    fontSize: "16px",
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
