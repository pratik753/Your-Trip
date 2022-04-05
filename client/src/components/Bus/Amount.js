import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
const Amount = () => {
  return (
    <>
      <Grid item xs="6">
        <h3>Amount</h3>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs="6">
          <h4>Fare:</h4>
          <h4>200 X 2 = Rs. 400.00</h4>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs="8">
          <TextField
            required
            fullWidth
            type="text"
            label="PromoCode"
            variant="outlined"
          />
        </Grid>
        <Grid item xs="3">
          <Button variant="contained">Apply</Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs="8">
          <h4>Discount : Rs. 50.00</h4>
        </Grid>
        <Grid item xs="8">
          <h4>ToTal Price : Rs. 350.00</h4>
        </Grid>
      </Grid>
    </>
  );
};

export default Amount;
