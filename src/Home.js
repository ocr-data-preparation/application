import React from 'react';
import {Box, Grid} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Publish from '@material-ui/icons/Publish';
import GetApp from '@material-ui/icons/GetApp';
import history from './History';
import './App.css';

function Home() {
  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <h2>
          Choose your action
        </h2>
        <Grid container direction="row" justify="center" alignItems="center">
          <Box>
            <Fab><Publish /></Fab>
            <div>Upload</div>
          </Box>
          <Box>
            <Fab onClick={() => history.push('/Warning')}><GetApp /></Fab>
            <div>Download</div>
          </Box>
        </Grid>
        <Fab variant="extended" onClick={() => history.push('/Help')}>
            Need help? Click here
        </Fab>
      </Grid>
    </div>
  );
}

export default Home;
