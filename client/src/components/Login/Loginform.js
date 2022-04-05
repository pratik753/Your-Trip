import classes from "./Loginstyle.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useHistory } from "react-router";
import { login } from "../../action/auth";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/auth";
const styleForPaper = {
  width: "5rem",
  height: "5rem",
  color: "black",
  padding: "1rem",
};
const Loginform = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setvalue] = useState({
    email: "",
    password: "",
    role: "",
  });
  const emailHandler = (event) => {
    setvalue({ ...value, email: event.target.value });
  };
  const passwordHandler = (event) => {
    setvalue({ ...value, password: event.target.value });
  };
  const handleRole = (event) => {
    // console.log(event.target.value);
    setvalue({ ...value, role: event.target.value });
  };
  const SubmitHandler = async (e) => {
    let noRole = 0;
    if (value.role === "user") noRole = 0;
    if (value.role === "busAdmin") noRole = 1;
    if (value.role === "zonalHead") noRole = 2;
    if (localStorage.getItem("profile") === undefined) {
      localStorage.clear();
    }
    const data = await login(value, history);
    if (data === undefined) {
      alert("Invaild Password And Email or role");
      return;
    }
    dispatch(authAction.login({ role: noRole, auth: true }));

    // if (data.status === 1) {
    //   alert(data.message);
    //   return;
    // }
    console.log(data);

    // console.log(data);

    localStorage.setItem("profile", JSON.stringify(data.token));
  };
  const openRegister = () => {
    history.push("./Register");
  };

  return (
    <center>
      <label>
        <h1>LOGIN</h1>
      </label>
      <Grid container rowSpacing={2}>
        <div className={classes.lock}>
          <LockOpenOutlined style={styleForPaper} />
        </div>
        <Grid item xs={12}>
          {/* <label for="uname"><b>Username</b></label> */}
          <TextField
            fullWidth
            type="text"
            // className={classes.fillbox}
            onChange={emailHandler}
            placeholder="Email"
            name="email"
            label="Email"
            required
          />
        </Grid>
        <Grid item xs={12}>
          {/* <label for="psw"><b>Password</b></label> */}
          <TextField
            fullWidth
            type="password"
            // className={classes.fillbox}
            onChange={passwordHandler}
            placeholder="Enter Password"
            name="password"
            label="Password"
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
              onChange={handleRole}
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="busAdmin">Bus Admin</MenuItem>
              <MenuItem value="zonalHead">Zonal Head</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container justify="flex-end">
          <Grid item>
            <Button onClick={openRegister}>
              {false
                ? "Already have an Account? Sign In"
                : "Don't have an account? Sign Up"}
            </Button>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <br />
          <Button
            fullWidth
            variant="contained"
            onClick={SubmitHandler}
            // className={classes.sub}
            type="submit"
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </center>
  );
};
export default Loginform;
