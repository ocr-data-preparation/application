import React from 'react';
import {Grid, IconButton} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import history from './History';
import './App.css';

function DownloadingTutorial() {
  return (
    <div>
        <div alignItems="right">
            <IconButton aria-label="close" onClick={() => history.push('/Help')}>
                <CloseRoundedIcon/>
            </IconButton>
        </div>
        <Grid container direction="column" justify="center" alignItems="center">
            <div>1</div>
            <Fab variant="extended">
                Download Paper Template
            </Fab>
        </Grid>
    </div>
  );
}

export default DownloadingTutorial;
