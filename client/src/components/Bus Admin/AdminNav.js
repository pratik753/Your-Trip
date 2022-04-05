import React from "react";
import { Link } from "react-router-dom";


import classes from "./AdminNav.Module.css";
import AddBus from "./AddBus";
import Addbusicon from "@mui/icons-material/Add";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Details from "@mui/icons-material/ImportContacts";
import Promocode from '@mui/icons-material/LocalOffer';
const AdminNav = () => {
  return (
    <div className={classes.container}>
       <div className={classes.box}>
         <Link to="/admin/promocode">
        <Promocode/>
        <h5>Promode</h5>
        
        </Link>
      </div>
      <div className={classes.box}>

        <Link to="/admin/addbus">
          <Addbusicon />
          <h5>Add Bus</h5>
        </Link>
      </div>
      <div className={classes.box}>
        <LocalOfferIcon />
        <h5>Add Bus</h5>
      </div>
      <div className={classes.box}>
        <Details />
      </div>
    </div>
  );
};
export default AdminNav;
