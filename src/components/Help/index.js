import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  IconButton,
  Paper,
  Grid,
  Divider,
  Tabs,
  Tab,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import FillingInPaper from "./FillingInPaper";
import SubmittingTutorial from "./SubmittingTutorial";
import TakingPhoto from "./TakingPhoto";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`help-tabpanel-${index}`}
      aria-labelledby={`help-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `help-tab-${index}`,
    "aria-controls": `help-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "3vw",
    textAlign: "center",
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2vw",
  },
  title: {
    textAlign: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "2vw",
  },
  display: {
    width: "70%",
    padding: "3vw",
  },
  back: {
    fontSize: "3vw",
    color: "white",
  },
  tabs: {
    marginLeft: "15vw",
  },
  tab: {
    fontSize: "1vw",
  },
}));

function Help() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Link to="/home">
        <IconButton aria-label="close">
          <ArrowBackRoundedIcon className={classes.back} />
        </IconButton>
      </Link>
      <Grid container className={classes.title}>
        <h1>TUTORIAL</h1>
      </Grid>
      <Grid container className={classes.container}>
        <Paper className={classes.display}>
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabs}
            variant="outlined"
            color="primary"
          >
            <Tab
              label="1. FILLING IN PAPER"
              {...a11yProps(0)}
              className={classes.tab}
            />
            <Tab
              label="2. TAKING PHOTO"
              {...a11yProps(1)}
              className={classes.tab}
            />
            <Tab
              label="3. SUBMITTING PHOTO"
              {...a11yProps(2)}
              className={classes.tab}
            />
          </Tabs>
          <Divider />
          <TabPanel value={value} index={0}>
            <FillingInPaper />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TakingPhoto />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <SubmittingTutorial />
          </TabPanel>
        </Paper>
      </Grid>
    </div>
  );
}

export default Help;
