import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "../UI/Card";
import { CheckCircle } from "@material-ui/icons";
import Buttons from "../Split/Buttons";
import Button from "../UI/Button";

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
  rowCardContainer: {
    display: "flex",
    placeContent: "center",
  },
  cardContainer: {
    display: "block",
  },
  card: {
    margin: "1vw",
  },
}));

function SplitDone(props) {
  const classes = useStyles();
  const booleanList = props.booleanList;
  const cardContainer = [];
  const [data, setData] = useState({
    submit: false,
    back: false,
    excludes: props.excludes,
    path: props.path,
    squared_path: props.squaredPath,
  });

  let countImage = [];

  for (let i = 0; i < booleanList.length; i++) {
    let count = 0;
    for (let j = 0; j < booleanList[i].length; j++) {
      // console.log(booleanList[i]);
      if (booleanList[i][j] === true) {
        count++;
      }
    }
    countImage.push(
      <div className={classes.card}>
        <Card title={i} content={count} />
      </div>
    );

    if (i % 3 === 2 || i === booleanList.length - 1) {
      cardContainer.push(
        <div className={classes.rowCardContainer}>{countImage}</div>
      );
      countImage = [];
    }
  }

  return (
    <div className={classes.root}>
      <h1 className={classes.desc}>Image Splitted!</h1>
      <div className={classes.cardContainer}>{cardContainer}</div>
      {!data.back ? (
        <div>
          <CheckCircle className={classes.doneIcon} />
          <h1 className={classes.desc}>Image Splitted!</h1>
          {countImage}
        </div>
      ) : (
        <Buttons
          squared_path={data.squared_path}
          path={data.path}
          excludes={data.excludes}
        />
      )}
    </div>
  );
}

export default SplitDone;
