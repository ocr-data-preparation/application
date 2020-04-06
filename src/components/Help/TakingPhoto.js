import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import TakenImage from "../../assets/img/taken_image.jpg";

const useStyles = makeStyles((theme) => ({
  contentDispay: {
    padding: "1vw",
    color: "white",
    backgroundColor: "#FF5A5F",
  },
  root: {
    marginTop: "5vw",
  },
  listDisplay: {
    textAlign: "left",
  },
  section: {
    placeContent: "center",
  },
  description: {
    marginTop: "5vw",
    marginLeft: "10vw",
    marginRight: "10vw",
    textAlign: "left",
    fontSize: "1.5vw",
  },
  secondDescription: {
    marginLeft: "10vw",
    marginRight: "10vw",
    textAlign: "left",
    fontSize: "1.5vw",
  },
  removeTopMargin: {
    marginTop: "0vw",
  },
  image: {
    height: "30vw",
  },
}));

function TakingPhoto() {
  const classes = useStyles();

  const minRes = "8MP";

  return (
    <div className={classes.root}>
      <h2>2. TAKING PHOTO</h2>

      <Grid className={classes.description}>
        <h3>Check Your Camera's Resolution</h3>
        <p>
          Make sure your camera's resolution will not make the final cropped
          image broken. The minimum resolution of your camera is {minRes}.
          Scanning the images are preferable. The result should be like the
          following image.
        </p>
      </Grid>

      <Grid>
        <img src={TakenImage} alt={""} className={classes.image} />
        <p>Image taken from camera</p>
      </Grid>

      <Grid>
        <img src={TakenImage} alt={""} className={classes.image} />
        <p>Image taken from scanner</p>
      </Grid>

      <Grid className={classes.secondDescription}>
        <h3>Check Image Orientation</h3>
        <p>
          The image must be taken as landscape. Row containing number '0's must
          be on the top and row containing number '9's must be on the bottom.
        </p>
      </Grid>
    </div>
  );
}

export default TakingPhoto;
