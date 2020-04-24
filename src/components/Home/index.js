import React from "react";
import { Box, Grid, Button, IconButton,Slide,Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Close } from "@material-ui/icons";

import UploadDialog from "./UploadDialog";
import DownloadDialog from "./DownloadDialogNoPath";
import { URL_BASE_API } from "../../config";


import axios from "axios";
import Cookie from "universal-cookie";
import ProjectDetails from "./ProjectDetails";

const cookie = new Cookie();


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
  },
  iconButton: {
    placeSelf: "flex-end",
    width: "3vw"
  },
  closeIcon: {
    fontSize: "2vw"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const getProjectName = async (id) => {
  let res = await axios.get(URL_BASE_API + "/project/" + id);
  return res.data.project_name;
};

const getFolderName = async () =>{
  const projectid = await cookie.get("project-id");
  const project_name = await getProjectName(projectid);
  //console.log(projectid+ " - " + project_name);
  return (projectid +" - "+project_name);
}

function Home() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
 

  let projectID = cookie.get("project-id");


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


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
          <div style = {{width: 20}}></div>
          <Button
              variant="outlined"
              color="primary"
              className={classes.helpButton}
              onClick= {handleClickOpen}
            >
              See project detail
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
              >
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                className={classes.iconButton}
              >
                <Close className={classes.closeIcon} />
              </IconButton>
              <div style ={{width:500}}></div>
              <div style = {{paddingLeft:10, paddingRight:10}}>
                <ProjectDetails project_id = {cookie.get("project-id")}/>
              </div>
              
            </Dialog>
        </Grid>

        
      </Grid>
    </div>
  );
}

export default Home;
