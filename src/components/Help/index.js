import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Paper, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import FillingInPaper from "./FillingInPaper";
import SubmittingTutorial from "./SubmittingTutorial";
import TakingPhoto from "./TakingPhoto";

import containerBackground from "../../assets/img/flat.gif";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "3vw",
    textAlign: "center",
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2vw",
  },
  title: {
    textAlign: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "2vw",
  },
  display: {
    width: "70%",
    padding: "3vw",
  },
}));

function Help() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to="/home">
        <IconButton aria-label="close">
          <ArrowBackRoundedIcon />
        </IconButton>
      </Link>
      <Grid container className={classes.title}>
        <h1>TUTORIAL</h1>
      </Grid>
      <Grid container className={classes.container}>
        <Paper className={classes.display}>
          <FillingInPaper />
          <Divider />
          <TakingPhoto />
          <Divider />
          <SubmittingTutorial />
        </Paper>
      </Grid>
    </div>
  );
}

export default Help;
