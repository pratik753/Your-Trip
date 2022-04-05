import classes from "./Register.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { signUp } from "../../action/auth";
import { useHistory } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/auth";
const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [matchPassword, setMatchPassword] = useState(false);
  const [value, setvalue] = useState({
    Fname: "",
    Lname: "",
    phone: "",
    role: "",
    email: "",
    password: "",
  });
  const FnameHandler = (event) => {
    setvalue({ ...value, Fname: event.target.value });
  };
  const LnameHandler = (event) => {
    setvalue({ ...value, Lname: event.target.value });
  };
  const emailHandler = (event) => {
    setvalue({ ...value, email: event.target.value });
  };
  const passwordHandler = (event) => {
    setvalue({ ...value, password: event.target.value });
  };
  const PhoneHandler = (event) => {
    setvalue({ ...value, phone: event.target.value });
  };
  const handlerRole = (event) => {
    setvalue({ ...value, role: event.target.value });
  };
  const SubmitHandler = async (event) => {
    let noRole = 0;
    if (value.role === "user") noRole = 0;
    if (value.role === "busAdmin") noRole = 1;
    if (value.role === "zonalHead") noRole = 2;
    if (localStorage.getItem("profile") === undefined) {
      localStorage.clear();
    }
    const data = await signUp(value, history);
    console.log(data);
    if (data === undefined) {
      alert("Email Already Exisits");
      return;
    }
    dispatch(authAction.login({ role: noRole }));
    // console.log(data);

    localStorage.setItem("profile", JSON.stringify(data.token));
  };
  const RepasswordHandler = (e) => {
    if (value.password !== e.target.value) {
      setMatchPassword(true);
      return;
    }
    setMatchPassword(false);
  };

  return (
    <center>
      <label>
        <h2>REGISTER</h2>
        <hr />
        <br />
      </label>
      <Grid container columnSpacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="text"
            className={classes.fillbox}
            onChange={FnameHandler}
            placeholder="First Name"
            label="First Name"
            name="uname"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="text"
            className={classes.fillbox}
            onChange={LnameHandler}
            placeholder="Last Name"
            label="Last Name"
            name="uname"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="number"
            className={classes.fillbox}
            onChange={PhoneHandler}
            placeholder="Phone No"
            label="Phone No"
            required
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Role"
              onChange={handlerRole}
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="busAdmin">Bus Admin</MenuItem>
              <MenuItem value="zonalHead">Zonal Head</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="text"
            className={classes.fillbox}
            onChange={emailHandler}
            placeholder="Enter E-mail"
            name="email"
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            className={classes.fillbox}
            onChange={passwordHandler}
            placeholder="Enter Password"
            name="psw"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Re-Password"
            type="password"
            className={classes.fillbox}
            onChange={RepasswordHandler}
            placeholder="Re-Enter Password"
            name="psw"
            required
          />
        </Grid>
        {matchPassword && <label>Not match</label>}
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            onClick={SubmitHandler}
            className={classes.sub}
            type="submit"
          >
            Register
          </Button>
        </Grid>
      </Grid>
      {/* <div class={classes.container}>
        <div>{/* <label for="uname"><b>Username</b></label> *</div>
        <div>{/* <label for="uname"><b>Username</b></label> *</div>
        <div>{/* <label for="uname"><b>Username</b></label> *</div>
        <div>{/* <label for="uname"><b>Username</b></label> }</div>
        <div>{/* <label for="psw"><b>Password</b></label> </div>
      </div> */}
    </center>
  );
};
export default Register;
