import React, { useState } from "react";
import classes from "./seatsPage.module.css";
import AirlineSeatLegroomReducedIcon from "@mui/icons-material/AirlineSeatLegroomReduced";
import "./seat.css";
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import Face from "@material-ui/icons/Face";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useHistory } from "react-router";
const SeatsPage = (props) => {
  const [selectedSeats, setSelectedSeats] = useState(0);
  const [nameSeats, setNameSeats] = useState([]);
  const history = useHistory();
  const [csss, setCss] = useState("classes.allow");
  const [seatsTable, setseatsTable] = useState([
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 1],
    [1, 0, 1, 1],
    [1, 0, 1, 1],
  ]);
  console.log(seatsTable);
  console.log(seatsTable[1][0]);
  const bookButton = () => {
    history.push(`/bustrip/showBus/seats/conformation`);
    props.setPassNo(nameSeats.length);
  };
  const getIdofElement = (p, q, data) => {
    // console.log(e.target.value);
    // const p = e.target.getAttribute("data-i");
    // const q = e.target.getAttribute("data-j");
    // const data = e.target.getAttribute("data-data");
    if (data == 0) {
      return;
    }
    let valueAdd = 5;
    let temp = selectedSeats;
    let valuetemp = +temp + 1;
    console.log(data);
    let SeatChar = String.fromCharCode(65 + +p);
    console.log("seat", SeatChar, +q + 1);
    let toStore = `${SeatChar} ${+q + 1}|`;

    if (data == 5) {
      const result = nameSeats.filter((word) => word != toStore);
      setNameSeats(result);
      console.log("data");
      valueAdd = 1;
      valuetemp = +temp - 1;
      // return;
    } else {
      let arr = nameSeats;
      arr.push(toStore);
      setNameSeats(arr);
    }
    console.log(nameSeats);
    console.log("i-", p);
    console.log("j", q);
    // console.log("i-", e.target.getAttribute("data-i"));
    // console.log("j", e.target.getAttribute("data-j"));
    // seatsTable[p][q] = 1;
    try {
      let copy = [...seatsTable];
      console.log("pp", p);
      copy[p][q] = valueAdd;
      setseatsTable(copy);
      setSelectedSeats(valuetemp);
      var res = seatsTable.map((a) => a.filter((b) => b == 5));
      console.log(res);
      // e.target.style.color = "black";
      console.log(selectedSeats);
    } catch (error) {
      console.log(error);
    }
  };
  function cssTable(data) {
    if (data === 5) {
      return "allowSeat";
    }
    if (data === 0) {
      return "block";
    }
    return "allow";
  }
  // var chr = String.fromCharCode(97 + n); // where n is 0, 1, 2 ...

  const tableMap = () => {
    return seatsTable.map((data, index) => (
      <tr key={index}>
        <td>
          <div className={classes.number}>
            {String.fromCharCode(64 + index + 1)}.
          </div>
          {/* <div className={classes.number}>{index + 1}.</div> */}
        </td>
        <td>
          <div
            className={cssTable(data[0])}
            data-i={index}
            data-j={0}
            data-data={data[0]}
            onClick={() => getIdofElement(index, 0, data[0])}
          >
            {/* {data[0]} */}
            <AirlineSeatLegroomReducedIcon className={classes.busSeat} />
          </div>
          <div
            className={cssTable(data[1])}
            data-i={index}
            data-j={1}
            data-data={data[1]}
            // onClick={getIdofElement}
            onClick={() => getIdofElement(index, 1, data[1])}
          >
            {/* {data[1]} */}
            <AirlineSeatLegroomReducedIcon />
          </div>
          <div className={classes.blank}>&nbsp;</div>
          <div
            className={cssTable(data[2])}
            data-i={index}
            data-j={2}
            data-data={data[2]}
            // onClick={getIdofElement}
            onClick={() => getIdofElement(index, 2, data[2])}
          >
            {/* {data[2]} */}
            <AirlineSeatLegroomReducedIcon />
          </div>
          <div
            className={cssTable(data[3])}
            data-i={index}
            data-j={3}
            data-data={data[3]}
            // onClick={getIdofElement}
            onClick={() => getIdofElement(index, 3, data[3])}
          >
            {/* {data[3]} */}
            <AirlineSeatLegroomReducedIcon />
          </div>
        </td>
      </tr>
    ));
  };
  // for (let i = 0; i < 4; i++) {
  //   for (let j = 0; j < 3; j++) {
  //     console.log(seatsTable[i][j]);
  //   }
  // }
  return (
    <div className={classes.tableMainDiv}>
      <Grid container spacing={2} className={classes.seatsDiv}>
        <Grid item xs={3}>
          <h3>Selected Seats : {selectedSeats}</h3>
          {/* <Item>xs=8</Item> */}
        </Grid>
        <Grid item xs={5}>
          <h3>{nameSeats}</h3>
        </Grid>
        <Grid item xs={4}>
          {selectedSeats > 0 && (
            <Button variant="contained" onClick={bookButton}>
              Book Your Seat
            </Button>
          )}
          {/* <Item>xs=4</Item> */}
        </Grid>
      </Grid>
      {/* <div className={classes.seatsDiv}>
      </div> */}
      <table className={classes.table}>
        <div className={classes.driver}>&nbsp;</div>
        {/* <AddCircleIcon className={classes.driver} /> */}
        {/* <button onClick={getIdofElement}>click</button> */}
        <tbody>
          {tableMap()}

          {/* <tr>
            <td>
              <div className={classes.number}>1</div>
            </td>
            <td>
              <div className={classes.allow}>A</div>
              <div className={classes.allow}>B</div>
              <div className={classes.blank}>&nbsp;</div>
              <div className={classes.allow}>C</div>
              <div className={classes.allow}>D</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes.number}>2</div>
            </td>
            <td>
              <div className={classes.allow}>A</div>
              <div className={classes.allow}>B</div>
              <div className={classes.blank}>&nbsp;</div>
              <div className={classes.allow}>C</div>
              <div className={classes.allow}>D</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes.number}>3</div>
            </td>
            <td>
              <div className={classes.block}>
                <p>A</p>
              </div>
              <div className={classes.allow}>B</div>
              <div className={classes.blank}>&nbsp;</div>
              <div className={classes.allow}>C</div>
              <div className={classes.block}>D</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes.number}>4</div>
            </td>
            <td>
              <div className={classes.block}>A</div>
              <div className={classes.allow}>B</div>
              <div className={classes.blank}>&nbsp;</div>
              <div className={classes.allow}>C</div>
              <div className={classes.block}>D</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes.number}>5</div>
            </td>
            <td>
              <div className={classes.block}>A</div>
              <div className={classes.allow}>B</div>
              <div className={classes.blank}>&nbsp;</div>
              <div className={classes.allow}>C</div>
              <div className={classes.block}>D</div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default SeatsPage;
