import React from "react";
import ImageCard from "./ImageCard";
import classes from "./home.module.css";
import { Grid } from "@mui/material";
const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div className={classes.imageCard}>
            <ImageCard />
            <label>Mountaion</label>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.imageCard}>
            <ImageCard />
            <label>Mountaion</label>
          </div>
        </Grid>
        <Grid item xs={4}>
          h
        </Grid>
        <Grid item xs={8}>
          h
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
