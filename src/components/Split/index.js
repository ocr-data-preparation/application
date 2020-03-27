import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import Buttons from "./Buttons"

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "2vw",
    textAlign: "center",
    direction: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}));

function Split() {
  const classes = useStyles();
  return (
    <div>
      <Buttons/>
      <Grid container className={classes.container}>
          <Link to="/">
            <Fab variant="extended">
                Split
            </Fab>
          </Link>
      </Grid>
    </div>
  );
}

export default Split;

