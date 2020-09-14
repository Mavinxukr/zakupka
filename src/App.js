import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sales from './Pages/Sales/Sales';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import Favorite from './Pages/Profile/Favorite/Favorite';
import Announcement from './Pages/Profile/UserProfile/Announcement/Announcement';
import Recomend from './Pages/Profile/UserProfile/Recomend/Recomend';
import Best from './Pages/Profile/UserProfile/Best/Best';
import Victories from './Pages/Profile/Victories/Victories';
import Participate from './Pages/Profile/Participate/Participate';
import Planing from './Pages/Profile/Planing/Planing';
import PlaneOfSales from './Pages/PlanOfSales/PlaneOfSales';
import MyPlanSales from './Pages/MyPlanSales/MyPlanSales';
import MyCreatePlane from './Pages/MyCreatePlane/MyCreatePlane';

import './index.scss';

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Sales} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile-purchases" component={Announcement} />
      <Route exact path="/profile-favorite" component={Favorite} />
      <Route exact path="/profile-purchases/recomend" component={Recomend} />
      <Route exact path="/profile-purchases/best" component={Best} />
      <Route exact path="/profile-victories" component={Victories} />
      <Route exact path="/profile-participate" component={Participate} />
      <Route exact path="/profile-planing" component={Planing} />
      <Route exact path="/plane-of-sales" component={PlaneOfSales} />
      <Route exact path="/my-plane-sales" component={MyPlanSales} />
      <Route exact path="/my-plane-sales/my-create-plan" component={MyCreatePlane} />
    </Switch>
  </>
);

export default App;
