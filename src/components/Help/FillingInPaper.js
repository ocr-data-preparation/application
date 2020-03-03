import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import template_guide from "../../assets/img/template_guide.jpg";
import paper_filled from "../../assets/img/paper_filled.jpg";
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  container: {
      marginTop: "10vw",
      textAlign: "center",
      direction: "column",
      justifyContent: "center",
      alignItems: "center"
  },
  header: {
      marginTop: "-30px",
      padding: "50px"
  },
  iconButton: {
    placeSelf: "right"
  }
}));

function FillingInPaper() {
  const classes = useStyles();
  return (
    <div>
      <Grid container justifyContent="right">
        <Link to="/help">
          <IconButton className={classes.iconButton} aria-label="close">
            <CloseRoundedIcon />
          </IconButton>
        </Link>
      </Grid>
      <Grid container direction="column" justify="center" alignItems="center">
        <div>1</div>
        <Fab variant="extended">Download Paper Template</Fab>
      </Grid>
      <Grid container direction="column" justify="center" alignItems="center">
        <div>2</div>
        <div>Fill in the paper</div>
        <img src={template_guide} width="410.75" height="250"></img>
        <img src={paper_filled} width="353.78" height="250"></img>
      </Grid>
    </div>
  );
}

export default FillingInPaper;
