import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Typography, FormControl } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { queryParamsSelector } from "../../../store/selectors/selectors";
import { setQueryParams } from "../../../store/actions/filters.actions";
import useFiltersStyles from "../../../app/pages/Filters/useFiltersStyles";

const SortBySelect = () => {
  const classes = useFiltersStyles();

  const queryParams = useSelector(queryParamsSelector);

  const [sortedByPrice, setSortedByPrice] = useState(null);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("sort") === "currentPrice") {
      setSortedByPrice("less");
    } else {
      setSortedByPrice("most");
    }
  }, []);

  const handleChange = (event) => {
    setSortedByPrice(event.target.value);
    if (event.target.value === "less") {
      dispatch(setQueryParams({ ...queryParams, sort: "currentPrice" }));
    } else {
      dispatch(setQueryParams({ ...queryParams, sort: "-currentPrice" }));
    }
  };

  return (
    <>
      {sortedByPrice !== null && (
        <Container className={classes.sortBySelect}>
          <Typography variant="h5">Sort by</Typography>
          <FormControl>
            <Select
              onChange={handleChange}
              defaultValue={sortedByPrice}
              variant="outlined"
              sx={{ outline: "solid 1px rgba(53, 151, 64, 1)" }}
            >
              <MenuItem value={"most"}>Most expensive</MenuItem>
              <MenuItem value={"less"}>Less expensive</MenuItem>
            </Select>
          </FormControl>
        </Container>
      )}

      {null}
    </>
  );
};

export default SortBySelect;
