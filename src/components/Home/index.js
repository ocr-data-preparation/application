import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import history from "../History";

import UploadDialog from "./UploadDialog";
import DownloadDialog from "./DownloadDialogNoPath";

export default function Home() {
  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <h2>Choose your action</h2>
        <Grid container direction="row" justify="center" alignItems="center">
          <Box>
            <UploadDialog />
            <div>Upload</div>
          </Box>
          <Box>
            <DownloadDialog />
            <div>Download</div>
          </Box>
        </Grid>
        <Link to={"/help"}>
          <Fab variant="extended" onClick={() => history.push("/help")}>
            Need help? Click here
          </Fab>
        </Link>
      </Grid>
    </div>
  );
}
