import React from "react";
import { Switch, Route } from "react-router-dom";

import Warning from "./components/Warning";
import Home from "./components/Home";
import Help from "./components/Help";
import FillingInPaper from "./components/Help/FillingInPaper";
import TakingPhoto from "./components/Help/TakingPhoto";
import SubmittingTutorial from "./components/Help/SubmittingTutorial";
import DownloadingTutorial from "./components/Help/DownloadingTutorial";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/warning" component={Warning} />
      <Route exact path="/help" component={Help} />
      <Route path="/help/paper" component={FillingInPaper} />
      <Route path="/help/take" component={TakingPhoto} />
      <Route path="/help/submit" component={SubmittingTutorial} />
      <Route path="/help/download" component={DownloadingTutorial} />
    </Switch>
  );
}

export default App;
