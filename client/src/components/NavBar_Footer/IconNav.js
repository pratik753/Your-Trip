import React from "react";
import classes from "./iconNav.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Dehaze from "@material-ui/icons/Dehaze";
import Close from "@material-ui/icons/Close";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
// import DirectionsBusIcon from "@mui/icons-material/Flight";
import TrainIcon from "@mui/icons-material/Train";
import Bustrip from "../Bus/Bustrip";
import Traintrip from "../train/Traintrip";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
// import flightpage from "../flight/Flightpage";
const styleForPaper = {
  width: "5rem",
  height: "5rem",
  color: "black",
  padding: "1rem",
};
const IconNav = () => {
  return (
    <div className={classes.iconDivmain}>
      <Switch>
        <div className={classes.icon}>
          {/* <div > */}
          <center className={classes.iconName}>
            <Link to="/Flightpage">
              <FlightIcon style={styleForPaper} />
              <h4>Flight</h4>
            </Link>
          </center>
          <center className={classes.iconName}>
            <Link to="/Bustrip">
              <DirectionsBusIcon style={styleForPaper} />
              <h4>Bus</h4>
            </Link>
          </center>
          <center className={classes.iconName}>
            <Link to="/Traintrip">
              <TrainIcon style={styleForPaper} />
              <h4>Train</h4>
            </Link>
          </center>
          <center className={classes.iconName}>
            <Link to="/Traintrip">
              <HotelIcon style={styleForPaper} />
              <h4>Hostal</h4>
            </Link>
          </center>
          <center className={classes.iconName}>
            <Link to="/Traintrip">
              <DirectionsCarIcon style={styleForPaper} />
              <h4>Cab</h4>
            </Link>
          </center>
          <center className={classes.iconName}>
            <Link to="/Traintrip">
              <TwoWheelerIcon style={styleForPaper} />
              <h4>Bike Booking</h4>
            </Link>
          </center>
        </div>
      </Switch>
    </div>
  );
};

export default IconNav;
