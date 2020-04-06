import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contentDispay: {
    padding: "1vw",
    color: "white",
    backgroundColor: "#FF5A5F",
  },
  listDisplay: {
    textAlign: "left",
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

function SubmittingTutorial() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.section}></div>
      <h1>3. SUBMITTING</h1>

      <Grid className={classes.description}>
        <h3>Upload</h3>
        <p>
          Click on the "Upload" button on the home page. Choose the image you
          want to crop, or drag and drop the image on to the page. Click
          "Submit" Button.
        </p>
      </Grid>

      <Grid className={classes.secondDescription}>
        <h3>Choosing Image Parts</h3>
        <p>
          The image should have been cropped, yet not saved yet. How the system
          cropped the image shoud be shown. Choose the parts you want to exclude
          by clicking on the chosen parts Click "Submit" button when all
          excluded parts have been chosen.
        </p>
      </Grid>
    </div>
  );
}

export default SubmittingTutorial;
