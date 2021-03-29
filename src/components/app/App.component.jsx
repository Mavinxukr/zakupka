import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/home/Home.component';
import Login from '../../pages/login/Login.component';
import { AppContainer } from './App.styled';
import { useDispatch } from 'react-redux';
import { fetchUserToken } from '../../toolkitRedux/reducers/userReducer';
import cookie from 'js-cookie'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (cookie.get('token')) {
      dispatch(fetchUserToken());
    }
  }, [dispatch])

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