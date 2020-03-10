import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  Slide,
  Container,
  Typography
} from "@material-ui/core";
import { Done } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    height: "100vh"
  },
  doneButton: {
    width: "15vw",
    borderRadius: "10px"
  },
  doneIcon: {
    color: "green",
    fontSize: "80pt"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SuccessDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Container className={classes.flexContainer}>
          <Done className={classes.doneIcon} />
          <Typography>{props.message}</Typography>
          <Button
            variant="contained"
            className={classes.doneButton}
            onClick={handleClose}
          >
            Done
          </Button>
        </Container>
      </Dialog>
    </div>
  );
}
