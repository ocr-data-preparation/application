import React from "react";
import { URL_BASE_API } from "../../config";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  Slide,
  IconButton,
  Container,
  CircularProgress
} from "@material-ui/core";
import { CloudDownload, Close } from "@material-ui/icons";
import axios from "axios";

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
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UploadDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [directory, setDirectory] = React.useState("");
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

  const handleInputFolder = e => {
    setDownload({ ...download, loading: true });

    setTimeout(() => {
      setDownload({ ...download, loading: false });
    }, 3000);

    setDirectory(e.target.files[0]);
  };

  const handleDownload = async () => {
    try {
      const res = await axios.get(`${URL_BASE_API}/download`);
    } catch (err) {
      setDownload({ ...download, error: true });
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Download
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
        <Container className={classes.downloadContainer}>
          {directory ? (
            "Directory selected!"
          ) : (
            <CloudDownload className={classes.downloadPhotoIcons} />
          )}
        </Container>
        {download.loading ? (
          <CircularProgress className={classes.circularLoader} />
        ) : (
          <React.Fragment>
            <input
              className={classes.hidden}
              id="contained-button-file"
              directory={directory}
              webkitdirectory=""
              type="file"
              onChange={handleInputFolder}
            />
            <label
              htmlFor="contained-button-file"
              className={classes.downloadButton}
            >
              <Button variant="contained" component="span">
                Download
              </Button>
            </label>
          </React.Fragment>
        )}
      </Dialog>
    </React.Fragment>
  );
}
