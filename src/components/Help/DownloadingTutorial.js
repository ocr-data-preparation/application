import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Link } from "react-router-dom";

function DownloadingTutorial() {
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
        <Fab variant="extended">Download Paper Template</Fab>
      </Grid>
    </div>
  );
}

export default DownloadingTutorial;
