import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import FillingInPaper from "./FillingInPaper";
import SubmittingTutorial from "./SubmittingTutorial";
import TakingPhoto from "./TakingPhoto";

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: "3vw",
        textAlign: "center",
        direction: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    root: {
      backgroundColor:"#6E87FF"
    },
    title: {
      textAlign: "center",
      color: 'white',
      fontSize: '50px'
    },
    display: {
      width: '70%'
    }
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
          <h1 className={classes.title}>
            TUTORIAL
          </h1>
          <Grid container className={classes.container}>
            <Paper className={classes.display}>
              <Grid>
                <FillingInPaper/>
              </Grid>
              <Grid>
                <TakingPhoto/>
              </Grid>
              <Grid>
                <SubmittingTutorial/>
              </Grid>
            </Paper>
          </Grid>
        </div>
    );
}

export default Help;
