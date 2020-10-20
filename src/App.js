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
import PurchasesDemands from './Pages/Purchases/Purchases-Demands/Purchases-Demands';
import PurchasesReport from './Pages/Purchases/Purchases-Report/Purchases-Report';
import PurchasesQuestions from './Pages/Purchases/Purchases-Quetions/Purchases-Questions';
import PurchasesMonitoring from './Pages/Purchases/Purchases-Monitoring/Purchases-Monitoring';
import PurchasesInside from './Pages/Purchases/Purchases-Inside/Purchases-Inside';
import PurchasesDozorro from './Pages/Purchases/Purchases-Dozorro/Purchases-Dozorro';
import PurchasesClaims from './Pages/Purchases/Purchases-Сlaims/Purchases-Сlaims';
import PurchasesSales from './Pages/Purchases/Purchases-Sales/PurchasesSales';
import Complaints from './Pages/Complaints/Complaints';
import Classifier from './Components/Classifier/Classifier';
import CancelPurchases from './Pages/Purchases/Purchases-Cancel/Purchases-Cancel';
import CancelMyPlan from './Pages/MyCreatePlane/CancelMyPlane';
import NewComplains from './Pages/Complaints/NewComplains/NewComplains';
import Ask from './Pages/Purchases/Purchases-Quetions/Ask/Ask';
import CancelComplains from './Pages/Complaints/CancelComplains/CancelComplains';
import PlanInfo from './Pages/MyPlanSales/PlanInfo/PlanInfo';

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Sales} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile-favorite" component={Favorite} />
      <Route exact path="/profile-purchases" component={Announcement} />
      <Route exact path="/profile-purchases/recomend" component={Recomend} />
      <Route exact path="/profile-purchases/best" component={Best} />
      <Route exact path="/profile-victories" component={Victories} />
      <Route exact path="/profile-participate" component={Participate} />
      <Route exact path="/profile-planing" component={Planing} />
      <Route exact path="/plane-of-sales" component={PlaneOfSales} />
      <Route exact path="/my-plane-sales" component={MyPlanSales} />
      <Route exact path="/my-plane-sales/:id" component={PlanInfo} />
      <Route exact path="/my-plane-sales/my-create-plan" component={MyCreatePlane} />
      <Route exact path="/my-plane-sales/cancel-my-plan" component={CancelMyPlan} />
      <Route exact path="/purchases/demands" component={PurchasesDemands} />
      <Route exact path="/purchases/dozorro" component={PurchasesDozorro} />
      <Route exact path="/purchases/inside" component={PurchasesInside} />
      <Route exact path="/purchases/monitoring" component={PurchasesMonitoring} />
      <Route exact path="/purchases/questions" component={PurchasesQuestions} />
      <Route exact path="/purchases/report" component={PurchasesReport} />
      <Route exact path="/purchases/sales" component={PurchasesSales} />
      <Route exact path="/purchases/claims" component={PurchasesClaims} />
      <Route exact path="/purchases/cancel" component={CancelPurchases} />
      <Route exact path="/purchases/questions/ask" component={Ask} />
      <Route exact path="/complaints" component={Complaints} />
      <Route exact path="/complaints/newComplains" component={NewComplains} />
      <Route exact path="/complaints/cancelComplains" component={CancelComplains} />
      <Route exact path="/classifier" component={Classifier} />
    </Switch>
  </>
);

export default App;
