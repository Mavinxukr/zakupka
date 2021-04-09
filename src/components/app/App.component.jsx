import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppContainer } from './App.styled';
import { useDispatch } from 'react-redux';
import { fetchUserToken } from '../../toolkitRedux/reducers/userReducer';
import cookie from 'js-cookie'
import Home from '../../pages/home/Home.component';
import Login from '../../pages/login/Login.component'; 
import Registration from '../../pages/registration/Registration.component';

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
        <Route path='/Registration' component={Registration} />
      </Switch>
    </AppContainer>
  )
}

export default App;