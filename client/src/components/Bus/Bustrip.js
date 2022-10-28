import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import classes from "./bustrip.module.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";
const Bustrip = () => {
  const history = useHistory();
  const [value, setvalue] = useState({
    from: "",
    to: "",
    vdate: "",
  });
  const fromhandler = (event) => {
    setvalue({ ...value, from: event.target.value });
  };
  const tohandler = (event) => {
    setvalue({ ...value, to: event.target.value });
  };
  const vdatehandler = (event) => {
    setvalue({ ...value, vdate: event.target.value });
  };
  const submithandler = (event) => {
    setvalue({ ...value, vdate: event.target.value });

    history.push("/bustrip/showBus");
  };

  return (
    <>
    
      <br />
      <div className={classes.flexcontainer}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="From"
              variant="outlined"
              // className={classes.fillbox}
              value={value.from}
              onChange={fromhandler}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              onChange={tohandler}
              id="outlined-basic"
              label="to"
              variant="outlined"
              // className={classes.fillbox}
              value={value.to}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="outlined-name"
              // label="to"
              // className={classes.fillbox}
              // value={value.to}
              type="date"
              onChange={vdatehandler}
            />
          </Grid>
          <Grid item xs={4}>
            <Button fullWidth variant="contained" onClick={submithandler}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>

      {/* <h4>India</h4>
          </div>
          <div className={classes.fillbox}>
            <h4>to</h4>
           
            <h4>India</h4>
          </div>

          <div className={classes.fillbox}>
            <h4>Date</h4>
           
            <h4>India</h4>
          </div>
          <div className={classes.subbutton}>
           
          </div> */}
      {/* submit */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};
export default Bustrip;
