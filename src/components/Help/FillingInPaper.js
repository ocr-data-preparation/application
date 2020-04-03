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
  },
  listDisplay: {
    textAlign: 'left'
  }
}));

function FillingInPaper() {
  const classes = useStyles();

  const srcTemplate = "template/blablabla";

  return (
    <div className={classes.root}>
      <h2>
        FILLING THE PAPER
      </h2>
      
      <Grid container spacing={3}>
        <Grid item xs={2}>  </Grid>
        <Grid item xs={6}>
          <Paper className={classes.contentDispay}>
            <h3>
              Download and Print the Template Picture
            </h3>
            <p>
              You can found the template on {srcTemplate}
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
              Fill in the Template
            </h3>
            <p>
              Write numbers from 0 to 9 in the box on the template
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
              Fill It Accordingly
            </h3>
            <ul className={classes.listDisplay}>
              <li>
                Write number '0' on the first row 
              </li>
              <li>
                Write number '1' on the second row 
              </li>
              <li>
                Write number '2' on the third row 
              </li>
              <li>
                And so on!
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs> </Grid>
      </Grid>
    </div>
  );
}

export default FillingInPaper;
