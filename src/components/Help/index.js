import React from "react";
import { Link } from "react-router-dom";
import { Grid, IconButton } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import CreateIcon from "@material-ui/icons/Create";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import Publish from "@material-ui/icons/Publish";
import GetApp from "@material-ui/icons/GetApp";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import history from "../History";

function Help() {
  return (
    <div>
      <Link to="/">
        <IconButton aria-label="close" onClick={() => history.push("/")}>
          <ArrowBackRoundedIcon />
        </IconButton>
      </Link>
      <Grid container direction="column" justify="center" alignItems="center">
        <h2>Choose the Tutorial</h2>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid container xs direction="column" alignItems="center">
            <Link to="/help/paper">
              <Fab onClick={() => history.push("/help/paper")}>
                <CreateIcon />
              </Fab>
            </Link>
            <div>filling in the paper</div>
          </Grid>
          <Grid container xs direction="column" alignItems="center">
            <Link to="/help/take">
              <Fab onClick={() => history.push("/help/take")}>
                <CameraAltOutlinedIcon />
              </Fab>
            </Link>
            <div>taking photo</div>
          </Grid>
          <Grid container xs direction="column" alignItems="center">
            <Link to="/help/submit">
              <Fab onClick={() => history.push("/help/submit")}>
                <Publish />
              </Fab>
            </Link>
            <div>submitting</div>
          </Grid>
          <Grid container xs direction="column" alignItems="center">
            <Link to="/help/download">
              <Fab onClick={() => history.push("/help/download")}>
                <GetApp />
              </Fab>
            </Link>
            <div>downloading</div>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Help;
