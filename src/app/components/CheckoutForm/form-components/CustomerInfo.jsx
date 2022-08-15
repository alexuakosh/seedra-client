import { Grid, Typography, Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import InputField from "../CheckoutFormFields/InputField.jsx";

const CustomerInfo = () => (
    <>
      <Box
        display="flex"
        height="40px"
        justifyContent="center"
        alignItems="baseline"
        position={"relative"}
      >
        <Link to={"/cart"} style={{ textDecoration: "none", bottom: "22%", position: "relative" }} title={"Move to Cart"}>
        <IconButton aria-label="delete" disabled color="primary">
          <ArrowBackIosIcon />
        </IconButton>
        </Link>
        <Typography
          paddingBottom="40px"
          textAlign="center"
          sx={{ typography: { sm: 'h2', xs: 'h5' } }} 
        >
          Checkout
        </Typography>
      </Box>
      <Grid>
        <Typography
          sx={{ typography: { sm: 'h3', xs: 'h6' } }} >
          Personal info
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <InputField name="firstName" type="text" label="First Name" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <InputField name={"lastName"} label={"Last Name"} />
          </Grid>
          <Grid item xs={12}>
            <InputField name={"email"} label={"Email"} />
          </Grid>
          <Grid item xs={12}>
            <InputField name={"phone"} label={"Telephone"} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )

export default CustomerInfo;
