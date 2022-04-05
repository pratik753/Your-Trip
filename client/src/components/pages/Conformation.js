import classes from "./conformation.module.css";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Button, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router";
import Amount from "../Bus/Amount";
const Conformation = (props) => {
  const { seatsNo } = useParams();
  const [passNo, setPassNo] = useState(["0", "1", "2"]);
  useEffect(() => {
    var test = new Array(props.passNo).fill(0);
    setPassNo(test);
  }, []);
  const [passDetails, setPassDetails] = useState({
    name: "",
    age: "",
    gender: "",
  });
  const [contactD, setContactD] = useState({
    emailId: "",
    mobileNo: "",
  });
  // useEffect(() => {
  //   var test = new Array(seatsNo).fill(0);
  //   setPassNo(test);
  // }, []);
  const proceedtoPayHandler = () => {
    let arrayPassanger = [];
    for (let i = 0; i < props.seatsNo; i++) {
      const name = document.getElementById(`name${i}`).value;
      const genderform = document.getElementById(`genderForm${i}`);
      const gender = genderform.elements[`genderForm${i}`].value;
      const age = document.getElementById(`age${i}`).value;
      arrayPassanger.push({
        name: name,
        gender: gender,
        age: age,
      });
    }
    const emailId = document.getElementById("emailId").value;
    const mobileNo = document.getElementById("mobileNo").value;
    setContactD({
      emailId: emailId,
      mobileNo: mobileNo,
    });
    setPassDetails(arrayPassanger);
  };
  // var test = new Array(seatsNo).fill(0);
  // setPassNo(test);
  // const arr = () => {
  // };
  console.log(passDetails);
  // console.log(test);
  console.log(contactD);
  console.log({ passDetails, contactD });

  const passMap = () => {
    // arr();
    // setPassNo(...temp);

    return passNo.map((data, index) => (
      <Grid container spacing={2} className={classes.passenger}>
        <Grid item xs={0.5}>
          <h4 className={classes.sno}>{index + 1}</h4>
        </Grid>

        {/* <div className={classes.passenger}> */}
        <Grid item xs={5}>
          <TextField
            required
            id={`name${index}`}
            fullWidth
            label="Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs="auto">
          <div>
            <form id={`genderForm${index}`} className={classes.genderDiv}>
              <h4 className={classes.genderHeading}>Gender</h4>
              <label>
                <input type="radio" name={`genderForm${index}`} value="Male" />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name={`genderForm${index}`}
                  value="Female"
                />{" "}
                Female
              </label>
              <label>
                <input type="radio" name={`genderForm${index}`} value="Other" />{" "}
                Other
              </label>
            </form>
          </div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            fullWidth
            id={`age${index}`}
            type="number"
            label="Age"
            variant="outlined"
          />
        </Grid>
      </Grid>
    ));
  };
  return (
    <>
      <div className={classes.passengerDetails}>
        <h3>Passenger Details</h3>
      </div>
      <div className={classes.PassengerBox}>
        <div className={classes.PassengerInfo}>
          <h4>Passenger Information</h4>
          <br />
          <Grid container className={classes.passenger}>
            {/* <div> */}
            <Grid container item xs={8}>
              {passMap()}
            </Grid>
            {/* </div> */}
            <Grid item xs="auto" className={classes.amountDetail}>
              <Amount />
            </Grid>
          </Grid>
          <br />
          <hr />
          <h4>Contact Details</h4>
          <div className={classes.passenger}>
            <Grid container spacing={2}>
              <Grid item xs="auto">
                <TextField
                  required
                  id="emailId"
                  fullWidth
                  type="email"
                  label="Email Id"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs="auto">
                <TextField
                  required
                  id="mobileNo"
                  fullWidth
                  type="number"
                  label="Phone Number"
                  variant="outlined"
                />
              </Grid>
              {/* <Grid item xs={4}>
    
  </Grid>
  <Grid item xs={8}>
    
  </Grid> */}
            </Grid>
          </div>
          <Button variant="contained" onClick={proceedtoPayHandler}>
            Proceed To Pay
          </Button>
        </div>
      </div>
    </>
  );
};

export default Conformation;
