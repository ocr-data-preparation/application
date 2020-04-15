import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import TakenImageCamera from "../../assets/img/taken_image_camera.jpg";
import TakenImageScanner from "../../assets/img/taken_image_scanner.jpg";

const useStyles = makeStyles((theme) => ({
  contentDispay: {
    padding: "1vw",
    color: "white",
    backgroundColor: "#FF5A5F",
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
    <div>
      <h1>2. TAKING PHOTO</h1>

      <Grid className={classes.description}>
        <h3>Check Your Camera's Resolution</h3>
        <p>
          Your camera's resolution must at least be {minRes} for the application
          to produce desirable results. Of course, scannned images will produce
          better results most of the time than a photo taken with a camera. The
          result should be like the following image.
        </p>
      </Grid>

      <Grid>
        <img src={TakenImageCamera} alt={""} className={classes.image} />
        <p>Image taken from camera</p>
      </Grid>

      <Grid>
        <img src={TakenImageScanner} alt={""} className={classes.image} />
        <p>Image taken from scanner</p>
      </Grid>

      <Grid className={classes.secondDescription}>
        <h3>Check Image Orientation</h3>
        <p>
          The image's orientation must be landscape and the numbers should be on
          the correct position. The row containing number '0's must be on the
          top and the row containing number '9's must be on the bottom.
        </p>
      </Grid>
    </div>
  );
}

export default TakingPhoto;
