import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "10vw",
    textAlign: "center",
    direction: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}));

function Warning() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid container direction="column" alignItems="center">
        <div>
          <WarningRoundedIcon style={{ color: red[500], fontSize: 100 }}/>
        </div>
        <h1>
            WARNING
        </h1>
        <p>
          no available file can be found
        </p>
      </Grid>
      <Link to="/">
        <Fab variant="extended">
          Back to Home
        </Fab>
      </Link>
    </Grid>
  );
}

export default Warning;

