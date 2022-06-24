import { useState, useEffect } from "react";
import axios from "axios";
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
} from "@mui/material";
import { useField, useFormikContext } from "formik";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { styled } from "@mui/styles";
import { PropTypes } from "prop-types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PayPal from "./PayPal.jsx";
import { API } from "../../../constants/index";

const PaymentInfo = () => {
  const [field] = useField("paymentMethod");
  const { setFieldValue } = useFormikContext();
  const [paymentData, setPaymentData] = useState([]);

  let defaultMethod;
 
  useEffect(() => {
    axios
      .get(`${API}payment-methods`)
      .then((paymentMethods) => setPaymentData(paymentMethods.data))
      .catch(() => console.log("Some problem with payment methods fetching"));
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
        return <Typography>You will pay after delivery</Typography>;
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
            variant="h2"
            component="h3"
          >
            Payment info
          </Typography>
        </Box>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Choose payment method
          </FormLabel>
          <RadioGroup
            name="paymentMethod"
            sx={{ flexDirection: "row", justifyItems: "center", width: "100%" }}
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
        </FormControl>
        {/* {paymentMethod === "card" && (
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
                <Grid item xs={12}>
                  <ButtonLeft>
                    <Typography>12$</Typography>
                    <Typography
                      position={"relative"}
                      left="35%"
                      justifySelf={"left"}
                    >
                      Continue
                    </Typography>
                    <ArrowForwardIcon />
                  </ButtonLeft>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
        {paymentMethod === "paypal" && <PayPal />} */}
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
