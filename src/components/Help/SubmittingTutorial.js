import React from "react";
import { Grid, Paper, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { URL_BASE_API } from "../../config";
import axios from "axios";

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

  const minRes = "8MP";
  
  return (
    <div className={classes.root}>
      <h2>
        TAKING PHOTO
      </h2>
      
      <Grid container spacing={3}>
        <Grid item xs={2}>  </Grid>
        <Grid item xs={6}>
          <Paper className={classes.contentDispay}>
            <h3>
              Check Your Camera's Resolution
            </h3>
            <p>
              Make sure your camera's resolution will not make the final cropped image broken
            </p>
            <p>
              The minimum resolution of your camera is {minRes}
            </p>
            <p>
              Scanning the images are preferable
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
              Check Image Orientation
            </h3>
            <p>
              The image must be taken horizontally
            </p>
            <p>
              Row containing number '0's must be on the top
            </p>
            <p>
              Row containing number '9's must be on the bottom
            </p>
          </Paper>
        </Grid>
        <Grid item xs={2}> </Grid>
      </Grid>
    </div>
  );
}

export default SubmittingTutorial;
