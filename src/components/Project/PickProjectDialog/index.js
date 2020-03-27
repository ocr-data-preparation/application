import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  Slide,
  IconButton,
  Container,
  CircularProgress
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

import ProjectCard from "./ProjectCard";
import { URL_BASE_API } from "../../../config";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    backgroundColor: "whitesmoke"
  },
  iconButton: {
    placeSelf: "flex-end",
    width: "3vw"
  },
  closeIcon: {
    fontSize: "2vw"
  },
  loading: {
    margin: "2vw"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PickProjectDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [projects, setProjects] = useState({
    data: [],
    loading: true,
    error: false
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getProjectsData = async () =>
    await axios.get(`${URL_BASE_API}/project`);

  const fetchProjectData = async () => {
    try {
      setProjects({ ...projects, loading: true });
      const response = await getProjectsData();
      setTimeout(function() {
        setProjects({ ...projects, data: response.data, loading: false });
      }, 3000);
    } catch (e) {
      setProjects({ ...projects, error: true });
    }
  };

  useEffect(() => {
    fetchProjectData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Button
        className={props.dialogClass}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Pick Project
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
        <Container className={classes.root}>
          {projects.loading ? (
            <CircularProgress className={classes.loading} />
          ) : (
            projects.data.map(project => (
              <ProjectCard
                id={project.id}
                title={project.title}
                pixel={project.pixels}
              />
            ))
          )}
        </Container>
      </Dialog>
    </React.Fragment>
  );
}
