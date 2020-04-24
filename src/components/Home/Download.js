import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Container, CircularProgress } from "@material-ui/core";
import { CloudDownload } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import { URL_BASE_API } from "../../config";

import Button from "../UI/Button";

const cookies = new Cookies();

const useStyles = makeStyles((theme) => ({
  container: {
    display: "block",
    textAlign: "center",
    padding: "3vw",
  },
  cloudDownload: {
    fontSize: "20vw",
  },
}));

function Download() {
  const classes = useStyles();

  const [download, setDownload] = useState({
    data: null,
    loading: false,
    error: false,
  });

  const handleDownload = () => {
    try {
      setDownload({ ...download, loading: true });

      setTimeout(async () => {
        const projectId = cookies.get("project-id");

        const res = await axios.post(
          `${URL_BASE_API}/download/`,
          {
            id_project: projectId,
          },
          { responseType: "arraybuffer" }
        );

        const blob = new Blob([res.data], { type: "application/octet-stream" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `project-${projectId}.zip`;
        a.click();

        setDownload({ ...download, data: res.data, loading: false });
      }, 1000);
    } catch (err) {
      setDownload({ ...download, error: true });
    }
  };

  return (
    <Container className={classes.container}>
      <CloudDownload className={classes.cloudDownload} />
      <h3>Images in this project will be generated as a zip!</h3>
      {download.loading ? (
        <CircularProgress />
      ) : (
        <Button buttonTag={"Download"} OnClick={handleDownload} />
      )}
    </Container>
  );
}

export default Download;
