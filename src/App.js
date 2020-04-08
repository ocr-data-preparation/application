import React from "react";
import { Switch, Route } from "react-router-dom";

import Project from "./components/Project";
import Warning from "./components/Warning";
import Home from "./components/Home";
import Help from "./components/Help";
import Buttons from "./components/Split/Buttons";
// import Test from "./components/Split/Test";
import TestNewUI from "./components/Split/TestNewUI";
import FillingInPaper from "./components/Help/FillingInPaper";
import TakingPhoto from "./components/Help/TakingPhoto";
import SubmittingTutorial from "./components/Help/SubmittingTutorial";
import SplitDone from "./components/splitDone/splitDoneComp";

import requiredToken from './middleware/requiredToken';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Project} />
      <Route path="/home" component={requiredToken(Home)} />
      <Route path="/warning" component={requiredToken(Warning)} />
      <Route exact path="/help" component={Help} />
      {/* <Route exact path="/split" component={Split} /> */}
      <Route exact path="/buttons" component={requiredToken(Buttons)} />
      <Route exact path="/test" component={requiredToken(TestNewUI)} />
      <Route path="/split/done" component={requiredToken(SplitDone)} />
      <Route path="/help/paper" component={FillingInPaper} />
      <Route path="/help/take" component={TakingPhoto} />
      <Route path="/help/submit" component={SubmittingTutorial} />
    </Switch>
  );
}

export default App;
