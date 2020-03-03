import React from 'react';
import {Grid, IconButton} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import history from './History';
import './App.css';

function SubmittingTutorial() {
  return (
    <div>
        <div alignItems="right">
            <IconButton aria-label="close" onClick={() => history.push('/Help')}>
                <CloseRoundedIcon/>
            </IconButton>
        </div>
        <Grid container direction="column" justify="center" alignItems="center">
            <div>1</div>
            <div>Pencet tombol upload</div>
        </Grid>
    </div>
  );
}

export default SubmittingTutorial;
