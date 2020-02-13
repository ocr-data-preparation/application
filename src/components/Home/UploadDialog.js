import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  Slide,
  IconButton,
  Container
} from "@material-ui/core";
import { InsertPhoto, Close } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  uploadContainer: {
    marginTop: "10vw",
    textAlign: "center",
    width: "75vw",
    marginBottom: "2vw"
  },
  insertPhotoIcons: {
    fontSize: "10vw"
  },
  iconButton: {
    placeSelf: "flex-end",
    width: "3vw"
  },
  closeIcon: {
    fontSize: "2vw"
  },
  chooseImageButton: {
    width: "15vw",
    placeSelf: "center",
    borderRadius: "10px",
    padding: "1vw"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UploadDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
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
        <Container className={classes.uploadContainer}>
          <InsertPhoto className={classes.insertPhotoIcons} />
        </Container>
        <Button variant="contained" className={classes.chooseImageButton}>
          Choose Image
        </Button>
      </Dialog>
    </div>
  );
}
