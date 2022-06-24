import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Grid, Typography, IconButton, Container } from "@mui/material";
import Textfield from "./Components/FormsUI/Textfield";
import ButtonWrapper from "./Components/FormsUI/Submit/ButtonWrapper";
import {
  getCustomer,
  updateCustomer,
} from "../../../store/thunks/customer.thunks";
import { currentCustomerSelector, isRightPasswordSelector } from "../../../store/selectors/selectors";

function PersonalInfo() {
  const currentCustomer = useSelector(currentCustomerSelector);
  const isRightPassword = useSelector(isRightPasswordSelector);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleSubmit = (values) => {
    dispatch(updateCustomer(values));
    navigation("/settings");
  };
  const [open, setOpen] = useState(false);
  const reopen = () => {
    setOpen(!open);
  };

  console.log(currentCustomer);
  console.log(isRightPassword);

  useEffect(() => {
    dispatch(getCustomer());
  }, []);


  const INITIAL_FORM_STATE = {
    firstName: currentCustomer?.firstName,
    lastName: currentCustomer?.lastName,
    email: currentCustomer?.email,
    phone: currentCustomer?.phone,
    addressLine: currentCustomer?.addressLine,
    house: currentCustomer?.house,
    code: currentCustomer?.code,
    flat: currentCustomer?.flat,
    city: currentCustomer?.city,
    state: currentCustomer?.state,
    login: currentCustomer?.login,
    country: currentCustomer?.country,
    password: "",
    newPassword: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .matches(/[a-zA-Z]/, "Firstname can only contain Latin letters."),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .matches(/[a-zA-Z]/, "Lastname can only contain Latin letters."),
    email: Yup.string().email("Invalid email."),
    phone: Yup.number()
      .integer()
      .typeError("Please enter a valid phone number"),
    login: Yup.string()
      .min(3, "Login is 3 chars minimum.")
      .max(10, "10 is max chars."),
    addressLine: Yup.string(),
    code: Yup.number().integer().typeError("Please enter a valid code number"),
    flat: Yup.number().integer().typeError("Please enter the correct number"),
    house: Yup.number().integer().typeError("Please enter the correct number"),
    city: Yup.string(),
    password: Yup.string()
      .min(8, "Password is 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    // newPassword: Yup.string().oneOf([Yup.ref("password")]),
  });

  return (
    <Grid container>
      <Container maxWidth="md">
        {currentCustomer != null && (
          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE,
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid sx={{ mb: 1, mt: 3 }} item xs={12}>
                  <Typography variant="h4">
                    Add Address
                    <IconButton onClick={reopen}>
                      <AddCircleIcon />
                    </IconButton>
                  </Typography>
                </Grid>
                {open === true ? (
                  <Container maxWidth="md">
                    <Grid sx={{ mb: 5 }} container spacing={2}>
                      <Grid item xs={12}>
                        <Textfield name="addressLine" label="Street" />
                      </Grid>
                      <Grid item xs={6}>
                        <Textfield name="city" label="City" />
                      </Grid>
                      <Grid item xs={6}>
                        <Textfield name="house" label="House" />
                      </Grid>
                      <Grid item xs={6}>
                        <Textfield name="flat" label="Flat" />
                      </Grid>
                      <Grid item xs={6}>
                        <Textfield name="code" label="Postal code" />
                      </Grid>
                    </Grid>
                    <Grid sx={{ mb: 3 }} item xs={12}>
                      <ButtonWrapper onClick={handleSubmit}>
                        Save Address
                      </ButtonWrapper>
                    </Grid>
                  </Container>
                ) : (
                  false
                )}
                <IconButton edge="start" color="primary"></IconButton>
                <Grid item xs={12}>
                  <Typography variant="h4">Your details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Textfield name="firstName" label="First Name" />
                </Grid>
                <Grid item xs={12}>
                  <Textfield name="lastName" label="Last Name" />
                </Grid>
                <Grid item xs={12}>
                  <Textfield name="login" label="Login" />
                </Grid>
                <Grid item xs={12}>
                  <Textfield name="email" label="Email" />
                </Grid>
                <Grid item xs={12}>
                  <Textfield name="phone" label="Phone" />
                </Grid>
                <Grid item xs={12}>
                  <Textfield
                    name="password"
                    label="Current password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Textfield
                    name="newPassword"
                    label="New password"
                    type="password"
                  />
                </Grid>
                {/* <Grid item xs={12}>
                              <Textfield
                              name="passwordConfirm"
                              label="Confirm new password*"
                              type='password'
                              />
                      </Grid>  */}
                <Grid sx={{ mb: 3, mt: 2 }} item xs={12}>
                  <Grid sx={{ mb: 3 }} item xs={12}>
                    <ButtonWrapper onClick={handleSubmit}>
                      Save Details
                    </ButtonWrapper>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        )}
      </Container>
    </Grid>
  );
}

export default PersonalInfo;
