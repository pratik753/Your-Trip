// import Reat,{useState} from 'react';
import React, { useState } from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import classes from "./addBus.module.css";
import { busAdd } from "../../action/bus";
const AddBus = () => {
  const [values, setvalues] = useState({
    bName: "",
    bNumber: "",
    from: "",
    fromDate: "",
    fromTime: "",
    to: "",
    ToDate: "",
    toTime: "",
    fare: "",
    choiceAC: "",
    choiceSleeper: "",
  });
  const bNameHandler = (event) => {
    setvalues({ ...values, bName: event.target.value });
    console.log(event.target.value, values);
  };
  const bNumberHandler = (event) => {
    setvalues({ ...values, bNumber: event.target.value });
  };
  const fromHandler = (event) => {
    setvalues({ ...values, from: event.target.value });
  };
  const FromDatwHandler = (event) => {
    setvalues({ ...values, fromDate: event.target.value });
  };
  const ToDatwHandler = (event) => {
    setvalues({ ...values, ToDate: event.target.value });
  };

  const toHandler = (event) => {
    setvalues({ ...values, to: event.target.value });
  };
  const fareHandler = (event) => {
    setvalues({ ...values, fare: event.target.value });
  };
  const toTimeHandler = (event) => {
    setvalues({ ...values, toTime: event.target.value });
  };
  const fromTimeHandler = (event) => {
    setvalues({ ...values, fromTime: event.target.value });
  };
  const choiceAC = (event) => {
    setvalues({ ...values, choiceAC: event.target.value });
  };
  const choiceSleeper = (event) => {
    setvalues({ ...values, choiceSleeper: event.target.value });
  };
  const SubmitHandler = async () => {
    const data = await busAdd(values);
    console.log(data);
    const authdata = data.data;
    if (authdata?.status == 1) {
      alert("not auth");
    }
  };
  return (
    <center className={classes.addBusCont}>
      <label>
        <h1>Details</h1>
        <hr />
        <br />
      </label>
      <Grid
        container
        columnSpacing={2}
        rowSpacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="text"
            onChange={bNameHandler}
            placeholder="Bus Name"
            label="Bus Name"
            name="bName"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="text"
            onChange={bNumberHandler}
            placeholder="Bus Number"
            label="Bus Number"
            name="bNumber"
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            type="text"
            onChange={fromHandler}
            placeholder="Form"
            label="Form"
            name="from"
            required
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            fullWidth
            type="date"
            onChange={FromDatwHandler}
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            type="time"
            onChange={fromTimeHandler}
            placeholder="From-time"
            name="From=time"
            required
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            fullWidth
            type="text"
            onChange={toHandler}
            placeholder="To"
            label="To"
            name="to"
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth type="date" onChange={ToDatwHandler} required />
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth type="time" onChange={fareHandler} required />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            type="number"
            onChange={toTimeHandler}
            placeholder="Fare"
            label="Fare"
            name="fare"
            required
          />
        </Grid>
        <Grid item xs={4}>
          {/* <TextField> */}
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Choices A/C Non-A/C
            </InputLabel>
            <NativeSelect defaultValue="Ac" onChange={choiceAC}>
              <option value="Ac">Ac</option>
              <option value="Non-Ac">Non-Ac</option>
            </NativeSelect>
          </FormControl>
          {/* </TextField> */}
        </Grid>
        <Grid item xs={4}>
          {/* <TextField> */}
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Choices Sleeper
            </InputLabel>
            <NativeSelect defaultValue="Non-Sleeper" onChange={choiceSleeper}>
              <option value="Non-Sleeper">Non-Sleeper</option>
              <option value="Sleeper">Sleeper</option>
            </NativeSelect>
          </FormControl>
          {/* </TextField> */}
        </Grid>

        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            onClick={SubmitHandler}
            type="submit"
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </center>
  );
};
export default AddBus;
