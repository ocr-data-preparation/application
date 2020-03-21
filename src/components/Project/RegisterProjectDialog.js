import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  Slide,
  IconButton,
  Container,
  FormControl,
  Input
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
  formControl: {
    marginTop: "10vw"
  },
  formItem: {
    margin: "2vw",
    padding: "0.5vw"
  },
  downloadContainer: {
    marginTop: "10vw",
    textAlign: "center",
    width: "75vw",
    marginBottom: "2vw"
  },
  downloadPhotoIcons: {
    fontSize: "10vw"
  },
  iconButton: {
    placeSelf: "flex-end",
    width: "3vw"
  },
  closeIcon: {
    fontSize: "2vw"
  },
  downloadButton: {
    width: "15vw",
    placeSelf: "center",
    textAlign: "center",
    borderRadius: "10px",
    padding: "1vw"
  },
  circularLoader: {
    placeSelf: "center"
  },
  hidden: {
    display: "none"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RegisterProjectDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
        Register Project
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
          <FormControl className={classes.formControl}>
            <Input
              className={classes.formItem}
              defaultValue="Project Name"
              inputProps={{ "aria-label": "description" }}
            />
            <Input
              className={classes.formItem}
              placeholder="Placeholder"
              inputProps={{ "aria-label": "description" }}
            />
            <Input
              className={classes.formItem}
              defaultValue="Disabled"
              disabled
              inputProps={{ "aria-label": "description" }}
            />
            <Input
              className={classes.formItem}
              defaultValue="Error"
              error
              inputProps={{ "aria-label": "description" }}
            />
          </FormControl>
        </Container>
      </Dialog>
    </React.Fragment>
  );
}
