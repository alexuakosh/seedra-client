import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  Container,
  Typography,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import useFiltersStyles from "../../../app/pages/Filters/useFiltersStyles";
import { maturationCheckboxStateSelector } from "../../../store/selectors/selectors";
import { setMaturationCheckboxState } from "../../../store/actions/filters.actions";

const MaturationFilter = () => {
  const classes = useFiltersStyles();

  const [searchParams] = useSearchParams();

  const maturationCheckBoxState = useSelector(maturationCheckboxStateSelector);

  const [isOpenMaturationCheckBox, setIsOpenMaturationCheckBox] = useState(
    classes.isClosed
  );
  const [earlyState, setEarlyState] = useState(false);
  const [lateState, setLateState] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchParams.get("maturation") !== null) {
      dispatch(
        setMaturationCheckboxState([
          ...searchParams.get("maturation").split(","),
        ])
      );
    }
  }, []);

  useEffect(() => {
    maturationCheckBoxState.forEach((item) => {
      if (item === "early") {
        setEarlyState(true);
      }
      if (item === "late") {
        setLateState(true);
      }
    });
  }, [maturationCheckBoxState]);

  const toggleMaturationCheckBox = () => {
    if (isOpenMaturationCheckBox === classes.isClosed) {
      setIsOpenMaturationCheckBox(classes.isOpen);
    } else {
      setIsOpenMaturationCheckBox(classes.isClosed);
    }
  };

  const handleMaturationChange = (event) => {
    if (event.target.checked) {
      dispatch(
        setMaturationCheckboxState([
          ...maturationCheckBoxState,
          event.target.name,
        ])
      );
    } else {
      if (event.target.name === "early") {
        setEarlyState(false);
      }
      if (event.target.name === "late") {
        setLateState(false);
      }
      const newMaturationCheckBoxState = maturationCheckBoxState.filter(
        (option) => option !== event.target.name
      );

      dispatch(setMaturationCheckboxState(newMaturationCheckBoxState));
    }
  };

  return (
    <Container className={classes.filterContainer}>
      <Container className={classes.originFilterContainer}>
        <Typography variant="h5" className={classes.filterTitle}>
          Term of maturation
        </Typography>
        <MoreIcon
          className={classes.moreIcon}
          onClick={toggleMaturationCheckBox}
        ></MoreIcon>
      </Container>
      <Container className={isOpenMaturationCheckBox}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={earlyState}
                onChange={handleMaturationChange}
                name="early"
              />
            }
            label="Early"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={lateState}
                onChange={handleMaturationChange}
                name="late"
              />
            }
            label="Late"
          />
        </FormGroup>
      </Container>
    </Container>
  );
};

export default MaturationFilter;
