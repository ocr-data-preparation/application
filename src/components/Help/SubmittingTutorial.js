import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Link } from "react-router-dom";

function SubmittingTutorial() {
  return (
    <div>
      <div alignItems="right">
        <Link to="/help">
          <IconButton aria-label="close">
            <CloseRoundedIcon />
          </IconButton>
        </Link>
      </div>
      <Grid container direction="column" justify="center" alignItems="center">
        <div>1</div>
        <div>Pencet tombol upload</div>
      </Grid>
    </div>
  );
}

export default SubmittingTutorial;
