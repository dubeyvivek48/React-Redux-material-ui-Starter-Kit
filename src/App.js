import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PrivateRoute from "./components/private-route";
import SignIn from "./components/SignIn";
import LandingPageContainer from "./components/landing-page.container";
import SignUp from "./components/SignUp";
import RoutesEnum from "./models/enums/RoutesEnum";

const App = () => {
  return (
      <BrowserRouter>
          <Switch>
              <PrivateRoute path={RoutesEnum.homePath} exact ><LandingPageContainer /></PrivateRoute>
              <Route path={RoutesEnum.signIn} component={SignIn}/>
              <Route path={RoutesEnum.signUp} component={SignUp}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App ;
