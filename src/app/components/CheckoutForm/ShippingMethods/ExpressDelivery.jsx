import { Grid, Typography } from "@mui/material";
import InputField from "../CheckoutFormFields/InputField.jsx";

const ExpressDelivery = () => 
 (
      <Grid>
        <Typography sx={{ typography: { sm: 'h3', xs: 'h6' } }}>
          Delivery info
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputField name="addressLine" label="Street" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <InputField name="house" label="House" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <InputField name="flat" label="Flat" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <InputField name="code" label="Postal Code" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <InputField name="city" label="City" />
          </Grid>
        </Grid>
      </Grid>
  )


export default ExpressDelivery;
