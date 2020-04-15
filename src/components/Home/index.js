import React from "react";
import { Box, Grid, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import UploadDialog from "./UploadDialog";
import DownloadDialog from "./DownloadDialogNoPath";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "center",
    direction: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    padding: "20px",
    color: "white",
    fontSize: "5vw",
    marginTop: "2vw",
    marginBottom: "2vw"
  },
  miniContainer: {
    padding: "10px",
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    padding: "20px",
    justifyContent: "center",
    direction: "column"
  },
  buttonContainerRight: {
    padding: "20px",
    justifyContent: "center"
  },
  buttonLabel: {
    padding: "20px"
  },
  dialogTag: {
    marginTop: "3vw",
    fontSize: "3vw",
    color: "white"
  },
  helpButton: {
    color: "white",
    marginTop: "5vw",
    fontSize: "2vw",
    backgroundColor: "#6E87FF"
  },
  backButton: {
    color: "white",
    fontSize: "2vw",
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Link to="/">
        <IconButton>
          <ArrowBackIcon className={classes.backButton} />
        </IconButton>
      </Link>
      <Grid container className={classes.container}>
        <h2 className={classes.header}>Choose Your Action</h2>
        <Grid container className={classes.miniContainer}>
          <Box className={classes.buttonContainerRight}>
            <UploadDialog />
            <div className={classes.dialogTag}>Upload</div>
          </Box>
        </Grid>
        <Grid container className={classes.buttonContainer}>
          <Link to="/help">
            <Button
              variant="outlined"
              color="primary"
              className={classes.helpButton}
            >
              Need help? Click here
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
