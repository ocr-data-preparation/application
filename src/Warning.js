import React from 'react';
import {Grid} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import { red } from '@material-ui/core/colors';
import history from './History';
import './App.css';

function Warning() {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid container direction="column" alignItems="center">
        <div>
          <WarningRoundedIcon style={{ color: red[500], fontSize: 100 }}/>
        </div>
        <h1>
            WARNING
        </h1>
        <p>
          no available file can be found
        </p>
      </Grid>
      <Fab variant="extended" onClick={() => history.push('/')}>
        Back to Home
      </Fab>
    </Grid>
  );
}

export default Warning;
