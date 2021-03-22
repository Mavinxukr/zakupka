import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/home/Home.component';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
  )
}

export default App;