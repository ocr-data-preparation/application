import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import PickProjectDialog from "./PickProjectDialog";
import RegisterProjectDialog from "./RegisterProjectDialog";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "10vw",
    textAlign: "center",
    direction: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  miniContainer: {
    padding: "10px",
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  dialog: {
    marginLeft: "5vw",
    marginRight: "5vw",
    marginTop: "5vh",
    marginBottom: "5vh",
    height: "15vw",
    width: "15vw",
    color: "white",
    backgroundColor: "#FF5A5F",
    border: "none",
    fontSize: "2vw",
    fontFamily: "inherit"
  }
}));

function Project() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.container}>
        <Grid container className={classes.miniContainer}>
          <PickProjectDialog dialogClass={classes.dialog} />
          <RegisterProjectDialog dialogClass={classes.dialog} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Project;
