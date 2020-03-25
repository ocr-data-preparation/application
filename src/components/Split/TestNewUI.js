import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Fab } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    container: {
        marginTop: "1vw",
        textAlign: "center",
        direction: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        position: "relative",
        marginTop: "10vw",
        textAlign: "center",
        direction: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonsContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(${-50}%, ${-50}%)`
    }
}));

function TestNewUI() {
    const classes = useStyles();
    var btnStyle;

    function styleButton() {
        btnStyle = {
            backgroundColor: "yellow",
            opacity: "0.3",
            width: "30px",
            height: "31px"
        };
        return btnStyle;
      }

    return(
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs={9} className={classes.imageContainer}>
                    <img 
                        src={require('./paper_filled.jpg')}
                        style={{width:'420px', height:'310px'}}
                        alt='image'>
                    </img>
                    <div container className={classes.buttonsContainer}>
                        <div>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                        </div>
                        <div>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                        </div>
                        <div>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                        </div>
                        <div>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                        </div>
                        <div>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                        </div>
                        <div>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                        </div>
                        <div>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                        </div>
                        <div>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                        </div>
                        <div>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                        </div>
                        <div>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                            <button 
                                style={styleButton()}>
                                tes
                            </button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
            <Fab variant="extended">
                SPLIT
            </Fab>
        </div>
    )
    
}

export default TestNewUI;