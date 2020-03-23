import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Publish from "@material-ui/icons/Publish";
import GetApp from "@material-ui/icons/GetApp";
import { Link } from "react-router-dom";

import UploadDialog from "./UploadDialog";
import DownloadDialog from "./DownloadDialogNoPath";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "10vw",
    textAlign: "center",
    direction: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    padding: "20px"
  },
  miniContainer: {
    padding: "10px",
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    padding: "20px",
    justifyContent: "center"
  },
  buttonLabel: {
    padding: "20px"
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.container}>
        <h2 className={classes.header}>Choose your action</h2>
        <Grid container className={classes.miniContainer}>
          <Box className={classes.buttonContainer}>
            <UploadDialog />
            <div>Upload</div>
          </Box>
          <Box className={classes.buttonContainer}>
            <DownloadDialog />
            <div>Download</div>
          </Box>
        </Grid>
        <Link to="/help">
          <Fab variant="extended">Need help? Click here</Fab>
        </Link>
      </Grid>
    </div>
  );
}

export default Home;
