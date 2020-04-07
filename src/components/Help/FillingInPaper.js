import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Button from "../UI/Button";

import FilledTemplateImage from "../../assets/img/paper_template.png";
import TemplateImage from "../../assets/img/template.png";

const useStyles = makeStyles((theme) => ({
  contentDispay: {
    padding: "1vw",
    color: "white",
    backgroundColor: "#FF5A5F",
  },
  root: {},
  listDisplay: {
    textAlign: "left",
  },
  templateImage: {
    height: "40vw",
  },
  section: {
    placeContent: "center",
  },
  description: {
    marginTop: "5vw",
    marginLeft: "10vw",
    marginRight: "10vw",
    textAlign: "left",
    fontSize: "1.5vw",
  },
  secondDescription: {
    marginLeft: "10vw",
    marginRight: "10vw",
    textAlign: "left",
    fontSize: "1.5vw",
  },
  removeTopMargin: {
    marginTop: "0vw",
  },
}));

function FillingInPaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <h1>1. FILLING THE PAPER</h1>
        <Grid className={classes.description}>
          <h3>Download and Print the Template Picture</h3>
          <p>
            A template has been provided for the paper to be used as a place to
            fill in numbers such as the following image. You can download the
            template on button below.
          </p>
        </Grid>
        <Grid>
          <Link to={TemplateImage} target="_blank" download>
            <img
              src={TemplateImage}
              alt={""}
              className={classes.templateImage}
            />
            <Button
              buttonTag={"Download Template"}
              style={{ marginTop: "0vw" }}
            />
          </Link>
        </Grid>
      </div>

      <Grid className={classes.secondDescription}>
        <h3 className={classes.removeTopMargin}>Fill in the Template</h3>
        <p>
          Print the template and write down numbers from 0 to 9 in the small
          cell just like the following image.
        </p>

        <h3>Fill It Accordingly</h3>
        <ul className={classes.listDisplay}>
          <li>Write number '0' on the first row.</li>
          <li>Write number '1' on the second row.</li>
          <li>Write number '2' on the third row.</li>
          <li>And so on!</li>
        </ul>
      </Grid>

      <Grid>
        <img
          src={FilledTemplateImage}
          alt={""}
          className={classes.templateImage}
        />
      </Grid>
    </div>
  );
}

export default FillingInPaper;
