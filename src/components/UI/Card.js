import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1vw",
    color: "white",
    backgroundColor: "#FF5A5F",
    width: "7vw",
    padding: "0.5vw",
  },
  content: {
    fontSize: "4vw",
    color: "#FF5A5F",
    backgroundColor: "white",
    margin: "0.5vw",
  },
}));

function ModifiedCard(props) {
  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.title}>
        <h1>{props.title}</h1>
        <h1 className={classes.content}>{props.content}</h1>
      </CardContent>
    </Card>
  );
}

export default ModifiedCard;
