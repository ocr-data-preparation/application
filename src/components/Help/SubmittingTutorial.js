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
          Click the "Upload" button on the home page. Choose the image you want
          to process, or drag and drop the image on to the page. Click the
          "Submit" Button to proceed.
        </p>
      </Grid>

      <Grid className={classes.secondDescription}>
        <h3>Choosing Image Parts</h3>
        <p>
          Now, the image should have been splitted, but not yet saved into the
          project folder. At this point, The application should show the result
          of the initial splitting. Choose the parts you want to exclude by
          clicking on the buttons in the grid. Yellow means that the part is
          chosen to be saved. You can also choose the options that you want to
          apply to the split images. After choosing the options, click apply to
          preview the resulting images. Click the "Submit" button when all
          excluded parts have been chosen (not yellow anymore) and the desired
          options have been applied.
        </p>
      </Grid>
    </div>
  );
}

export default SubmittingTutorial;
