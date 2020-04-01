import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: "5vw",
    marginRight: "5vw",
    marginTop: "5vh",
    marginBottom: "5vh",
    color: "white",
    backgroundColor: "#FF5A5F",
    border: "none",
    fontSize: "2vw",
    fontFamily: "inherit"
  }
}));

function ModifiedButton(props) {
  const classes = useStyles();

  return (
    <Button
      id={props.id}
      style={props.style}
      onClick={props.OnClick}
      className={classes.button}
    >
      {props.buttonTag}
    </Button>
  );
}

export default ModifiedButton;
