import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";
import Cookie from "universal-cookie";

const cookie = new Cookie();

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: "1vw",
    backgroundColor: "#FF5A5F",
    width: "23vw",
    marginLeft: "3.5vw",
    marginRight: "3.5vw",
    marginTop: "2vw",
    color: "white"
  }
});

export default function ProjectCard(props) {
  const classes = useStyles();
  const handleOnClick = id => {
    cookie.set("project-id", id);
  };

  return (
    <Link to="/home" onClick={() => handleOnClick(props.id)}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            Details
          </Typography>
          <Typography variant="body2" component="p">
            Desired Pixel: {props.pixel}px
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
