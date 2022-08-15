import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import classes from "../Header/HeaderStyles.jsx";
import Textfield from './Components/FormsUI/Textfield';
import ButtonWrapper from './Components/FormsUI/Submit/ButtonWrapper';
import CheckboxWrapper from './Components/FormsUI/Checkbox';
import { addCustomer } from '../../../store/thunks/customer.thunks';
import { customersRequestSelector } from '../../../store/selectors/selectors';
import ErrorHandler from '../ErrorHandler/ErrorHandler.jsx';
import { cleanUpAddCustomerState } from "../../../store/actions/customer.actions";


const style = makeStyles({
  ItemBlock: {
    position: "relative",
  },
  ItemRight: {
    position: "absolute",
    right: "-10px",
    top: "5px",
  },
  BlockCenter: {
    position: "relative",
    margin: "100px auto",
    backgroundColor: "#FFF",
  },
});

export default function SignUp() {
    const requestState = useSelector(customersRequestSelector);
    const dispatch = useDispatch();
    const navigation = useNavigate()
    const styles = style();
    
    const INITIAL_FORM_STATE = {
        firstName: '',
        lastName: '',
        email: '',
        login: '',
        password: '',
        termsOfService: '',
    };

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Required")
      .matches(/[a-zA-Z]/, "Firstname can only contain Latin letters."),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .matches(/[a-zA-Z]/, "Firstname can only contain Latin letters.")
      .required("Required"),
    email: Yup.string().required("Required").email("Invalid email."),
    login: Yup.string()
      .required("Required")
      .min(3, "Login is 3 chars minimum.")
      .max(10, "10 is max chars."),
    password: Yup.string()
      .required("Required")
      .min(8, "Password is 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    passwordConfirm: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password")], "Password must be the same!"),
    termsOfService: Yup.boolean().required(
      "The terms and conditions must be accepted."
    ),
  });

  const handleClose = () => {
    navigation(-1);
  };

  const [redirect, setRedirect] = useState(true);
  
  const handleSubmit = (values) => {
    const valuesToPost = { ...values };
    delete valuesToPost.passwordConfirm;
    dispatch(addCustomer(valuesToPost));
    if (redirect === false && requestState === 'idle') {
      setRedirect(!redirect);
    }
  };

  
  useEffect(() => {
    if(requestState === "error"){
      setRedirect(false)
    }
    if(requestState === "success"){
      navigation("/")
    }
  }, [requestState])
  
  useEffect(() => {
    if (redirect === false && requestState === "error") {
      dispatch(cleanUpAddCustomerState());
    }
  },[redirect])


  return (
    <>
      <Box
        className={styles.BlockCenter}
        sx={{
          border: `1px solid green`,
          p: 3,
          borderRadius: 3,
          maxWidth: 400,
          margin: "0 auto",
        }}
      >
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE,
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={handleSubmit}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid className={styles.ItemBlock} item xs={12}>
                <Typography color="primary" sx={{ pb: 1 }}>
                  Sign up
                </Typography>
                <IconButton onClick={handleClose} className={styles.ItemRight}>
                  <CloseIcon className={classes.iconsStyle} />
                </IconButton>
              </Grid>
              <Grid item xs={6}>
                <Textfield name="firstName" label="First Name" />
              </Grid>

              <Grid item xs={6}>
                <Textfield name="lastName" label="Last Name" />
              </Grid>

              <Grid item xs={12}>
                <Textfield name="email" label="Email" />
              </Grid>
              <Grid item xs={12}>
                <Textfield name="login" label="Login" />
              </Grid>
              <Grid item xs={12}>
                <Textfield name="password" label="Password" type="password" />
              </Grid>
              <Grid item xs={12}>
                <Textfield
                  name="passwordConfirm"
                  label="Confirm password*"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <CheckboxWrapper
                  name="termsOfService"
                  legend="Terms Of Service"
                  label="I agree"
                />
              </Grid>

              <Grid item xs={12}>
                <ButtonWrapper>Sign Up</ButtonWrapper>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
      {redirect ? false : (
        <ErrorHandler
          errorMessage={"User with this email or login are already exists"}
        />
      )}
    </>
  );
}

