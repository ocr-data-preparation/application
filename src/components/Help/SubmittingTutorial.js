import React from "react";
import { Grid, Paper, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  contentDispay: {
    padding: '1vw',
    color: 'white',
    backgroundColor: "#FF5A5F"
  },
  root: {
    marginTop: "5vw"
  },
  listDisplay: {
    textAlign: 'left'
  }
}));

function SubmittingTutorial() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <h2>
        SUBMITTING
      </h2>
      
      <Grid container spacing={3}>
        <Grid item xs={2}>  </Grid>
        <Grid item xs={6}>
          <Paper className={classes.contentDispay}>
            <h3>
              Saving
            </h3>
            <p>
              Save your image on local computer
            </p>
          </Paper>
        </Grid>
        <Grid item xs> </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs> </Grid>
        <Grid item xs={6}>
          <Paper className={classes.contentDispay}>
            <h3>
              Upload
            </h3>
            <p>
              Click on the "Upload" button on the home page
            </p>
            <p>
              Choose the image you want to crop, or drag and drop the image on to the page
            </p>
            <p>
              Click "Submit" Button
            </p>
          </Paper>
        </Grid>
        <Grid item xs={2}> </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={2}>  </Grid>
        <Grid item xs={6}>
          <Paper className={classes.contentDispay}>
            <h3>
              Choosing Image Parts
            </h3>
            <p>
              The image should have been cropped, yet not saved yet
            </p>
            <p>
              How the system cropped the image shoud be shown
            </p>
            <p>
              Choose the parts you want to exclude by clicking on the chosen parts
            </p>
            <p>
              Click "Submit" button when all excluded parts have been chosen
            </p>
          </Paper>
        </Grid>
        <Grid item xs> </Grid>
      </Grid>
    </div>
  );
}

export default SubmittingTutorial;
