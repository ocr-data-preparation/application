import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CheckCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: "30vw",
  },
  doneIcon: {
    fontSize: "20vw",
    color: "#FF5A5F",
  },
  desc: {
    margin: "2vw",
  },
}));

function SplitDone(props) {
  const classes = useStyles();
  const booleanList = props.booleanList;
  let countImage = [];
  for (let i = 0; i < booleanList.length; i++) {
    let count = 0;
    for (let j = 0; j < booleanList[i].length; j++) {
      console.log(booleanList[i]);
      if (booleanList[i][j] === true) {
        count++;
      }
    }
    countImage.push(
      <p>
        Number {i}: {count} image(s)
      </p>
    );
  }
  return (
    <div className={classes.root}>
      {/* <CheckCircle className={classes.doneIcon} /> */}
      <h1 className={classes.desc}>Image Splitted!</h1>
      {countImage}
    </div>
  );
}

export default SplitDone;
