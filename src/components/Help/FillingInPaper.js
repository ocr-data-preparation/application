import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
}));

function FillingInPaper() {
  const classes = useStyles();
  return (
    <div>
      <h2>
        FILLING THE PAPER
      </h2>
      <Grid container>
        <Grid item xs={12}>
          Lalala
        </Grid>
      </Grid>
    </div>
  );
}

export default FillingInPaper;
