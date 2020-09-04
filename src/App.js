import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sales from './Pages/Sales/Sales';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import Favorite from './Pages/Favorite/Favorite';
import Announcement from './Pages/UserProfile/Announcement/Announcement';
import Recomend from './Pages/UserProfile/Recomend/Recomend';

import './index.scss';

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Sales} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile-purchases" component={Announcement} />
      <Route exact path="/profile-favorite" component={Favorite} />
      <Route exact path="/profile-recomend" component={Recomend} />
    </Switch>
  </>
);

export default App;
