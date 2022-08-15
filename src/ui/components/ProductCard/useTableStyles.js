import { makeStyles } from "@mui/styles";

export const useTableStyles = makeStyles((theme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  
  table: {
    "& .ReactVirtualized__Table__row": {
      border: `1px solid ${theme.palette.grey["300"]}`,
      borderRadius: "8px",
    },
    "& div": {
      scrollbarWidth: "none !important",
    }
  },
  tableRow: {
    display: "flex",
    justifyContent:"space-between",
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
}));