/* eslint-disable jsx-a11y/anchor-is-valid */

// import MainNavigation from "../nav_footer/MainNavigation";
// import AcademicProfile from "./AcademicProfile";
import { useState } from "react";
// import ParentProfile from "./ParentProfile";
// import AddressProfile from "./AddressProfile";
// import ApplicantProfile from "./ApplicantProfile";
import "./userprofile.css";
// import male from "../assists/image/male.png";
// import female2 from "../assists/image/female.png";
// import female1 from "../assists/image/female2.jpg";
// import Footer from "../nav_footer/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
// import LoadingSpinner from "../assists/LoadingSpinner";

const UserProfile = () => {
  const [viewprofile, setviewprofile] = useState(1);
  const [branch, branchvalue] = useState([]);
  const [style1profile, setstyle1profile] = useState(
    "nav-link forhover activeprof"
  );
  const [style2profile, setstyle2profile] = useState("nav-link forhover");
  const [style3profile, setstyle3profile] = useState("nav-link forhover");
  const [style4profile, setstyle4profile] = useState("nav-link forhover");

  const Applicanthandlar = () => {
    setstyle1profile("nav-link forhover activeprof");
    setstyle2profile("nav-link forhover");
    setstyle3profile("nav-link forhover");
    setstyle4profile("nav-link forhover");
    setviewprofile(1);
  };
  const Academichandlar = () => {
    setstyle1profile("nav-link forhover");
    setstyle2profile("nav-link forhover activeprof");
    setstyle3profile("nav-link forhover");
    setstyle4profile("nav-link forhover");
    setviewprofile(2);
  };
  const Parenthandlar = () => {
    setstyle1profile("nav-link forhover");
    setstyle2profile("nav-link forhover");
    setstyle3profile("nav-link forhover activeprof");
    setstyle4profile("nav-link forhover");
    setviewprofile(3);
  };
  const Addresshandlar = () => {
    setstyle1profile("nav-link");
    setstyle2profile("nav-link");
    setstyle3profile("nav-link");
    setstyle4profile("nav-link activeprof");
    setviewprofile(4);
  };
  // useEffect(async () => {
  //   let mobile = { mobile: "7979738171" };
  //   console.log("hello");
  //   const data = await axios.post(
  //     "http://localhost:4000/college/findall",
  //     mobile
  //   );
  //   console.log(data.data.data);
  //   branchvalue(data.data.data);
  // }, []);
  if (branch.length != 0) {
    return (
      <>
        {/* <MainNavigation /> */}
        <div className="loadingspinnerdiv">
          {/* <LoadingSpinner /> */}
          <div className="loadingtext">Loading Your Profile...</div>
        </div>
      </>
    );
  }
  console.log(branch);
  return (
    <div className="profiledivmain">
      <>
        {/* <MainNavigation /> */}
        <Grid container className="emp-profile">
          <form method="post">
            <Grid item xs={6}>
              <Grid md={4}>
                <div className="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    // src={female2}
                    alt=""
                  />
                  <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </Grid>
              <Grid md={6}>
                <div className="profile-head">
                  <h5>branch</h5>
                  <h6>For branch</h6>
                  <p className="proile-rating">
                    12th Marks : <span>branch</span>
                  </p>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className={style1profile}
                        id="home-tab"
                        data-toggle="tab"
                        onClick={Applicanthandlar}
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Applicant
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={style2profile}
                        id="home-tab"
                        data-toggle="tab"
                        onClick={Academichandlar}
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Academic
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={style3profile}
                        id="home-tab"
                        data-toggle="tab"
                        onClick={Parenthandlar}
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Parent's
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={style4profile}
                        id="home-tab"
                        data-toggle="tab"
                        onClick={Addresshandlar}
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Address
                      </a>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid md={2}>
                <Link to="/enquiry">
                  <input
                    type="submit"
                    className="profile-edit-btn"
                    name="btnAddMore"
                    value="Edit Profile"
                  />
                </Link>
                <br />
                <br />
                <Link to="/paymenthome">
                  <input
                    type="submit"
                    className="profile-edit-btn"
                    name="btnAddMore"
                    value="Payment"
                  />
                </Link>
              </Grid>
            </Grid>
            <div className="rowprofile">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>LINK</p>
                  <a href="">Edit Form</a>
                  <br />
                  <a href="">Logout</a>
                  <br />
                  <a href="">Trident Website</a>
                  <p>CONTACT</p>
                  <a href="">9097186189</a>
                  <br />
                  <a href="">tat.ac@tat.com</a>
                  <br />
                  {/* <a href="">WordPress</a> */}
                  <br />
                  {/* <a href="">WooCommerce</a> */}
                  <br />
                  {/* <a href="">PHP, .Net</a> */}
                  <br />
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  {/* {viewprofile == 1 && ( */}
                  {/* // <ApplicantProfile profiledata={branch} /> */}
                  {/* // )} */}
                  {/* {viewprofile == 2 && <AcademicProfile profiledata={branch} />}
                  {viewprofile == 3 && <ParentProfile profiledata={branch} />}
                  {viewprofile == 4 && <AddressProfile profiledata={branch} />} */}
                </div>
              </div>
            </div>
          </form>
        </Grid>
        <br />
        <br />
        <br />
        <br />
      </>
      {/* <Footer /> */}
    </div>
  );
};
export default UserProfile;
