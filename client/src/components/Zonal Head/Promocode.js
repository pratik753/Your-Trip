import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
// import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import classes from "./promoCode.module.css";
import ShowPromoCode from "./ShowPromoCode";
const Promocode = () => {
  const [isAmountOrPer, setIsAmountOrPer] = useState("percent");
  const [value, setvalue] = useState({
    pName: "",

    percentage: "",
    times: "",
  });
  const pnameHandler = (event) => {
    setvalue({ ...value, pName: event.target.value });
  };
  const percentage = (event) => {
    setIsAmountOrPer(event.target.value);
    setvalue({ ...value, percentage: event.target.value });
  };
  const times = (event) => {
    setvalue({ ...value, times: event.target.value });
  };

  return (
    <>
      <center className={classes.promoCont}>
        <label>
          <h2>PromoCode</h2>
        </label>

        <br />
        <Grid container row={1} rowSpacing={2} columnSpacing={1}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="text"
              onClick={pnameHandler}
              placeholder="Name Of PromoCode"
              label="Name Of PromoCode"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                discount
              </InputLabel>
              <NativeSelect defaultValue="percent" onChange={percentage}>
                <option value="percent">Discount in %</option>
                <option value="amount">Discount in Rs</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            {isAmountOrPer === "percent" ? (
              <TextField
                fullWidth
                type="number"
                onClick={pnameHandler}
                placeholder="Percent %"
                label="Percent %"
                required
              />
            ) : (
              <TextField
                fullWidth
                type="number"
                onClick={pnameHandler}
                placeholder="Amount Rs."
                label="Amount Rs."
                required
              />
            )}
          </Grid>
          <Grid item xs={4}>
            {/* <TextField> */}
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                No.of times
              </InputLabel>
              <NativeSelect defaultValue="one" onChange={times}>
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="manyTimes">Many Times</option>
              </NativeSelect>
            </FormControl>
            {/* </TextField> */}
          </Grid>
          <Grid xs={12}>
            <br />
            <Button
              // fullWidth
              variant="contained"
              // onClick={}
              // className={classes.sub}
              type="submit"
            >
              Add PromoCode
            </Button>
          </Grid>
        </Grid>
      </center>
      <center className={classes.promoCont}>
        <ShowPromoCode />
      </center>
    </>
  );
};
export default Promocode;
