import { useState, useEffect } from "react";
import axios from "axios";
import * as Sentry from "@sentry/react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Grid,
  Typography,
  Box,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { PropTypes } from "prop-types";
import { useField, useFormikContext } from "formik";
import ShippingNovaPoshta from "../ShippingMethods/ShippingNovaPoshta.jsx";
import ExpressDelivery from "../ShippingMethods/ExpressDelivery.jsx";
import { API } from "../../../constants/index";


const ShippingInfo = () => {
  const [field] = useField("deliveryMethod");
  const { setFieldValue } = useFormikContext();

  const [shippingData, setShippingData] = useState([]);
  
  let defaultMethod;

  useEffect(() => {
    setFieldValue("deliveryMethod", "expressDelivery")
    axios
      .get(`${API}shipping-methods`)
      .then((shippingMethods) => setShippingData(shippingMethods.data))
      .catch((err) => Sentry.captureException(err));
  }, []);

  field.value === undefined
    ? shippingData.forEach((item) => {
        item.default && (defaultMethod = item.customId);
      })
    : (defaultMethod = field.value);

  const deliveryMethods = (method) => {
    switch (method) {
      case "expressDelivery":
        return <ExpressDelivery />;
      case "novaPoshta":
        return <ShippingNovaPoshta />;
      default:
        return <Typography>Not Found</Typography>;
    }
  };

  const handleChange = (event) => {
    setFieldValue("deliveryMethod", event.target.value);
  };

  return (
    <>
      <Grid container spacing={2} pt="15px" ml="0">
        <FormControl fullWidth margin="normal">
          <FormLabel id="controlled-radio-buttons-group">
            Choose delivery method
          </FormLabel>
          {shippingData.length !== 0 && (
            <RadioGroup
              aria-labelledby="controlled-radio-buttons-group"
              name="deliveryMethod"
              value={defaultMethod}
              onChange={handleChange}
            >
              <Grid container spacing={2} justifyContent="space-around" ml="0">
                {shippingData.map(
                  (item) =>
                    item.enabled && (
                      <Grid item key={item.customId} xs={12} lg={6}>
                        <Box display="flex" flexDirection="row">
                          <FormControlLabel
                            value={item.customId}
                            control={<Radio name={item.customId}/>}
                            label={item.name}
                           
                          />
                          <Box
                            key={item._id}
                            component="img"
                            sx={{
                              height: "50px",
                            }}
                            alt={item.name}
                            src={item.imageUrl}
                          />
                        </Box>
                      </Grid>
                    )
                )}
              </Grid>
            </RadioGroup>
          )}
        </FormControl>
      </Grid>
      {deliveryMethods(defaultMethod)}
    </>
  );
};

export default ShippingInfo;

ShippingInfo.propTypes = {
  formField: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
  setFieldValue: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    () => {},
  ]),
};
