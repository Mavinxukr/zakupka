import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/home/Home.component';
import Login from '../../pages/login/Login.component';
import { AppContainer } from './App.styled';
const App = () => {
  return (
    <AppContainer>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Login' component={Login} />
      </Switch>
    </AppContainer>
  )
}

export default App;