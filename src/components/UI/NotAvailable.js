import React from "react";
import { Container } from "@material-ui/core";
import { Warning } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import Button from "./Button";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "block",
    textAlign: "center",
    padding: "3vw",
  },
  warning: {
    fontSize: "20vw",
  },
}));

function Home() {
  const classes = useStyles();

  const redirectToHome = () => {
    window.location.href = "/home";
  };

  return (
    <Container className={classes.container}>
      <Warning className={classes.warning} />
      <h3>This feature is currently not available!</h3>
      <Button buttonTag={"Back to Home"} OnClick={redirectToHome} />
    </Container>
  );
}

export default Home;
