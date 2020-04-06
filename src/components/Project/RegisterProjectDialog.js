import React, { useState } from "react";
import axios from "axios";
import Cookie from "universal-cookie";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  Slide,
  IconButton,
  Container,
  TextField,
  Typography,
  CircularProgress
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

import { URL_BASE_API } from "../../config";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
  formItem: {
    marginTop: "2vw",
    width: "30vw"
  },
  iconButton: {
    placeSelf: "flex-end",
    width: "3vw"
  },
  closeIcon: {
    fontSize: "2vw"
  },
  form: {
    placeItems: "center",
    display: "inline-grid"
  },
  title: {
    fontSize: "3vw"
  },
  buttonRegister: {
    marginTop: "5vw",
    placeSelf: "center",
    marginBottom: "5vh",
    color: "white",
    backgroundColor: "#FF5A5F"
  },
  loading: {
    margin: "2vw"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const cookie = new Cookie();

export default function RegisterProjectDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [projects, setProjects] = useState({
    data: {},
    loading: false,
    error: false
  });

  const postProjectsData = async project =>
    await axios({
      method: "POST",
      url: `${URL_BASE_API}/project/`,
      data: { project_name: project.project_name, pixels: project.pixels }
    });

  const createProjectData = async () => {
    try {
      setProjects({ ...projects, loading: true });
      const res = await postProjectsData(projects.data);

      setTimeout(function() {
        setProjects({ ...projects, loading: false });
        cookie.set("project-id", res.data.id);
        window.location.replace(`http://localhost:3000/home`);
      }, 3000);
    } catch (e) {
      setProjects({ ...projects, error: true });
    }
  };

  const handleProjectNameChange = e => {
    projects.data.project_name = e.target.value;
    setProjects(projects);
  };

  const handlePixelsChange = e => {
    projects.data.pixels = parseInt(e.target.value);
    setProjects(projects);
  };

  return (
    <React.Fragment>
      <Button
        className={props.dialogClass}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Register Project
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
        <Container className={classes.form}>
          <h2 className={classes.title}>Project</h2>
          <TextField
            variant="outlined"
            label="Project Name"
            className={classes.formItem}
            value={projects.data && projects.data.project_name}
            onChange={handleProjectNameChange}
          />
          <TextField
            variant="outlined"
            label="Desired Pixel"
            className={classes.formItem}
            type="number"
            value={projects.data && projects.data.pixels}
            onChange={handlePixelsChange}
          />
          {projects.loading ? (
            <CircularProgress className={classes.loading} />
          ) : (
            <Button
              variant="contained"
              className={classes.buttonRegister}
              onClick={createProjectData}
            >
              <Typography variant="h6">Register</Typography>
            </Button>
          )}
        </Container>
      </Dialog>
    </React.Fragment>
  );
}
