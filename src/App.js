import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sales from './Pages/Sales/Sales';
import './index.scss';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Sales} />
    </Switch>
  </div>
);

export default App;
