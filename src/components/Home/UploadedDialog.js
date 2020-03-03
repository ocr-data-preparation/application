import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Dialog, Slide, Container } from "@material-ui/core";
import { Done } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: "parent"
  },
  doneButton: {
    width: "15vw",
    borderRadius: "10px",
    placeSelf: "center"
  },
  doneIcon: {
    color: "green",
    fontSize: "80pt",
    placeSelf: "center"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UploadedDialog() {
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
