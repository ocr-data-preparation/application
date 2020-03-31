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
        marginTop: "1vw",
        textAlign: "center",
        direction: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    display: {
      width: '70%'
    },
    header: {
        marginTop: "-30px",
        padding: "50px"
    }
}));

function Help() {
    const classes = useStyles();
    return (
        <div>
          <Link to="/home">
            <IconButton aria-label="close">
              <ArrowBackRoundedIcon />
            </IconButton>
          </Link>
          <Grid container className={classes.container}>
            <Paper className={classes.display}>
              <h1>
                TUTORIAL
              </h1>
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
