import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}Inicio`} component={asyncComponent(() => import('./SamplePage'))}/>
      <Route path={`${match.url}Admin`} component={asyncComponent(() => import('./Admin'))}/>
      <Route path={`${match.url}Contact`} component={asyncComponent(() => import('./Contact'))}/>
      <Route path={`${match.url}Photo`} component={asyncComponent(() => import('./Photo'))}/>
      <Route path={`${match.url}PhotoCabina`} component={asyncComponent(() => import('./PhotoCabina'))}/>
    </Switch>
  </div>
);

export default App;
