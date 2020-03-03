import React from 'react';
import {Grid, IconButton} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import CreateIcon from '@material-ui/icons/Create';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import Publish from '@material-ui/icons/Publish';
import GetApp from '@material-ui/icons/GetApp';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import history from './History';
import './App.css';

function Help() {
  return (
      <div>
        <IconButton aria-label="close" onClick={() => history.push('/')}>
            <ArrowBackRoundedIcon/>
        </IconButton>
        <Grid container direction="column" justify="center" alignItems="center">
            <h2>
                Choose the Tutorial
            </h2>
            <Grid container spacing={3}>
                <Grid item xs>
                </Grid>
                <Grid container xs direction = "column" alignItems = "center">
                    <Fab onClick={() => history.push('/FillingInPaper')}><CreateIcon/></Fab>
                    <div>
                        filling in the paper
                    </div>
                </Grid>
                <Grid container xs direction = "column" alignItems = "center">
                    <Fab onClick={() => history.push('/TakingPhoto')}><CameraAltOutlinedIcon/></Fab>
                    <div>
                        taking photo
                    </div>
                </Grid>
                <Grid container xs direction = "column" alignItems = "center">
                    <Fab onClick={() => history.push('/SubmittingTutorial')}><Publish/></Fab>
                    <div>
                        submitting
                    </div>
                </Grid>
                <Grid container xs direction = "column" alignItems = "center">
                    <Fab onClick={() => history.push('/DownloadingTutorial')}><GetApp/></Fab>
                    <div>
                        downloading
                    </div>
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
        </Grid>
      </div>
  );
}

export default Help;
