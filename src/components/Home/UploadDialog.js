import React, { useEffect, useState } from "react";
import axios from "axios";
import fs from "fs";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  Slide,
  IconButton,
  Container,
  Fab
} from "@material-ui/core";
import { InsertPhoto, Close, Publish } from "@material-ui/icons";
import { useDropzone } from "react-dropzone";

import Buttons from "../Split/Buttons";
import ModifiedButton from "../UI/Button";
import { URL_BASE_API } from "../../config";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: "auto",
  padding: 4,
  boxSizing: "border-box"
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img = {
  display: "block",
  width: "25vw",
  height: "auto"
};
const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  uploadContainer: {
    textAlign: "center",
    width: "auto",
    marginBottom: "2vw"
  },
  insertPhotoIcons: {
    marginTop: "2vw",
    marginBottom: "3vw",
    fontSize: "20vw"
  },
  iconButton: {
    placeSelf: "flex-end",
    width: "3vw"
  },
  closeIcon: {
    fontSize: "2vw"
  },
  chooseImageButton: {
    width: "auto",
    placeSelf: "center",
    borderRadius: "10px",
    padding: "1vw"
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

export default function UploadDialog() {
  const classes = useStyles();
  const [data, setData] = useState({
    submit: false,
    excludes: null,
    path: null,
    squared_path: null
  });
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      var button = (document.getElementById("bt1").style.display = "none");
      button = document.getElementById("bt2").style.display = "initial";
      document.getElementById("icon").style.display = "none";
      document.getElementById("dz2").style.display = "none";
      document.getElementById("image").style.display = "initial";
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });
  function onChange(e) {
    var button = (document.getElementById("bt1").style.display = "none");
    button = document.getElementById("bt2").style.display = "initial";
    document.getElementById("icon").style.display = "none";
    document.getElementById("dz2").style.display = "none";
    document.getElementById("image").style.display = "initial";
  }
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    document.getElementById("image").style.display = "none";
  };

  const getInitialExcludesArray = async image => {
    let formData = new FormData();
    formData.append("image", image);

    const res = await axios({
      method: "post",
      url: `${URL_BASE_API}/image/submit`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" }
    });

    return res.data;
  };

  const handleSubmit = async () => {
    const result = await getInitialExcludesArray(files[0]);

    setData({
      ...data,
      submit: true,
      excludes: result.excludes,
      path: result.path,
      squared_path: result.squared_image_path
    });
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        className={classes.title}
      >
        <Publish className={classes.titleIcon} />
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
        {data.submit ? (
          <Buttons
            squared_path={data.squared_path}
            path={data.path}
            excludes={data.excludes}
          />
        ) : (
          <Container className={classes.uploadContainer}>
            <h2>Insert Image</h2>
            <div
              {...getRootProps({ className: "dropzone" })}
              onChange={onChange}
            >
              <input {...getInputProps()} type="file" />
              <InsertPhoto id="icon" className={classes.insertPhotoIcons} />
              <div
                style={thumbsContainer}
                id="image"
                style={{ display: "none" }}
              >
                {thumbs}
              </div>
            </div>
            <div
              {...getRootProps({ className: "dropzone" })}
              id="dz2"
              onChange={onChange}
            >
              <input {...getInputProps()} type="file" />
              <ModifiedButton id="bt1" buttonTag="Choose Image" />
            </div>
            <ModifiedButton
              id="bt2"
              style={{ display: "none" }}
              OnClick={handleSubmit}
              buttonTag="Submit"
            />
          </Container>
        )}
      </Dialog>
    </div>
  );
}
