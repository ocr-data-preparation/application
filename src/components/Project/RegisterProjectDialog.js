import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  Slide,
  IconButton,
  Container,
  TextField,
  Typography
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

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
    marginBottom: "5vw"
  },
  buttonRegister: {
    marginTop: "5vw",
    placeSelf: "center"
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
        <Container className={classes.form}>
          <Typography variant="h2" className={classes.title}>
            Register Project
          </Typography>
          <TextField
            variant="outlined"
            label="Project Name"
            className={classes.formItem}
          />
          <TextField
            variant="outlined"
            label="Desired Pixel"
            className={classes.formItem}
          />
          <Button variant="contained" className={classes.buttonRegister}>
            <Typography variant="h6">Register</Typography>
          </Button>
        </Container>
      </Dialog>
    </React.Fragment>
  );
}
