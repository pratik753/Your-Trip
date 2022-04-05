import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
// import {Link} from "react-router-dom";
import Loginform from "../Login/Loginform";
import Dehaze from "@material-ui/icons/Dehaze";
import Close from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";
import IconNav from "./IconNav";
// import DehazeIcon from "@mui/icons-material/Dehaze";
import Register from "../Login/Register";
import TempModal from "../Login/RegisterModal";
const ZonalHeadNavBar = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const history = useHistory();

  // const registerOpen = () => {
  //   return <TempModal />;
  // };

  return (
    <>
      <nav className={classes.navbar}>
        {/* <h3 className={classes.logo}> MovieStar </h3> */}
        {/* <img src={logo} className={classes.logoimg} /> */}
        <ul
          className={
            isMobile ? `${classes.nav_links_mobile}` : `${classes.nav_links}`
          }
          onClick={() => setIsMobile(false)}
        >
          <span className={classes.home}>
            <Link to="/">
              <li>Zonal Head</li>
            </Link>
          </span>
          <span className={classes.about}>
            <Link to="/Loginform">
              <li>Login</li>
            </Link>
          </span>

          {/* <span className={classes.skills}>
            <Link to="/Register">
            <li>Register</li>
            </Link>
        </span> */}
          <span className={classes.skills}>
            <Link to="/zonalHead/promocode">
              <li>Add Promocode</li>
            </Link>
          </span>
          <span className={classes.skills}>
            <Link to="/zonalHead/addBusesCompany">
              <li>Add Buses Company</li>
            </Link>
          </span>
        </ul>
        <button
          className={classes.mobile_menu_icon}
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <Close /> : <Dehaze />}
        </button>
      </nav>
    </>
  );
};

export default ZonalHeadNavBar;
