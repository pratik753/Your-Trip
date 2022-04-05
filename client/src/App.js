import React, { useState } from "react";
import Navbar from "./components/NavBar_Footer/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SeatsPage from "./components/Bus/SeatsPage";
import Conformation from "./components/pages/Conformation";
import IconNav from "./components/NavBar_Footer/IconNav";
import RegisterModal from "./components/Login/RegisterModal";
import LoginModal from "../src/components/Login/LoginModal";
import Traintrip from "./components/train/Traintrip";
import Flightpage from "./components/flight/Flightpage";
import Bustrip from "./components/Bus/Bustrip";
import Card from "./components/UI/Card";
import PaymentPage from "./components/Payment/PaymentPage";
import UserProfile from "./components/profile/UserProfile";
import AddBusesCompany from "./components/Zonal Head/AddBusesCompany";
import Promocode from "./components/Zonal Head/Promocode";
import ZonalHeadNavBar from "./components/NavBar_Footer/ZonalHeadNavBar";
import BusAdminNav from "./components/NavBar_Footer/BusAdminNav";
import AddBus from "./components/Bus Admin/AddBus";
import ImageCard from "./components/Page Element/ImageCard";
import HomePage from "./components/Page Element/HomePage";
import { useSelector } from "react-redux";
const App = () => {
  const [passNo, setPassNo] = useState(1);
  const [roleNav, setRole] = useState(1);
  // localStorage.setItem("role", 0;
  //     localStorage.setItem("auth", );
  const isRole = useSelector((state) => state.auth.role);
  const isAuth = useSelector((state) => state.auth.isAuthenticaticated);
  return (
    <BrowserRouter>
      {isRole === 0 && <Navbar />}
      {isRole === 1 && <BusAdminNav />}
      {isRole === 2 && <ZonalHeadNavBar />}

      <Switch>
        <Route path="/" exact>
          <IconNav />
          <HomePage />
        </Route>
        <Route path="/bustrip" exact>
          <IconNav />
          <Bustrip />
        </Route>

        <Route path="/bustrip/showBus" exact>
          <Card />
          <Card />
        </Route>
        <Route path="/bustrip/showBus/seats" exact>
          <SeatsPage setPassNo={setPassNo} />
        </Route>
        <Route path="/bustrip/showBus/seats/conformation" exact>
          <Conformation passNo={passNo} />
        </Route>
        <Route path="/Loginform" exact>
          <LoginModal />
        </Route>
        <Route path="/Traintrip" exact>
          <IconNav />
          <Traintrip />
        </Route>
        <Route path="/Flightpage" exact>
          <IconNav />
          <Flightpage />
        </Route>

        <Route path="/Register" exact>
          <RegisterModal />
        </Route>
        <Route path="/paymentpage" exact>
          <PaymentPage />
        </Route>
        <Route path="/profile" exact>
          <UserProfile />
        </Route>
        {/* ///////////----------------////////// */}
        <Route path="/busAdmin/addBus">
          {isAuth ? <AddBus /> : "not auth"}
        </Route>
        {/* ///////////----------------////////// */}
        <Route path="/zonalHead/AddBusesCompany" exact>
          <AddBusesCompany />
        </Route>
        <Route path="/zonalHead/promocode" exact>
          <Promocode />
        </Route>
        {/* <Route path="/conformation" exact>
          <Conformation />
          <Card />
        </Route> */}

        {/* ---------------- */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
