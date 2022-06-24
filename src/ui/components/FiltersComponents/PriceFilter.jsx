import { Container, Typography, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import useFiltersStyles from "../../../app/pages/Filters/useFiltersStyles";
import {
  setInputValueFrom,
  setInputValueTo,
  setQueryParams,
  setSliderValues,
} from "../../../store/actions/filters.actions";
import {
  inputValueFromSelector,
  inputValueToSelector,
  queryParamsSelector,
  sliderValuesSelector,
} from "../../../store/selectors/selectors";

const PriceFilter = () => {
  const classes = useFiltersStyles();

  const queryParams = useSelector(queryParamsSelector);
  const inputFromValue = useSelector(inputValueFromSelector);
  const inputToValue = useSelector(inputValueToSelector);
  const sliderValues = useSelector(sliderValuesSelector);

  const dispatch = useDispatch();

  const handleInputFromChange = (event) => {
    if (event.target.value === undefined) {
      dispatch(setSliderValues([0, sliderValues[1]]));
      dispatch(setInputValueFrom(event.target.value));

      dispatch(
        setQueryParams({ ...queryParams, minPrice: 0, maxPrice: sliderValues[1] })
      );
    } else {
      if (+event.target.value > 30) {
        dispatch(setSliderValues([30, 30]));
        dispatch(setInputValueFrom(30));
        dispatch(setInputValueTo(30));

        dispatch(setQueryParams({ ...queryParams, minPrice: 30, maxPrice: 30 }));
      } else if (+event.target.value > sliderValues[1]) {
        dispatch(setSliderValues([sliderValues[1], sliderValues[1]]));
        dispatch(setInputValueFrom(sliderValues[1]));

        dispatch(
          setQueryParams({
            ...queryParams,
            minPrice: sliderValues[1],
            maxPrice: sliderValues[1],
          })
        );
      } else {
        dispatch(setSliderValues([+event.target.value, sliderValues[1]]));
        dispatch(setInputValueFrom(event.target.value));

        dispatch(
          setQueryParams({
            ...queryParams,
            minPrice: +event.target.value,
            maxPrice: sliderValues[1],
          })
        );
      }
      return null;
    }

    return null;
  };

  const handleInputToChange = (event) => {
    if (event.target.value === undefined) {
      dispatch(setSliderValues([sliderValues[0], 30]));
      dispatch(setInputValueTo(event.target.value));

      dispatch(
        setQueryParams({ ...queryParams, minPrice: sliderValues[0], maxPrice: 30 })
      );
    } else {
      if (+event.target.value < 0) {
        dispatch(setSliderValues([0, 0]));
        dispatch(setInputValueFrom(0));
        dispatch(setInputValueTo(0));

        dispatch(setQueryParams({ ...queryParams, minPrice: 0, maxPrice: 0 }));
      } else if (+event.target.value > 30) {
        dispatch(setSliderValues([sliderValues[0], 30]));
        dispatch(setInputValueTo(30));

        dispatch(
          setQueryParams({ ...queryParams, minPrice: sliderValues[0], maxPrice: 30 })
        );
      } else if (+event.target.value < sliderValues[0]) {
        dispatch(setSliderValues([sliderValues[0], sliderValues[0]]));
        dispatch(setInputValueTo(event.target.value));

        dispatch(
          setQueryParams({
            ...queryParams,
            minPrice: sliderValues[0],
            maxPrice: sliderValues[0],
          })
        );
      } else {
        dispatch(setSliderValues([sliderValues[0], +event.target.value]));
        dispatch(setInputValueTo(event.target.value));

        dispatch(
          setQueryParams({
            ...queryParams,
            minPrice: sliderValues[0],
            maxPrice: +event.target.value,
          })
        );
      }
      return null;
    }

    return null;
  };

  const handleSliderChange = (event, newValue) => {
    dispatch(setInputValueFrom(newValue[0]));
    dispatch(setInputValueTo(newValue[1]));
    dispatch(setSliderValues(newValue));

    dispatch(
      setQueryParams({ ...queryParams, minPrice: newValue[0], maxPrice: newValue[1] })
    );
  };

  return (
    <Container className={classes.filterContainer}>
      <Typography
        variant="h5"
        className={classes.filterTitle}
        sx={{ paddingLeft: "25px", marginBottom: "10px" }}
      >
        Price
      </Typography>

      <Container className={classes.priceInputsContainer}>
        <FormControl>
          <Container className={classes.priceInputContainer}>
            <InputLabel className={classes.priceInputLabel}>From</InputLabel>
            <Input
              className={classes.priceInput}
              value={inputFromValue}
              onChange={handleInputFromChange}
            />
          </Container>
        </FormControl>
        <FormControl>
          <Container className={classes.priceInputContainer}>
            <InputLabel className={classes.priceInputLabel}>To</InputLabel>
            <Input
              className={classes.priceInput}
              value={inputToValue}
              onChange={handleInputToChange}
            />
          </Container>
        </FormControl>
      </Container>

      <Slider
        className={classes.priceSlider}
        min={0}
        max={30}
        getAriaLabel={() => "Price"}
        value={sliderValues}
        onChangeCommitted={handleSliderChange}
      />
    </Container>
  );
};

export default PriceFilter;
