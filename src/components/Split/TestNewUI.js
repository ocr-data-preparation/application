// INI BUAT ELVINA COBA2, JANGAN DIAPA-APAIN

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Fab } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
        textAlign: 'left'
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
        marginTop: "3vw",
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
    const [tipePotongan, setTipePotongan] = React.useState('');
    const [tipeWarna, setTipeWarna] = React.useState('');

    const handleChangeTipePotongan = event => {
        setTipePotongan(event.target.value);
    };

    const handleChangeTipeWarna = event => {
        setTipeWarna(event.target.value);
    };

    function styleButton() {
        btnStyle = {
            backgroundColor: "yellow",
            opacity: "0.3",
            width: "30px",
            height: "31px",
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
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="potongan">Tipe Potongan</InputLabel>
                            <Select
                                labelId="potongan"
                                id="tipe-potongan"
                                value={tipePotongan}
                                onChange={handleChangeTipePotongan}
                                >
                                <MenuItem value={"kotak"}>Kotak</MenuItem>
                                <MenuItem value={"angka"}>Angka</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="warna">Tipe Warna</InputLabel>
                            <Select
                                labelId="warna"
                                id="tipe-warna"
                                value={tipeWarna}
                                onChange={handleChangeTipeWarna}
                                >
                                <MenuItem value={"kotak"}>Color</MenuItem>
                                <MenuItem value={"angka"}>Black and White</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <FormLabel id="noise">Handle Noise</FormLabel>
                            <RadioGroup>
                                <FormControlLabel value="none" control={<Radio color="primary" />} label="None" />
                                <FormControlLabel value="auto" control={<Radio color="primary" />} label="Auto" />
                                <FormControlLabel value="manual" control={<Radio color="primary" />} label="Manual" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <FormLabel id="tebal">Ketebalan</FormLabel>
                            <RadioGroup>
                                <FormControlLabel value="none" control={<Radio color="primary" />} label="None" />
                                <FormControlLabel value="increase" control={<Radio color="primary" />} label="Increase" />
                                <FormControlLabel value="decrease" control={<Radio color="primary" />} label="Decrease" />
                            </RadioGroup>
                        </FormControl>
                        <Fab variant="extended">
                            Apply
                        </Fab>
                    </Paper>
                </Grid>
            </Grid>
            <Fab variant="extended">
                SPLIT
            </Fab>
        </div>
    )
}

export default TestNewUI;