import {Button,Card,CardActions,CardContent,DialogContent,DialogContentText,
    Dialog,DialogActions,DialogTitle,Grid,Typography
} from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { getMatchDetail } from "../api/Api";



const MyCard = ({ match }) => {

const [detail, setDetail] = useState({});


const [open, setOpen] = useState(false);

const handleClick = (id) => {

    getMatchDetail(id).then((data) => {
      console.log("Match Data", data);
      setDetail(data);
      handleOpen();
    });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const getMatchCard = () => {
    //   return (
    // <Dialog open={open} onClose={handleClose}>
    //   <DialogTitle id="alert-dailog-title">{"Match Detail..."}</DialogTitle>
    //   <DialogContent>
    //     <DialogContentText id="alert-dailog-descripation">
    //       <Typography>{detail.stat}</Typography>
    //       <Typography>
    //         Match{" "}
    //         <span style={{ fontstyle: "italic", fontweight: "bold" }}>
    //           {detail.matchStarted ? "Started" : "Still not Started"} {""}
    //         </span>
    //       </Typography>
    //       <Typography>
    //         Score{" "}
    //         <span style={{ fontstyle: "italic", fontweight: "bold" }}>
    //           {detail.score}
    //         </span>
    //       </Typography>
    //     </DialogContentText>
    //   </DialogContent>
    //   <DialogActions>
    //     <Button onClick={handleClose} color="primary" autoFocus>
    //       Close
    //     </Button>
    //   </DialogActions>
    // </Dialog>

  return (
    <Card style={{ marginTop: 20 }}>
      <CardContent>
        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid item>
            <Typography variant="h5">{match["team-1"]}</Typography>
          </Grid>
          <Grid item>
            <img style={{ width: 85 }} src={require("../img/vs.png")} alt="" />
          </Grid>
          <Grid item>
            <Typography variant="h5">{match["team-2"]}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justify="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleClick(match.unique_id);
            }}
          >
            Show Details
          </Button>
          <Button style={{ marginLeft: 5 }} variant="contained" color="primary">
            Start time {new Date(match.dateTimeGMT).toLocaleString()}
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );

 };


  const getDialog = () => (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dailog-title">{"Match Detail..."}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dailog-descripation">
          <Typography>{detail.stat}</Typography>
          <Typography>
            Match{" "}
            <span style={{ fontstyle: "italic", fontweight: "bold" }}>
              {detail.matchStarted ? "Started" : "Still not Started"} {""}
            </span>
          </Typography>
          <Typography>
            Score{" "}
            <span style={{ fontstyle: "italic", fontweight: "bold" }}>
              {detail.score}
            </span>
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>

);
  return (
    <Fragment>
      {getMatchCard()}
      {getDialog()}
    </Fragment>
  );
};

export default MyCard;
