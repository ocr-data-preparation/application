import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Publish from "@material-ui/icons/Publish";
import GetApp from "@material-ui/icons/GetApp";
import history from "../History";

export default function Home() {
  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <h2>Choose your action</h2>
        <Grid container direction="row" justify="center" alignItems="center">
          <Box>
            <Fab>
              <Publish />
            </Fab>
            <div>Upload</div>
          </Box>
          <Box>
            <Link to={"/warning"}>
              <Fab onClick={() => history.push("/warning")}>
                <GetApp />
              </Fab>
            </Link>
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
