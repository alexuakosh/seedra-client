import { Grid, Typography, Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InputField from "../CheckoutFormFields/InputField.jsx";

const CustomerInfo = () => (
    <>
      <Box
        display="flex"
        height="40px"
        justifyContent="center"
        alignItems="baseline"
      >
        <IconButton aria-label="delete" disabled color="primary">
          <ArrowBackIosIcon />
        </IconButton>
        <Typography
          paddingBottom="40px"
          textAlign="center"
          variant="h2"
          component="h3"
        >
          Checkout
        </Typography>
      </Box>
      <Grid>
        <Typography variant="h3" component="h3">
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
