import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  Slide,
  IconButton,
  Container,
  CircularProgress
} from "@material-ui/core";
import { CloudDownload, Close, CheckCircle, GetApp } from "@material-ui/icons";
import SuccessDialog from "./SuccessDialog";

import NotAvailable from "../UI/NotAvailable";

const useStyles = makeStyles(theme => ({
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
  },
  content: {
    textAlign: "center"
  },
  title: {
    color: "white",
    backgroundColor: "#FF5A5F",
    height: "15vw",
    width: "15vw"
  },
  titleIcon: {
    fontSize: "10vw"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DownloadDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [download, setDownload] = React.useState({
    downloaded: false,
    loading: false,
    error: false
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownload = () => {
    try {
      setDownload({ ...download, loading: true });

      setTimeout(async () => {
        // await axios.get(`${URL_BASE_API}/download`);
        setDownload({ ...download, downloaded: true, loading: false });
      }, 3000);
    } catch (err) {
      setDownload({ ...download, error: true });
    }
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        className={classes.title}
      >
        <GetApp className={classes.titleIcon} />
      </Button>
      {download.downloaded ? (
        <SuccessDialog message="Image saved" />
      ) : (
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
          <NotAvailable />
          {/* {download.loading ? (
            <CircularProgress className={classes.circularLoader} />
          ) : (
            <div class={classes.content}>
              <Container className={classes.downloadContainer}>
                {download.downloaded ? (
                  <CheckCircle className={classes.downloadPhotoIcons} />
                ) : (
                  <CloudDownload className={classes.downloadPhotoIcons} />
                )}
              </Container>
              <Button
                className={classes.downloadButton}
                variant="contained"
                onClick={handleDownload}
              >
                Download
              </Button>
            </div>
          )} */}
        </Dialog>
      )}
    </React.Fragment>
  );
}
