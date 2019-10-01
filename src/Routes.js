import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import Main from "./Main";
import GetInvolved from "./GetInvolved";
import Events from "./Events";
import Login from "./containers/Login";
import Register from "./containers/Register";
import TeamPage from "./TeamPage";
import identifyRole from "./identifyRole";
import adminReg from "./adminRegister";
import studentReg from "./studentRegister";
import UserPage from "./Profiles/userpage";
import studentPage from "./Profiles/studentpage";

export default () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/Main" component={Main} />
    <Route path="/TeamPage" component={TeamPage} />
    <Route path="/GetInvolved" component={GetInvolved} />
    <Route path="/Events" component={Events} />
    <Route path="/Login" component={Login} />
    <Route exact path="/Register" component={Register} />
    <Route path="/userpage" component={UserPage} />
    <Route path="/idRoles" component={identifyRole} />
    <Route path="/Register/student" component={studentPage} />
  </Switch>
);
