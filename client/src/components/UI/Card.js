import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { useHistory } from "react-router";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const cssAdd = {
  background: "#d2ecf7",
  //   height: "5rem",
};

const Card = () => {
  const history = useHistory();
  const openBus = () => {
    history.push("/bustrip/showBus/seats");
  };
  return (
    <>
      <br />
      <Paper
        sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}
        style={cssAdd}
        onClick={openBus}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="complex"
                src="https://media.istockphoto.com/photos/white-bus-crossing-the-alpes-picture-id157526603"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid
              item
              xs
              container
              direction="column"
              spacing={1}
              rowSpacing={1}
            >
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Maha Devi Travelles
                </Typography>
                <Typography variant="body2" gutterBottom>
                  From : Ranchi(13:30)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date : 22/09/2021
                </Typography>
                <Typography variant="body2" gutterBottom>
                  To : Patna(19:30)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date : 22/09/2021
                </Typography>
              </Grid>
              {/* <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  Remove
                </Typography>
              </Grid> */}
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                Rs. 539.00
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A/C || Non Sleeper
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Available Seat : 19
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Duration : 8Hr 30Min
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Card;
