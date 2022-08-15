import { useState, useEffect } from "react";
import axios from "axios";
import * as Sentry from "@sentry/react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  IconButton,
  Box,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import { PropTypes } from "prop-types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PayPal from "./PayPal.jsx";
import { API } from "../../../constants/index";

const PaymentInfo = () => {
  const [field] = useField("paymentMethod");
  const { setFieldValue } = useFormikContext();
  const [paymentData, setPaymentData] = useState([]);

  let defaultMethod;

  const textField = (name, label, prop, method) => (
    <TextField
      InputLabelProps={{
        style: {
          top: "-10px",
        },
      }}
      inputProps={{
        style: {
          padding: 5,
        },
      }}
      name={prop}
      label={label}
      fullWidth
      onChange={method}
    />
  );

  useEffect(() => {
    setFieldValue("paymentMethod", "card");
    axios
      .get(`${API}payment-methods`)
      .then((paymentMethods) => setPaymentData(paymentMethods.data))
      .catch((err) => Sentry.captureException(err));
  }, []);

  field.value === undefined
    ? paymentData.forEach((item) => {
        item.default && (defaultMethod = item.customId);
      })
    : (defaultMethod = field.value);

  const paymentMethods = (method) => {
    switch (method) {
      case "paypal":
        return <PayPal />;
      case "cash":
        return (
          <Typography 
          textAlign="center"
          sx={{ typography: { sm: 'h2', xs: 'h3' } }}>
            You will pay after delivery
          </Typography>
        );
      case "card":
        return (
          <>
            <Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {textField("cardNumber", "Card Number")}
                </Grid>
                <Grid item xs={12} lg={6}>
                  {textField("data", "exp date mm/yy")}
                </Grid>
                <Grid item xs={12} lg={6}>
                  {textField("cvv", "cvv code")}
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            </Grid>
          </>
        );
      default:
        return <Typography>Not Found</Typography>;
    }
  };

  const handleChange = (event) => {
    setFieldValue("paymentMethod", event.target.value);
  };

  return (
    <>
      <Container>
        <Box display="flex" justifyContent="center" alignItems="baseline">
          <IconButton aria-label="delete" disabled color="primary">
            <ArrowBackIosIcon />
          </IconButton>
          <Typography
            paddingBottom="40px"
            textAlign="center"
            sx={{ typography: { sm: 'h2', xs: 'h5' } }}
          >
            Payment info
          </Typography>
        </Box>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Choose payment method
          </FormLabel>
          {paymentData.length !== 0 && (
            <RadioGroup
              name="paymentMethod"
              sx={{
                flexDirection: "row",
                justifyItems: "center",
                width: "100%",
              }}
              aria-labelledby="demo-controlled-radio-buttons-group"
              value={defaultMethod}
              onChange={handleChange}
            >
              {paymentData.length !== 0 &&
                paymentData.map((payMethod, index) => (
                  <FormControlLabel
                    key={index}
                    value={payMethod.name}
                    control={<Radio />}
                    label={
                      <>
                        {payMethod.imageUrls &&
                          payMethod.imageUrls.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              width="auto"
                              height="50px"
                              style={{ marginRight: "5px" }}
                            />
                          ))}
                      </>
                    }
                  />
                ))}
            </RadioGroup>
          )}
        </FormControl>
      </Container>
      {paymentMethods(defaultMethod)}
    </>
  );
};

export default PaymentInfo;

PaymentInfo.propTypes = {
  formData: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
  step: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
  setForm: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    () => {},
  ]),
};
