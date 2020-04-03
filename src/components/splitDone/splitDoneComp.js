import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CheckCircle } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    width: "30vw"
  },
  doneIcon: {
    fontSize: "20vw",
    color: "#FF5A5F"
  },
  desc: {
    margin: "4vw"
  }
}));

function SplitDone(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CheckCircle className={classes.doneIcon} />
      <h1 className={classes.desc}>Image Splitted!</h1>
    </div>
  );
}

export default SplitDone;
