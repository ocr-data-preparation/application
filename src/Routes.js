import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Warning from './Warning';
import Home from './Home';
import Help from './Help';
import FillingInPaper from './FillingInPaper';
import history from './History';
import TakingPhoto from './TakingPhoto';
import SubmittingTutorial from './SubmittingTutorial';
import DownloadingTutorial from './DownloadingTutorial';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Warning" component={Warning} />
                    <Route path="/Help" component={Help} />
                    <Route path="/FillingInPaper" component={FillingInPaper} />
                    <Route path="/TakingPhoto" component={TakingPhoto} />
                    <Route path="/SubmittingTutorial" component={SubmittingTutorial} />
                    <Route path="/DownloadingTutorial" component={DownloadingTutorial} />
                </Switch>
            </Router>
        )
    }
}