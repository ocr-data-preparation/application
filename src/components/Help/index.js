import React from "react";
import { Link } from "react-router-dom";
import { Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import CreateIcon from "@material-ui/icons/Create";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import Publish from "@material-ui/icons/Publish";
import GetApp from "@material-ui/icons/GetApp";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: "10vw",
        textAlign: "center",
        direction: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        marginTop: "-30px",
        padding: "50px"
    }
}));

function Help() {
    const classes = useStyles();
    return (
        <div>
          <Link to="/">
            <IconButton aria-label="close">
              <ArrowBackRoundedIcon />
            </IconButton>
          </Link>
          <Grid container className={classes.container}>
              <h2 className={classes.header}>
                  Choose the Tutorial
              </h2>
              <Grid container spacing={3}>
                  <Grid item xs>
                  </Grid>
                  <Grid container xs direction = "column" alignItems = "center">
                    <Link to="/help/paper">
                      <Fab>
                        <CreateIcon />
                      </Fab>
                    </Link>
                    <div>filling in the paper</div>
                  </Grid>
                  <Grid container xs direction = "column" alignItems = "center">
                    <Link to="/help/take">
                      <Fab>
                        <CameraAltOutlinedIcon />
                      </Fab>
                    </Link>
                    <div>taking photo</div>
                  </Grid>
                  <Grid container xs direction = "column" alignItems = "center">
                    <Link to="/help/submit">
                      <Fab>
                        <Publish />
                      </Fab>
                    </Link>
                    <div>submitting</div>
                  </Grid>
                  <Grid container xs direction = "column" alignItems = "center">
                    <Link to="/help/download">
                      <Fab>
                        <GetApp />
                      </Fab>
                    </Link>
                    <div>downloading</div>
                  </Grid>
                  <Grid item xs>
                  </Grid>
              </Grid>
          </Grid>
        </div>
    );
}

export default Help;
