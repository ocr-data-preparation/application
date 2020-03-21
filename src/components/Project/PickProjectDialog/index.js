import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  Slide,
  IconButton,
  Container
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import ProjectCard from "./ProjectCard";

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
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PickProjectDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const projects = [
    { id: 1, title: "Project 1", pixel: 30 },
    { id: 2, title: "Project 2", pixel: 50 },
    { id: 3, title: "Project 3", pixel: 30 }
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        fullScreen
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
          {projects.map(project => (
            <ProjectCard
              id={project.id}
              title={project.title}
              pixel={project.pixel}
            />
          ))}
        </Container>
      </Dialog>
    </React.Fragment>
  );
}
