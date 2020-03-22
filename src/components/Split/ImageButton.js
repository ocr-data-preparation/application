import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {Gambar} from "./Gambar";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "10vw",
    textAlign: "center",
    direction: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  imgColumn: {
    direction: "column",
  },
  imgRow: {
    direction: "row",
  }
}));

const Gambar = ({
});

function drawRow() {
    return (
        <div>
            <span>tes</span>
            <span>tes</span>
            <span>tes</span>
            <span>tes</span>
            <span>tes</span>
            <span>tes</span>
            <span>tes</span>
            <span>tes</span>
            <span>tes</span>
            <span>tes</span>
        </div>        
    )
}

function drawColumn() {
    const classes = useStyles();
    return (
        <Grid container className={classes.imgColumn}>
            {drawRow()}
        </Grid>
    );    
}

function drawButtons() {
    const classes = useStyles();
    return (
    <Grid container className={classes.container}>
        {drawColumn()}
        {drawColumn()}
        {drawColumn()}
        {drawColumn()}
        {drawColumn()}
        {drawColumn()}
        {drawColumn()}
        {drawColumn()}
        {drawColumn()}
        {drawColumn()}
    </Grid>
    );
}

export default drawButtons;

