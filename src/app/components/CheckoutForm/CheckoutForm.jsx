import { useState, useEffect} from "react";
import axios from "axios";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useSelector, useDispatch  } from "react-redux";
import { Formik, Form } from "formik";
import { PropTypes } from "prop-types";
import {
  getCustomer
} from "../../../store/thunks/customer.thunks";
import { currentCustomerSelector, loginStateSelector, cartSelector } from "../../../store/selectors/selectors";
import FORM_VALIDATION from "./FormValidation.jsx";
import PaymentInfo from "./form-components/PaymentInfo.jsx";
import CustomerInfo from "./form-components/CustomerInfo.jsx";
import CheckoutSummary from "./form-components/CheckoutSummary.jsx";
import ShippingInfo from "./form-components/ShippingInfo.jsx";

const steps = ["1", "2", "3"];

const defaultData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine: "",
  house: "",
  flat: "",
  code: "",
  city: "",
  postOfficeCity: "",
  postOfficeWarehouse: "",
};


export default function CheckoutForm() {

  const currentCustomer = useSelector(currentCustomerSelector);
  const cart = useSelector(cartSelector);
  const [activeStep, setActiveStep] = useState(0);
  const [orderSummary, setOrderSummary] = useState(0);
  const [orderNumber, setOrderNumber] = useState(0);
  const isLastStep = activeStep === steps.length - 1;
  const formId = "checkoutForm";
  const dispatch = useDispatch();
  const isLogin = useSelector(loginStateSelector); 

  useEffect(() => {
    dispatch(getCustomer());
  }, []);

  let defaultCustomer;

  isLogin ? 
  (defaultCustomer = currentCustomer)
  : (defaultCustomer = defaultData)

  const createOrder = (order) => {
    const address = JSON.stringify({
      country: "Ukraine",
      city: order.city,
      address: `${order.addressLine} ${order.house}, ${order.flat}`,
      postal: order.code,
      postOfficeCity: order.postOfficeCity,
      postOfficeWarehouse: order.postOfficeWarehouse,
    })
    const payment = JSON.stringify(order.paymentMethod)
    const shippingDev = JSON.stringify(order.deliveryMethod)
    const interimOrder = {
      deliveryAddress: address,
      shipping: shippingDev,
      paymentInfo: payment,
      canceled: false,
      status: "not shipped",
      email: order.email,
      mobile: order.phone,
      letterSubject: "Thank you for order! You are welcome!",
      letterHtml: `<h1>Your order №XXXXXXXX is placed. </h1>
    <p>Looking forward to see you again soon. In case of any questions - we are happy to help!</p>
    <p>Sincerely, your SEEDRA team.</p>`,
    };
    if (order._id) {
      return {
        ...interimOrder,
        customerId: `${order._id}`
      }
    }

    return {
      ...interimOrder,
      products: JSON.stringify(cart)
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const placeOrderToDB = (values, actions) =>   {
    const newOrder = createOrder(values);
     axios
      .post('http://localhost:8000/api/orders', newOrder)
      .then((response) => {
        actions.setSubmitting(false);
        setActiveStep(activeStep + 1);
        console.log(response);
        setOrderNumber(response.data.order.orderNo)
      })
      .catch(() => {
        console.log("error");
      })

    }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      placeOrderToDB(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      setOrderSummary(values)
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  const stepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <CustomerInfo/>
            <ShippingInfo/>
          </>
        ) 
      case 1:
        return <PaymentInfo/>;
      case 2:
        return <CheckoutSummary formField={orderSummary}/>;
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    defaultCustomer != null && 
    <Box
    margin={'auto'}
    width={{ xs: "100%", sm: "50%"}}
    display="flex"
    flexDirection= "column"
    justifyContent= "space-between"
    padding="20px"
    >
      <Stepper activeStep={activeStep}>
        {steps.map((index) => 
 (
            <Step key={index}>
              <StepLabel
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  setActiveStep(+index - 1);
                }}
              ></StepLabel>
            </Step>
          )
        )}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography variant="h2" component="h2">
          Thank You! Your oder #{orderNumber} has been placed!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <Formik initialValues={defaultCustomer} validationSchema={FORM_VALIDATION} onSubmit={_handleSubmit}>
          {
          (props) => (
            <Form id={formId}>
              {stepContent(activeStep, props.setFieldValue)}
              <Box display="flex" mt="20px" justifyContent="flex-end"> 
                {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}
                  <Button
                    disabled={props.isSubmitting}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    {isLastStep? "Place order" : "Next"}
                  </Button>
                  {props.isSubmitting && <CircularProgress size={24} />}
                </Box>
            </Form>
          )}
        </Formik>
      )}
    </Box>
  );
}

CheckoutForm.propTypes = {
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
  isSubmitting: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
  setFieldValue: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
};
