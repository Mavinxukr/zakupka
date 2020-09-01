import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sales from './Pages/Sales/Sales';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import './index.scss';

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Sales} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </>
);

export default App;
