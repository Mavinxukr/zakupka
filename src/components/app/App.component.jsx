import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/home/Home.component';
import Login from '../../pages/login/Login.component';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Login' component={Login} />
    </Switch>
  )
}

export default App;